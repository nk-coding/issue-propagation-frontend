export function transformSearchQuery(query: string): string | undefined {
    const escapedBackslashes = query.replace(/\\/g, "\\\\");
    let normalizedQuotes: string;
    if ((escapedBackslashes.match(/"/g)?.length ?? 0) % 2 === 0) {
        normalizedQuotes = escapedBackslashes;
    } else {
        normalizedQuotes = escapedBackslashes + '"';
    }
    const replacedSpecialChars = normalizedQuotes.replace(
        /"([^"]*)"|(AND|NOT|OR|&&|\|\||[+\-!()^~*?:])/g,
        (match, insideQuotes, plusMinus) => {
            if (insideQuotes) {
                return match;
            } else if (plusMinus) {
                return `\\${plusMinus}`;
            } else {
                return match;
            }
        }
    );
    let finalString = "";
    let currentQuotedSection = undefined;
    for (const char of replacedSpecialChars) {
        if (char === '"') {
            if (currentQuotedSection != undefined) {
                currentQuotedSection += char;
                if (!currentQuotedSection.match(/^"(\s*)"$/)) {
                    finalString += currentQuotedSection;
                    currentQuotedSection = undefined;
                }
            } else {
                currentQuotedSection = '"';
            }
        } else {
            if (currentQuotedSection != undefined) {
                currentQuotedSection += char;
            } else {
                finalString += char;
            }
        }
    }
    if (finalString.match(/^\s*$/)) {
        return undefined;
    } else {
        const trimmedString = finalString.trim();
        if (trimmedString.endsWith('"')) {
            return trimmedString;
        } else {
            return trimmedString + "*";
        }
    }
}
