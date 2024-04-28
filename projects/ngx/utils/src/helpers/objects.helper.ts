export function clone(obj: any) {
  if (obj == null || typeof obj !== 'object') return obj;
  const copy = obj.constructor();
  for (const attr in obj) {
    if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
  }
  return copy;
}

export function fix(obj: object = {}, allowNulls = false): Record<string, any> {
  const isNull = (v: any) => v === null || v === undefined;
  const fn = (k: any, v: any) => (allowNulls || !isNull(v) ? v : undefined);
  return JSON.parse(JSON.stringify(obj, fn));
}

export function secureStr(value: any): string | undefined {
  if (!(value ?? false)) return undefined;
  const cache = new WeakSet();
  const replacer = (_: any, value: any) => {
    if (typeof value === 'object' && value !== null) {
      if (cache.has(value)) return;
      cache.add(value);
    }
    return value;
  };

  return JSON.stringify(value, replacer);
}
