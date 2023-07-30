export function uuidv4() {
  let a = window.crypto.getRandomValues(new Uint8Array(16));
  a[6] = (a[6] & 0x0f) | 0x40;
  a[8] = (a[8] & 0x3f) | 0x80;
  return [...a].map((b) => b.toString(16).padStart(2, "0")).join("");
}
