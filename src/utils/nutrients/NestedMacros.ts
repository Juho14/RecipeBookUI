export function addNestedMacros(target: Record<string, number>, source: Record<string, number>, factor: number) {
  Object.keys(source).forEach((key) => {
    target[key] += source[key] * factor;
  });
}
