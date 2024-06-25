import MarkdownIt from 'markdown-it';
import type { IMarkdownRenderer } from '../../domain/markdown';
import sanitizeHTML from 'sanitize-html';

export class MarkdownRenderer implements IMarkdownRenderer {

    static instance: MarkdownRenderer;
    private markdownProcessor: MarkdownIt

    private constructor () { 
        this.markdownProcessor = MarkdownIt({ html: true })
    }

    static getInstance () {
        if (!this.instance) {
            this.instance = new MarkdownRenderer()
        }
        return this.instance
    }

    private getSanitizerConfig = () => ({
        allowedTags: sanitizeHTML.defaults.allowedTags.concat([ 'img' ]),
        allowedAttributes: {
            ...sanitizeHTML.defaults.allowedAttributes,
            img: [ 'id', 'class', 'src', 'srcset', 'alt' ],
            h1: [ 'id', 'class', 'src', 'srcset', 'alt' ],
        }

    })

    private sanitizeHTML(html: string): string {
        const cleanHTML = sanitizeHTML(html, this.getSanitizerConfig())
        return cleanHTML
    }

    renderTextToHTML(markdown: string): string {
        return this.sanitizeHTML(
            this.markdownProcessor.render(markdown)
        );
    }

    renderFileToHTML(markdown: string): string {
        return this.sanitizeHTML(
            this.markdownProcessor.render(markdown)
        );
    }
}