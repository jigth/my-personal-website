export interface IMarkdownRenderer {
    renderTextToHTML(markdown: string): string
    renderFileToHTML(path: string): string
}
