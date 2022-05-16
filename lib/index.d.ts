export declare const sleep: (milliseconds?: number) => Promise<unknown>;
export declare const isMailValid: (string: string) => boolean;
export declare const mapValuesAndKeys: (object: object, iteratee: (value: any, key: string) => [any, string]) => Record<string, any>;
export declare const noopTag: (strings: TemplateStringsArray, ...keys: any[]) => string;
