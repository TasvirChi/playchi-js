import {PCMediaSourceObject} from './media-source';
import {PCExternalCaptionObject} from './external-caption-object';
import {PCExternalThumbnailsConfig} from './exteranl-thumbnails-object';
import {PCMediaSourceOptionsObject} from './media-source-options';
import {PCMetadataConfigObject} from './metadata-config';
import {ImageSourceOptions} from './image-player-options';
import {PCMediaTypes} from "./media-types";

export type PCSourcesConfigObject = {
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
  vr?: any,
  imageSourceOptions?: ImageSourceOptions,
  seekFrom?: number,
  clipTo?: number,
  mediaEntryType?: PCMediaTypes
};
