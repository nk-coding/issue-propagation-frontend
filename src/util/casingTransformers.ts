export function enumToRegularCase(enumValue: string) {
    return enumValue.replaceAll("_", " ").replace(/(?<=.)[A-Z]/g, (char) => char.toLowerCase());
}
