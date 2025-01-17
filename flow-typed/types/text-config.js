// @flow
import {TextStyle} from '../../src/track/text-style';

declare type PCTextConfigObject = {
  enableCEA708Captions: boolean,
  useShakaTextTrackDisplay: boolean,
  useNativeTextTrack: boolean,
  textTrackDisplaySetting: PCTextTrackDisplaySettingObject,
  textStyle: PCTextStyleObject,
  forceCenter: boolean,
  captionsTextTrack1Label: string,
  captionsTextTrack1LanguageCode: string,
  captionsTextTrack2Label: string,
  captionsTextTrack2LanguageCode: string
};
