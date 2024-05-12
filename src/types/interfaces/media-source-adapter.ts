import VideoTrack from '../../track/video-track';
import AudioTrack from '../../track/audio-track';
import { PCTextTrack } from '../../track/text-track';
import { PCDrmConfigObject } from '../drm-config';
import { PCMediaSourceCapabilities } from '../media-source-capabilities';
import { PCMediaSourceObject } from '../media-source';
import ImageTrack from '../../track/image-track';
import { PCDrmDataObject } from '../drm-data';
import { FakeEventTarget } from '../../event/fake-event-target';
import { ThumbnailInfo } from '../../thumbnail/thumbnail-info';
import Track from '../../track/track';
import TextStyle from '../../track/text-style';
import { PCABRRestrictionObject } from '../restrictions-types';

export interface IMediaSourceAdapterStatic {
  id: string;
  isSupported(): boolean;
  isMSESupported(): boolean;
  canPlayType(mimeType: string): boolean;
  canPlayDrm(drmData: Array<Object>, drmConfig: PCDrmConfigObject): boolean;
  createAdapter(videoElement: HTMLVideoElement, source: PCMediaSourceObject, config: Object): IMediaSourceAdapter;
}

export interface IMediaSourceAdapter extends FakeEventTarget {
  src: string;
  liveDuration: number;
  capabilities: PCMediaSourceCapabilities;
  targetBuffer: number;
  load(startTime?: number): Promise<{ tracks: Track[] }>;
  handleMediaError(error?: MediaError): boolean;
  destroy(): Promise<any>;
  selectVideoTrack(videoTrack: VideoTrack): void;
  selectAudioTrack(audioTrack: AudioTrack): void;
  selectTextTrack(textTrack: PCTextTrack): void;
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
  getThumbnail(time: number): ThumbnailInfo | null;
  getDrmInfo(): PCDrmDataObject | null;
  applyABRRestriction(restriction: PCABRRestrictionObject): void;
  applyTextTrackStyles(sheet: CSSStyleSheet, styles: TextStyle, containerId: string, engineClassName?: string): void;
}
