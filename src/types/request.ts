export type PCRequestObject = {
  url: string,
  body: ArrayBuffer | ArrayBufferView | string | null;
  headers: {[header: string]: string}
};
