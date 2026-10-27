import { toPng } from 'html-to-image'
import { jsPDF } from 'jspdf'

export type CheatExportFormat = 'png' | 'pdf'

function downloadDataUrl(dataUrl: string, filename: string) {
  const link = document.createElement('a')
  link.href = dataUrl
  link.download = filename
  link.rel = 'noopener'
  document.body.appendChild(link)
  link.click()
  link.remove()
}

export async function exportA4Node(
  node: HTMLElement,
  format: CheatExportFormat,
  basename: string,
) {
  const dataUrl = await toPng(node, {
    pixelRatio: 2,
    cacheBust: true,
    backgroundColor: '#f4f7fb',
  })

  if (format === 'png') {
    downloadDataUrl(dataUrl, `${basename}.png`)
    return
  }

  const pdf = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
    compress: true,
  })
  pdf.addImage(dataUrl, 'PNG', 0, 0, 210, 297, undefined, 'FAST')
  pdf.save(`${basename}.pdf`)
}

export function cheatSheetBasename(type: string) {
  return `${type.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-cheat-sheet`
}
