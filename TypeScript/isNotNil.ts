export const isNotUndefined = <T>(x: T): x is Exclude<T, undefined> =>
  x !== undefined;

export const isNotNull = <T>(x: T): x is Exclude<T, null> => x !== null;

export const isNotNil = <T>(x: T): x is Exclude<T, undefined | null> =>
  x !== undefined && x !== null;
