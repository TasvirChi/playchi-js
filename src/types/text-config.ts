import {PKTextStyleObject} from './text-style';
import {PKTextTrackDisplaySettingObject} from './text-track-display-setting';

export interface PKTextConfigObject {
  enableCEA708Captions: boolean;
  useShakaTextTrackDisplay: boolean;
  useNativeTextTrack: boolean;
  textTrackDisplaySetting: PKTextTrackDisplaySettingObject;
  textStyle: PKTextStyleObject;
  captionsTextTrack1Label: string;
  captionsTextTrack1LanguageCode: string;
  captionsTextTrack2Label: string;
  captionsTextTrack2LanguageCode: string;
}
