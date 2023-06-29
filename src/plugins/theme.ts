import { Scheme, argbFromHex, themeFromSourceColor, hexFromArgb } from "@material/material-color-utilities";

interface ThemeColors {
    [key: string]: string;
}

const mainColorMappings: [string, keyof Scheme][] = [
    ["primary", "primary"],
    ["on-primary", "onPrimary"],
    ["secondary", "secondary"],
    ["on-secondary", "onSecondary"],
    ["tertiary", "tertiary"],
    ["on-tertiary", "onTertiary"],
    ["surface", "surface"],
    ["on-surface", "onSurface"],
    ["surface-variant", "surfaceVariant"],
    ["on-surface-variant", "onSurfaceVariant"],
    ["background", "background"],
    ["on-background", "onBackground"],
    ["error", "error"],
    ["on-error", "onError"],
]

const surfaceColorMappings: [string, number, number][] = [
    ["lowest", 100, 4],
    ["low", 96, 10],
    ["", 94, 12],
    ["high", 92, 17],
    ["highest", 90, 22],
]

export function generateThemeColors(color: string, dark: boolean): ThemeColors {
    const theme = themeFromSourceColor(argbFromHex(color));
    const scheme = dark ? theme.schemes.dark : theme.schemes.light;
    const colors: ThemeColors = {};
    mainColorMappings.forEach(([key, value]) => {
        colors[key] = hexFromArgb(scheme[value] as number);
    });
    surfaceColorMappings.forEach(([key, lightValue, darkValue]) => {
        const value = dark ? darkValue : lightValue;
        colors[`surface-container-${key}`] = hexFromArgb(theme.palettes.neutral.tone(value));
    });
    return colors;
}