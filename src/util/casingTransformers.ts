export function enumToRegularCase(enumValue: string) {
    return enumValue.replace("_", " ").replace(/(?<=.)[A-Z]/g, (char) => char.toLowerCase());
}
