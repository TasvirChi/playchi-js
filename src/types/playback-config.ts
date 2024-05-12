import {PCAutoPlayTypes} from './auto-play-types';
import {PCStreamPriorityObject} from './stream-priority';
import {PCPreferNativeConfigObject} from './prefer-native-config';

export type PCPlaybackConfigObject = {
  audioLanguage: string,
  textLanguage: string,
  captionsDisplay: boolean,
  additionalAudioLanguage: string | [string],
  additionalTextLanguage: string | [string],
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
  screenLockOrientionMode: string
};
