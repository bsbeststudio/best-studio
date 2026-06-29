import getReadingTime from 'reading-time';
import { toString } from 'mdast-util-to-string';
import type { RehypePlugin, RemarkPlugin } from '@astrojs/markdown-remark';

export const readingTimeRemarkPlugin: RemarkPlugin = () => {
  return function (tree, file) {
    const textOnPage = toString(tree);
    const readingTime = Math.ceil(getReadingTime(textOnPage).minutes);

    if (typeof file?.data?.astro?.frontmatter !== 'undefined') {
      file.data.astro.frontmatter.readingTime = readingTime;
    }
  };
};

export const responsiveTablesRehypePlugin: RehypePlugin = () => {
  return function (tree) {
    if (!tree.children) return;

    for (let i = 0; i < tree.children.length; i++) {
      const child = tree.children[i];

      if (child.type === 'element' && child.tagName === 'table') {
        tree.children[i] = {
          type: 'element',
          tagName: 'div',
          properties: {
            style: 'overflow:auto',
          },
          children: [child],
        };

        i++;
      }
    }
  };
};

/** Extract FAQ pairs from ## FAQ sections in markdown.
 *  Looks for bold question paragraphs (**Q:**, **Q：**, etc.)
 *  followed by plain-text answer paragraphs.
 */
export const faqExtractRemarkPlugin: RemarkPlugin = () => {
  return function (tree: any, file: any) {
    const faqs: { q: string; a: string }[] = [];
    let inFaqSection = false;
    let currentQuestion: string | null = null;
    const answerLines: string[] = [];

    function flush() {
      if (currentQuestion && answerLines.length > 0) {
        faqs.push({ q: currentQuestion, a: answerLines.join(' ').trim() });
      }
      currentQuestion = null;
      answerLines.length = 0;
    }

    for (const node of tree.children ?? []) {
      // Detect ## FAQ heading
      if (node.type === 'heading' && node.depth === 2) {
        const headingText = toString(node).trim();
        if (/^FAQ/i.test(headingText) || headingText.includes('FAQ') || headingText.includes('常见问题')) {
          flush();
          inFaqSection = true;
        } else {
          flush();
          inFaqSection = false;
        }
        continue;
      }

      if (!inFaqSection) continue;

      if (node.type === 'paragraph') {
        const raw = toString(node).trim();
        // Match bold question patterns: **Q:** or **Q：** or just **...？** etc.
        const isQuestion = /^\*\*Q[：:]/i.test(raw) || /^\*\*[^\*]+[？?]\*\*/.test(raw);
        if (isQuestion) {
          flush();
          // Strip the bold markers and question prefix
          currentQuestion = raw.replace(/^\*\*Q[：:\s]*/i, '').replace(/\*\*$/, '').trim();
        } else if (currentQuestion) {
          answerLines.push(raw);
        }
      }
    }
    flush();

    if (faqs.length > 0 && file?.data?.astro?.frontmatter) {
      file.data.astro.frontmatter.faqs = faqs;
    }
  };
};
