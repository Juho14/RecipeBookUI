export function addNestedMacros(target: Record<string, number>, source: Record<string, number>, factor: number) {
  Object.keys(source).forEach((key) => {
    target[key] += source[key] * factor;
  });
}

export function splitNestedMacros(target: Record<string, number>, servings: number) {
  Object.keys(target).forEach((key) => {
    target[key] = target[key] / servings;
  });
}
