//@flow
import Player from './player'
import LoggerFactory from './utils/logger'
import * as packageData from '../package.json'
import BaseMediaSourceAdapter from './engines/html5/media-source/base-media-source-adapter'
import {registerMediaSourceAdapter} from './engines/html5/media-source/media-source-provider'
import {registerPlugin} from './plugin/plugin-manager'
import BasePlugin from './plugin/base-plugin'
import Track from './track/track'
import VideoTrack from './track/video-track'
import AudioTrack from './track/audio-track'
import TextTrack from './track/text-track'
import * as Utils from './utils/util'

// Playkit version
let VERSION = packageData.version;

LoggerFactory.getLogger().log("%c Playkit " + VERSION, "color: yellow; font-size: large");
LoggerFactory.getLogger().log("%c For more details see https://github.com/kaltura/playkit-js", "color: yellow;");

/**
 * @param {string} targetId - The target div id to append the player.
 * @param {Object} config - The configuration of the player
 * @returns {Player} - The player instance
 */
export function loadPlayer(targetId: string, config: ?Object) {
  return new Player(targetId, config || {});
}

// Export the media source adapters necessary utils
export {registerMediaSourceAdapter, BaseMediaSourceAdapter};

// Export the plugin framework
export {registerPlugin, BasePlugin};

// Export the tracks classes
export {Track, VideoTrack, AudioTrack, TextTrack};

// Export utils library
export {Utils};

//export version
export {VERSION};
export default loadPlayer;
