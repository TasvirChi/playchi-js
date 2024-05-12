import {PCLogConfigObject} from './log-level';
import {PCPlaybackConfigObject} from './playback-config';
import {PCStreamingConfigObject} from './streaming-config';
import {PCSessionConfigObject} from './session-config';
import {PCNetworkConfigObject} from './network-config';
import {PCCustomLabelsConfigObject} from './custom-labels-config';

export type PCPlayerOptionsObject = {
  log?: PCLogConfigObject,
  playback?: PCPlaybackConfigObject,
  streaming?: PCStreamingConfigObject,
  session?: PCSessionConfigObject,
  network?: PCNetworkConfigObject,
  customLabels?: PCCustomLabelsConfigObject
};
