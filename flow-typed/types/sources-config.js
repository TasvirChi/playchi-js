// @flow
declare type PCSourcesConfigObject = {
  hls: Array<PCMediaSourceObject>,
  dash: Array<PCMediaSourceObject>,
  progressive: Array<PCMediaSourceObject>,
  image: Array<PCMediaSourceObject>,
  document: Array<PCMediaSourceObject>,
  captions?: Array<PCExternalCaptionObject>,
  thumbnails?: PCExternalThumbnailsConfig,
  options: PCMediaSourceOptionsObject,
  type: string,
  dvr: boolean,
  metadata: PCMetadataConfigObject,
  id?: string,
  poster?: string,
  duration?: number,
  startTime?: number,
  vr: ?Object,
  imageSourceOptions?: ImageSourceOptions,
  seekFrom?: number,
  clipTo?: number
};
