export function fallbackColor(color: string): string {
    if (/^#[a-z0-9]{1,6}$/i.test(color)) {
        switch (color.length) {
            case 2:
                return `#${color[1].repeat(6)}`;
            case 3:
                return `#${color.substring(1, 3).repeat(3)}`;
            case 4:
                return `#${color[1].repeat(2)}${color[2].repeat(2)}${color[3].repeat(2)}`;
            case 5:
                return color + "00";
            case 6:
                return color + "0";
            case 7:
                return color;
        }
        return "#000000";
    } else {
        return "#000000";
    }
}
