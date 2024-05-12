
import VideoTrack from '../../track/video-track';
import AudioTrack from '../../track/audio-track';
import { FakeEventTarget } from '../../event/fake-event-target';
import {ThumbnailInfo} from '../../thumbnail/thumbnail-info';
import ImageTrack from '../../track/image-track';
import {PCMediaSourceObject} from '../media-source';
import {PCDrmConfigObject} from '../drm-config';
import {PCDrmDataObject} from '../drm-data';
import {PCABRRestrictionObject} from '../restrictions-types';
import Track from '../../track/track';
import {PCTextTrack} from '../../track/text-track';
import {IMediaSourceAdapter} from '../../types';

export interface IEngineStatic {
  id: string;
  createEngine(source: PCMediaSourceObject, config: Object, playerId: string): IEngine;
  canPlaySource(source: PCMediaSourceObject, preferNative: boolean, drmConfig: PCDrmConfigObject): boolean;
  runCapabilities(): void;
  getCapabilities(): Promise<any>;
  setCapabilities(capabilities: {[name: string]: any}): void;
  prepareVideoElement(playerId: string): void;
  isSupported(): boolean;
}

export interface IEngine extends FakeEventTarget {
  restore(source: PCMediaSourceObject, config: Object): void;
  destroy(): void;
  attach(): void;
  detach(): void;
  play(): Promise<any> | undefined;
  pause(): void;
  load(startTime?: number): Promise<{tracks: Track[]}>;
  reset(): void;
  selectVideoTrack(videoTrack: VideoTrack): void;
  selectAudioTrack(audioTrack: AudioTrack): void;
  selectTextTrack(textTrack: PCTextTrack): void;
  selectImageTrack(imageTrack: ImageTrack): void;
  isPictureInPictureSupported(): boolean;
  enterPictureInPicture(): void;
  exitPictureInPicture(): void;
  hideTextTrack(): void;
  enableAdaptiveBitrate(): void;
  isAdaptiveBitrateEnabled(): boolean;
  applyABRRestriction(restrictions: PCABRRestrictionObject): void;
  seekToLiveEdge(): void;
  getStartTimeOfDvrWindow(): number;
  isLive(): boolean;
  getVideoElement(): HTMLVideoElement;
  resetAllCues(): void;
  attachMediaSource(): void;
  detachMediaSource(): void;
  getThumbnail(time: number): ThumbnailInfo | null
  isOnLiveEdge(): boolean;
  addTextTrack(kind: TextTrackKind, label?: string, language?: string): TextTrack | undefined ;
  getNativeTextTracks(): TextTrack[];
  getDrmInfo(): PCDrmDataObject | null;
  id: string;
  currentTime: number;
  duration: number;
  liveDuration: number;
  volume: number;
  paused: boolean;
  seeking: boolean;
  played: TimeRanges;
  buffered: TimeRanges;
  videoHeight: number;
  videoWidth: number;
  muted: boolean;
  defaultMuted: boolean;
  src: string;
  poster: string;
  preload:  "none" | "metadata" | "auto" | "";
  autoplay: boolean;
  controls: boolean;
  loop: boolean;
  error: MediaError | null;
  seekable: TimeRanges;
  ended: boolean;
  playbackRate: number;
  playbackRates: Array<number>;
  defaultPlaybackRate: number;
  isInPictureInPicture: boolean;
  networkState: number;
  readyState: number;
  playsinline: boolean;
  crossOrigin: string | null
  targetBuffer: number;
  availableBuffer: number;
  mediaSourceAdapter: IMediaSourceAdapter | null;
}
