export const sleep = (milliseconds = 0) => new Promise((resolve) => setTimeout(resolve, milliseconds));

export const isMailValid = (string: string) => /\S+@\S+\.\S+/.test(string);

// mapValues and mapKeys in one. Creates an object with the keys and values generated by running each own enumerable
// string keyed properties of object through iteratee. Iteratee should take value and key and return [newValue, newKey]
export const mapValuesAndKeys = (object: object, iteratee: (value: any, key: string) => [any, string]) => {
  const result: Record<string, any> = {};
  Object.entries(object).forEach(([key, value]) => {
    const [newValue, newKey] = iteratee(value, key) || [];
    result[newKey] = newValue;
  });
  return result;
};

// Does no operation to given template literal. Can be used to trigger syntax highlighting.
export const noopTag = (strings: TemplateStringsArray, ...keys: any[]) => {
  let result = '';
  keys.forEach((key, index) => {
    result += strings[index] + String(key);
  });
  return result + strings[strings.length - 1];
};