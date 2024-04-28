import { HttpHeaders } from '@angular/common/http';
import { fix } from './objects.helper';

export function headersToRecord(headers: HttpHeaders): any {
  const record: any = {};
  headers.keys().forEach((key) => (record[key] = headers.get(key)));
  return record;
}

export function mergeHeaders(
  headers: HttpHeaders,
  source?: HttpHeaders | Record<string, string | string[]>
): HttpHeaders {
  const isHeaders = source instanceof HttpHeaders;
  let result: HttpHeaders = new HttpHeaders();
  let others = isHeaders ? source : new HttpHeaders();

  if (!isHeaders) {
    const entries = Object.entries(fix(source));
    others = entries.reduce((p, [k, v]) => p.set(k, v), others);
  }
  const keys = headers.keys().filter((name) => !others.keys().includes(name));
  result = keys.reduce((p, k) => p.set(k, (headers as any).get(k)), result);
  const okeys = others.keys();
  result = okeys.reduce((p, k) => p.set(k, (others as any).get(k)), result);
  if (result.has('Content-Type') && result.get('Content-Type') === 'undefined')
    result = result.delete('Content-Type');

  return result;
}
