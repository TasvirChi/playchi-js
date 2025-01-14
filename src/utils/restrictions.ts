import VideoTrack from '../track/video-track';
import {PCABRRestrictionObject} from '../types';

/**
 * Filter the video tracks which not in the range
 * @function filterVideoTracksByRestriction
 * @param {Array<PCVideoTrack>} tracks - The tracks to filter
 * @param {PCABRRestrictionObject} restriction - The restriction
 * @returns {Array<PCVideoTrack>} - The relevant video tracks after restrictions.
 */
function _filterVideoTracksByRestriction(tracks: Array<VideoTrack>, restriction: PCABRRestrictionObject): Array<VideoTrack> {
  const MIN_DEFAULT_VALUE = 0;
  const MAX_DEFAULT_VALUE = Infinity;
  const inRange = (x, min, max): boolean => {
    return x >= (min || MIN_DEFAULT_VALUE) && x <= (max || MAX_DEFAULT_VALUE);
  };
  const {maxHeight, minHeight, maxWidth, minWidth} = restriction;
  if (minHeight !== MIN_DEFAULT_VALUE || minWidth !== MIN_DEFAULT_VALUE || maxHeight !== MAX_DEFAULT_VALUE || maxWidth !== MAX_DEFAULT_VALUE) {
    return tracks.filter(track => inRange(track.height, minHeight, maxHeight)).filter(track => inRange(track.width, minWidth, maxWidth));
  }
  const {maxBitrate, minBitrate} = restriction;
  if (minBitrate !== MIN_DEFAULT_VALUE || maxBitrate !== MAX_DEFAULT_VALUE) {
    return tracks.filter(track => inRange(track.bandwidth, minBitrate, maxBitrate));
  }
  return tracks;
}

/**
 * Filter the video tracks which not in the range
 * @function filterVideoTracksByRestriction
 * @param {Array<PCVideoTrack>} videoTracks - The tracks to filter
 * @param {PCABRRestrictionObject} restriction - The restriction
 * @returns {Array<PCVideoTrack>} - The relevant video tracks after restrictions.
 */
function filterTracksByRestriction(videoTracks: VideoTrack[], restriction: PCABRRestrictionObject): VideoTrack[] {
  const filterVideoTracks = _filterVideoTracksByRestriction(videoTracks, restriction);
  return filterVideoTracks.length ? filterVideoTracks : [];
}

export {filterTracksByRestriction};
