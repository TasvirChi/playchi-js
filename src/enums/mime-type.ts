import {PCMimeTypes} from '../types';

const MimeType: PCMimeTypes = {
  HLS: ['application/x-mpegurl', 'application/vnd.apple.mpegurl'],
  DASH: ['application/dash+xml'],
  PROGRESSIVE: ['video/mp4'],
  SMOOTH_STREAMING: ['application/vnd.ms-sstr+xml']
};

export {MimeType};
