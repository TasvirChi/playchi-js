import VideoTrack from '../../track/video-track';
import AudioTrack from '../../track/audio-track';
import TextTrack from '../../track/text-track';
import { FakeEvent } from '../../event/fake-event';
import {PKMediaSourceObject} from '../media-source';

export interface IEngineDecorator {
  active: boolean;
  dispatchEvent(event: FakeEvent): boolean;
  restore?: (source: PKMediaSourceObject, config: any) => void;
  reset?: () => void;
  destroy?: () => void;
  attach?: () => void;
  detach?: () => void;
  getVideoElement?: () => HTMLVideoElement;
  selectVideoTrack?: (videoTrack: VideoTrack) => void;
  selectAudioTrack?: (audioTrack: AudioTrack) => void;
  selectTextTrack?: (textTrack: TextTrack) => void;
  hideTextTrack?: () => void;
  enableAdaptiveBitrate?: () => void;
  isAdaptiveBitrateEnabled?: () => boolean;
  seekToLiveEdge?: () => void;
  getStartTimeOfDvrWindow?: () => number;
  isLive?: () => boolean;
  play?: () => void;
  pause?: () => void;
  load?: (startTime?: number) => Promise<any>;
  enterPictureInPicture?: () => void;
  exitPictureInPicture?: () => void;
  isPictureInPictureSupported?: () => boolean;
  resetAllCues?: () => void;
  attachMediaSource?: () => void;
  detachMediaSource?: () => void;
  id?: string;
  src?: string;
  currentTime?: number;
  duration?: number;
  volume?: number;
  paused?: boolean;
  seeking?: boolean;
  seekable?: TimeRanges;
  played?: TimeRanges;
  buffered?: TimeRanges;
  muted?: boolean;
  defaultMuted?: boolean;
  poster?: string;
  preload?: string;
  autoplay?: boolean;
  loop?: boolean;
  controls?: boolean;
  playbackRates?: Array<number>;
  playbackRate?: number;
  defaultPlaybackRate?: number;
  ended?: boolean;
  error?: MediaError;
  networkState?: number;
  readyState?: number;
  videoHeight?: number;
  videoWidth?: number;
  playsinline?: boolean;
  crossOrigin?: string;
  isInPictureInPicture?: boolean;
  targetBuffer?: number;
  availableBuffer?: number;
}
