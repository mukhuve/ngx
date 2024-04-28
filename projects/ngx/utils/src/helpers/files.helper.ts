export async function toBase64(file: File): Promise<string> {
  return await new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => resolve(String(reader.result));
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(file);
  });
}

export async function resizeBase64Img(
  base64: string,
  width: number,
  height: number
): Promise<string> {
  if (!base64.match(/^data:image\/.*;base64/))
    throw new Error('base64 is not image');

  const img: HTMLImageElement = document.createElement('img');
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = width;
  canvas.height = height;
  return await new Promise<string>((resolve, reject) => {
    img.onerror = (e) => reject(e);
    img.onload = (e) => {
      ctx?.scale(width / img.width, height / img.height);
      ctx?.drawImage(img, 0, 0);
      resolve(canvas.toDataURL());
    };
    img.crossOrigin = 'anonymous';
    img.setAttribute('src', base64);
  });
}

export function base64ToFile(
  base64: string,
  filename: string,
  sliceSize: number = 512
): File {
  const block = base64.split(';');
  const contentType = block[0].split(':')[1]; // In this case 'image/gif'
  const data = block[1].split(',')[1]; // In this case 'iVBORw0KGg....'

  const byteCharacters = atob(data);
  const byteArrays = [];
  for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    const slice = byteCharacters.slice(offset, offset + sliceSize);
    const byteNumbers = new Array(slice.length);
    for (let i = 0; i < slice.length; i++) byteNumbers[i] = slice.charCodeAt(i);

    const byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }
  const blob = new Blob(byteArrays, { type: contentType });
  const file = new File([blob], filename, {
    type: contentType,
    lastModified: Date.now(),
  });
  return file;
}

type FileSize = { width: number; height: number };
export async function imageSize(image: File): Promise<FileSize> {
  if (fileIsImage(image)) {
    const img = document.createElement('img');
    const _URL = window.URL || (window as any).webkitURL;
    return await new Promise<FileSize>((resolve, reject) => {
      img.onerror = (e) => reject(e);
      img.onload = () => resolve({ width: +img.width, height: +img.height });
      img.src = _URL.createObjectURL(image);
    });
  }
  throw new Error('File is not image');
}

export async function optimizeImage(
  image: File,
  maxWH: number = 800
): Promise<File> {
  console.group(`Optimizing "${image.name}":`);
  let result = image;
  try {
    const [base64, { height, width }] = await Promise.all([
      toBase64(image),
      imageSize(image),
    ]);
    const ss = width > height ? width : height;
    if (ss > maxWH) {
      const scale = maxWH / ss;
      const resizedb64 = await resizeBase64Img(
        base64,
        scale * width,
        scale * height
      );
      result = base64ToFile(resizedb64, image.name);
    }
  } catch (e) {
    console.error('[OPTIMIZE ERROR] ', e);
  }
  console.groupEnd();
  return result;
}

export function fileIsImage(file: File) {
  return !!file.type.match(/image\/.*/);
}

export function pathFileType(path: string) {
  const ext = path?.replace(/.*\./, '') || '';
  return ext.match(/^(png|jpe?g|svg|webp)$/i)
    ? 'image'
    : ext.match(
        /^(avi|mpg|rm|mov|wav|asf|3gp|mkv|rmvb|mp4|ogg|mp3|oga|aac|mpeg|webm)$/i
      )
    ? 'video'
    : 'file';
}

export function downLoadFile(
  data: any | Blob,
  filename: string,
  type?: string
): boolean {
  try {
    const blob: Blob = type ? new Blob([data], { type: type }) : data;
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.click();
    return true;
  } catch (e) {
    console.error(e);
    return false;
  }
}
