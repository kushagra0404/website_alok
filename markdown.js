const renderMarkdown = (() => {
  const escapeSource = (text) =>
    text.replace(/&/g, "&amp;").replace(/</g, "&lt;");

  const attr = (value) =>
    value
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;")
      .replace(/</g, "&lt;");

  const isSafeUrl = (url) => !/^\s*(?:javascript|data|vbscript):/i.test(url);

  const renderInline = (text) => {
    const codeSpans = [];

    let output = text.replace(/`([^`\n]+)`/g, (_, snippet) => {
      codeSpans.push(`<code>${snippet}</code>`);
      return `\u0000${codeSpans.length - 1}\u0000`;
    });

    const target = String.raw`((?:[^()\s]+|\([^()]*\))+)`;

    output = output
      .replace(
        new RegExp(String.raw`!\[([^\]]*)\]\(${target}\)`, "g"),
        (match, alt, src) =>
          isSafeUrl(src) ? `<img src="${attr(src)}" alt="${attr(alt)}">` : match
      )
      .replace(
        new RegExp(String.raw`\[([^\]]+)\]\(${target}\)`, "g"),
        (match, label, href) =>
          isSafeUrl(href) ? `<a href="${attr(href)}">${label}</a>` : label
      )
      .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
      .replace(/\*([^*\n]+)\*/g, "<em>$1</em>")
      .replace(/~~([^~]+)~~/g, "<del>$1</del>");

    return output.replace(/\u0000(\d+)\u0000/g, (_, index) => codeSpans[Number(index)]);
  };

  const renderBlocks = (lines) => {
    const html = [];
    let i = 0;

    while (i < lines.length) {
      const line = lines[i];

      if (!line.trim()) {
        i++;
        continue;
      }

      const fence = line.match(/^```(\S*)\s*$/);
      if (fence) {
        const code = [];
        i++;
        while (i < lines.length && !/^```\s*$/.test(lines[i])) {
          code.push(lines[i++]);
        }
        i++;
        const language = fence[1] ? ` class="language-${attr(fence[1])}"` : "";
        html.push(`<pre><code${language}>${code.join("\n")}</code></pre>`);
        continue;
      }

      const heading = line.match(/^(#{1,6})\s+(.*)$/);
      if (heading) {
        const level = heading[1].length;
        html.push(`<h${level}>${renderInline(heading[2].trim())}</h${level}>`);
        i++;
        continue;
      }

      if (/^(?:-{3,}|\*{3,}|_{3,})\s*$/.test(line)) {
        html.push("<hr>");
        i++;
        continue;
      }

      if (/^>/.test(line)) {
        const quote = [];
        while (i < lines.length && /^>/.test(lines[i])) {
          quote.push(lines[i++].replace(/^>\s?/, ""));
        }
        html.push(`<blockquote>${renderBlocks(quote)}</blockquote>`);
        continue;
      }

      const listItem = line.match(/^\s*([-*+]|\d+\.)\s+(.*)$/);
      if (listItem) {
        const ordered = /\d/.test(listItem[1]);
        const items = [];

        while (i < lines.length) {
          const item = lines[i].match(/^\s*([-*+]|\d+\.)\s+(.*)$/);
          if (!item) break;

          let text = item[2];
          i++;

          while (
            i < lines.length &&
            lines[i].trim() &&
            !/^\s*([-*+]|\d+\.)\s+/.test(lines[i]) &&
            !/^(#{1,6}\s|>|```)/.test(lines[i])
          ) {
            text += ` ${lines[i].trim()}`;
            i++;
          }

          items.push(`<li>${renderInline(text)}</li>`);
        }

        const tag = ordered ? "ol" : "ul";
        html.push(`<${tag}>${items.join("")}</${tag}>`);
        continue;
      }

      const paragraph = [];
      while (
        i < lines.length &&
        lines[i].trim() &&
        !/^(#{1,6}\s|>|```)/.test(lines[i]) &&
        !/^\s*([-*+]|\d+\.)\s+/.test(lines[i]) &&
        !/^(?:-{3,}|\*{3,}|_{3,})\s*$/.test(lines[i])
      ) {
        paragraph.push(lines[i].trim());
        i++;
      }
      html.push(`<p>${renderInline(paragraph.join(" "))}</p>`);
    }

    return html.join("\n");
  };

  return (source) => {
    const normalized = String(source).replace(/\r\n?/g, "\n");
    return renderBlocks(escapeSource(normalized).split("\n"));
  };
})();
