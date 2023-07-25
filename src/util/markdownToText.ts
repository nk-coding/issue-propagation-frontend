import { remark } from "remark";
import stripMarkdown from "strip-markdown";

const processor = remark().use(stripMarkdown);

export function markdownToText(markdown: string): string {
    const res = String(processor.processSync(markdown));
    return res;
}
