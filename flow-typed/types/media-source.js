// @flow
declare type PCMediaSourceObject = {
  mimetype: string,
  url: string,
  id?: string,
  bandwidth?: number,
  width?: number,
  height?: number,
  drmData?: Array<PCDrmDataObject>
};
