import { toPng } from 'html-to-image'
import { jsPDF } from 'jspdf'

const PAGE_W = 794
const PAGE_H = 1123
const PAD_X = 24
const PAD_Y = 20
const HEADER_H = 44
const FOOTER_H = 26
const BODY_PAD_TOP = 10
const BODY_H = PAGE_H - PAD_Y * 2 - HEADER_H - FOOTER_H
const PACK_H = BODY_H - BODY_PAD_TOP

export function cheatSheetBasename(type: string) {
  return `${type.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-cheat-sheet`
}

export function packBlockHeights(heights: number[], maxHeight: number) {
  const pages: { indexes: number[]; extraHeight: number }[] = []
  let current: number[] = []
  let used = 0

  heights.forEach((height, index) => {
    const size = Math.max(height, 1)
    if (size > maxHeight) {
      if (current.length > 0) {
        pages.push({ indexes: current, extraHeight: 0 })
        current = []
        used = 0
      }
      pages.push({ indexes: [index], extraHeight: size - maxHeight })
      return
    }
    if (current.length > 0 && used + size > maxHeight) {
      pages.push({ indexes: current, extraHeight: 0 })
      current = [index]
      used = size
      return
    }
    current.push(index)
    used += size
  })

  if (current.length > 0) pages.push({ indexes: current, extraHeight: 0 })
  return pages
}

function waitForPaint() {
  return new Promise<void>((resolve) => {
    requestAnimationFrame(() => requestAnimationFrame(() => resolve()))
  })
}

function createPageFrame(
  title: string,
  type: string,
  page: number,
  total: number,
  pageHeight: number,
) {
  const frame = document.createElement('div')
  frame.style.cssText = [
    'box-sizing:border-box',
    `width:${PAGE_W}px`,
    `height:${pageHeight}px`,
    `padding:${PAD_Y}px ${PAD_X}px`,
    'background:#f4f7fb',
    'color:#101820',
    'font-family:Figtree,ui-sans-serif,system-ui,sans-serif',
    'display:flex',
    'flex-direction:column',
    'overflow:hidden',
  ].join(';')

  const header = document.createElement('header')
  header.style.cssText =
    'display:flex;align-items:center;justify-content:space-between;gap:12px;height:44px;border-bottom:2px solid #2563eb;flex-shrink:0'
  header.innerHTML = `
    <div>
      <p style="margin:0;font-size:9px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:#2563eb">Coding Cheat Sheet</p>
      <p style="margin:2px 0 0;font-family:Bricolage Grotesque,Figtree,sans-serif;font-size:16px;font-weight:800;letter-spacing:-0.03em">${title}</p>
    </div>
    <span style="border-radius:8px;background:#dbeafe;color:#1e3a8a;font-size:10px;font-weight:700;padding:4px 8px">${type}</span>
  `

  const body = document.createElement('div')
  body.style.cssText = `flex:1;min-height:0;overflow:hidden;padding-top:${BODY_PAD_TOP}px`

  const footer = document.createElement('footer')
  footer.style.cssText =
    'display:flex;justify-content:space-between;align-items:center;height:26px;border-top:1px solid rgba(16,24,32,0.12);font-size:9px;font-weight:700;letter-spacing:0.04em;color:#5f6b7a;flex-shrink:0'
  footer.innerHTML = `<span>Interview revision notes</span><span>${type} · ${page} / ${total}</span>`

  frame.append(header, body, footer)
  return { frame, body }
}

export async function exportCategoryPdf(
  measureRoot: HTMLElement,
  meta: { title: string; type: string },
) {
  const documentNode = measureRoot.querySelector('[data-print-document]')
  if (!(documentNode instanceof HTMLElement)) {
    throw new Error('Print document missing')
  }

  const blocks = [
    ...documentNode.querySelectorAll<HTMLElement>('[data-print-block]'),
  ]
  if (blocks.length === 0) {
    throw new Error('Nothing to print')
  }

  const pages = packBlockHeights(
    blocks.map((block) => block.offsetHeight),
    PACK_H,
  )
  const total = Math.max(pages.length, 1)
  const firstHeight = PAGE_H + (pages[0]?.extraHeight ?? 0)
  const pdf = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: [210, (firstHeight * 210) / PAGE_W],
    compress: true,
  })

  const host = document.createElement('div')
  host.setAttribute('aria-hidden', 'true')
  host.style.cssText =
    'position:fixed;left:-10000px;top:0;pointer-events:none;z-index:-1;'
  document.body.appendChild(host)

  try {
    for (let i = 0; i < pages.length; i += 1) {
      const packed = pages[i]
      if (!packed) continue
      const pageHeight = PAGE_H + packed.extraHeight
      const { frame, body } = createPageFrame(
        meta.title,
        meta.type,
        i + 1,
        total,
        pageHeight,
      )
      for (const index of packed.indexes) {
        const source = blocks[index]
        if (source) body.appendChild(source.cloneNode(true))
      }
      host.replaceChildren(frame)
      await waitForPaint()
      if (document.fonts?.ready) await document.fonts.ready

      const dataUrl = await toPng(frame, {
        pixelRatio: 2,
        cacheBust: true,
        backgroundColor: '#f4f7fb',
        width: PAGE_W,
        height: pageHeight,
      })

      const pageHeightMm = (pageHeight * 210) / PAGE_W
      if (i > 0) pdf.addPage([210, pageHeightMm], 'p')
      pdf.addImage(dataUrl, 'PNG', 0, 0, 210, pageHeightMm, undefined, 'FAST')
    }

    pdf.save(`${cheatSheetBasename(meta.type)}.pdf`)
  } finally {
    host.remove()
  }
}
