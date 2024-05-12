// @flow
declare type PCPlaybackConfigObject = {
  audioLanguage: string,
  textLanguage: string,
  captionsDisplay: boolean,
  additionalAudioLanguage: string,
  additionalTextLanguage: string,
  volume: number,
  playsinline: boolean,
  crossOrigin: string,
  preload: string,
  autoplay: PCAutoPlayTypes,
  allowMutedAutoPlay: boolean,
  muted: boolean,
  pictureInPicture: boolean,
  streamPriority: Array<PCStreamPriorityObject>,
  preferNative: PCPreferNativeConfigObject,
  inBrowserFullscreen: boolean,
  playAdsWithMSE: boolean,
  screenLockOrientionMode: string,
  playbackRate: number
};
