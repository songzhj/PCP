export const assertNever = (_: never, message?: string): never => {
  throw new Error(message);
};
