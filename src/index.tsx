const Quickjs = require('./NativeQuickjs').default;

export function multiply(a: number, b: number): number {
  return Quickjs.multiply(a, b);
}
