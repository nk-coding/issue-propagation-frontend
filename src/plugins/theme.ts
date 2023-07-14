import { Scheme, argbFromHex, themeFromSourceColor, hexFromArgb } from "@material/material-color-utilities";

interface ThemeColors {
    [key: string]: string;
}

const commonColors = {
    "issue-open": "#00BA39",
    "issue-closed": "#FF0036",
    "issue-incoming": "#00C6EB",
    "issue-outgoing": "#FF8900"
};

const mainColorMappings: [string, keyof Scheme][] = [
    ["primary", "primary"],
    ["on-primary", "onPrimary"],
    ["secondary", "secondary"],
    ["on-secondary", "onSecondary"],
    ["tertiary", "tertiary"],
    ["on-tertiary", "onTertiary"],
    ["error", "error"],
    ["on-error", "onError"],
    ["primary-container", "primaryContainer"],
    ["on-primary-container", "onPrimaryContainer"],
    ["secondary-container", "secondaryContainer"],
    ["on-secondary-container", "onSecondaryContainer"],
    ["tertiary-container", "tertiaryContainer"],
    ["on-tertiary-container", "onTertiaryContainer"],
    ["error-container", "errorContainer"],
    ["on-error-container", "onErrorContainer"]
];

const surfaceColorMappings: [string, number, number][] = [
    ["surface-container-lowest", 100, 4],
    ["surface-container-low", 96, 10],
    ["surface-container", 94, 12],
    ["surface-container-high", 92, 17],
    ["surface-container-highest", 90, 22],
    ["surface", 98, 6],
    ["on-surface", 10, 90],
    ["surface-variant", 90, 30],
    ["on-surface-variant", 30, 80],
    ["background", 98, 6],
    ["on-background", 10, 90],
    ["inverse-surface", 20, 90],
    ["on-inverse-surface", 95, 20]
];

export function generateThemeColors(color: string, dark: boolean): ThemeColors {
    const theme = themeFromSourceColor(argbFromHex(color));
    const scheme = dark ? theme.schemes.dark : theme.schemes.light;
    const colors: ThemeColors = {};
    mainColorMappings.forEach(([key, value]) => {
        colors[key] = hexFromArgb(scheme[value] as number);
    });
    surfaceColorMappings.forEach(([key, lightValue, darkValue]) => {
        const value = dark ? darkValue : lightValue;
        colors[key] = hexFromArgb(theme.palettes.neutral.tone(value));
    });
    return {
        ...colors,
        ...commonColors
    };
}
