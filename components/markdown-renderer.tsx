"use client"

import { useMemo } from "react"

interface MarkdownRendererProps {
  content: string
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  const renderedContent = useMemo(() => {
    // Enhanced markdown parser
    let html = content

    // Escape HTML first
    html = html.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")

    // Code blocks (must be processed before inline code)
    html = html.replace(/```(\w+)?\n([\s\S]*?)```/gim, (match, lang, code) => {
      const language = lang || "text"
      return `<pre><code class="language-${language}">${code.trim()}</code></pre>`
    })

    // Inline code
    html = html.replace(/`([^`]+)`/gim, "<code>$1</code>")

    // Headers
    html = html.replace(/^### (.*$)/gim, '<h3 id="$1">$1</h3>')
    html = html.replace(/^## (.*$)/gim, '<h2 id="$1">$1</h2>')
    html = html.replace(/^# (.*$)/gim, '<h1 id="$1">$1</h1>')

    // Bold and Italic
    html = html.replace(/\*\*(.*?)\*\*/gim, "<strong>$1</strong>")
    html = html.replace(/\*(.*?)\*/gim, "<em>$1</em>")

    // Links
    html = html.replace(/\[([^\]]+)\]$$([^)]+)$$/gim, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')

    // Lists
    html = html.replace(/^- (.*$)/gim, "<li>$1</li>")

    // Convert consecutive list items to proper ul
    html = html.replace(/(<li>.*<\/li>\s*)+/gims, (match) => {
      return `<ul>${match}</ul>`
    })

    // Paragraphs - split by double newlines
    const paragraphs = html.split(/\n\s*\n/)
    html = paragraphs
      .map((paragraph) => {
        paragraph = paragraph.trim()
        if (!paragraph) return ""

        // Don't wrap headers, lists, or code blocks in paragraphs
        if (paragraph.match(/^<(h[1-6]|ul|pre|code)/)) {
          return paragraph
        }

        // Replace single newlines with <br> within paragraphs
        paragraph = paragraph.replace(/\n/g, "<br>")

        return `<p>${paragraph}</p>`
      })
      .join("\n")

    // Clean up
    html = html.replace(/&lt;(\/?)(h[1-6]|p|ul|li|strong|em|code|pre|a|br)([^&]*)&gt;/gim, "<$1$2$3>")
    html = html.replace(/&quot;/g, '"')

    return html
  }, [content])

  return <div dangerouslySetInnerHTML={{ __html: renderedContent }} />
}

export default MarkdownRenderer
