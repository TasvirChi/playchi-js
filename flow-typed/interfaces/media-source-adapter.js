//@flow
import VideoTrack from '../../src/track/video-track';
import AudioTrack from '../../src/track/audio-track';
import TextTrack from '../../src/track/text-track';
import {FakeEventTarget, ImageTrack} from '../../src/playchi';

declare interface IMediaSourceAdapterStatic {
  +id: string;
  isSupported(): boolean;
  isMSESupported(): boolean;
  canPlayType(mimeType: string): boolean;
  canPlayDrm(drmData: Array<Object>, drmConfig: PCDrmConfigObject): boolean;
  createAdapter(videoElement: HTMLVideoElement, source: PCMediaSourceObject, config: Object): IMediaSourceAdapter;
}

declare interface IMediaSourceAdapter extends FakeEventTarget {
  src: string;
  +liveDuration: number;
  +capabilities: PCMediaSourceCapabilities;
  +targetBuffer: number;
  load(startTime: ?number): Promise<Object>;
  handleMediaError(error: ?MediaError): boolean;
  destroy(): Promise<*>;
  selectVideoTrack(videoTrack: VideoTrack): void;
  selectAudioTrack(audioTrack: AudioTrack): void;
  selectTextTrack(textTrack: TextTrack): void;
  selectImageTrack(imageTrack: ImageTrack): void;
  hideTextTrack(): void;
  enableAdaptiveBitrate(): void;
  isAdaptiveBitrateEnabled(): boolean;
  seekToLiveEdge(): void;
  isLive(): boolean;
  isOnLiveEdge(): boolean;
  getStartTimeOfDvrWindow(): number;
  setMaxBitrate(bitrate: number): void;
  attachMediaSource(): void;
  detachMediaSource(): void;
  getSegmentDuration(): number;
  disableNativeTextTracks(): void;
  getDrmInfo(): ?PCDrmDataObject;
}
