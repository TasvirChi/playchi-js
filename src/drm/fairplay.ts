import {FairPlayDrmConfigType} from '../engines/html5/media-source/adapters/fairplay-drm-handler';
import {DrmScheme} from './drm-scheme';
import {PCDrmConfigObject, PCDrmDataObject} from '../types';
import {ILogger} from 'js-logger';
import getLogger from '../utils/logger';

const _logger: ILogger = getLogger('FairPlay');

class FairPlay {
  /**
   * FairPlay is the configure key system.
   * @param {Array<PCDrmDataObject>} drmData - The drm data.
   * @param {PCDrmConfigObject} drmConfig - The drm config.
   * @return {boolean} - Whether FairPlay is the configure key system.
   */
  public static isConfigured(drmData: Array<PCDrmDataObject>, drmConfig: PCDrmConfigObject): boolean {
    return DrmScheme.FAIRPLAY === drmConfig.keySystem && !!drmData.find(drmEntry => drmEntry.scheme === drmConfig.keySystem);
  }

  /**
   * FairPlay playback supports in case 2 conditions are met:
   * 1. The environment supports FairPlay playback.
   * 2. The drm data of the source object contains entry with FairPlay scheme.
   * @param {Array<PCDrmDataObject>} drmData - The drm data to check.
   * @return {boolean} - Whether FairPlay can be play on the current environment.
   */
  public static canPlayDrm(drmData: Array<PCDrmDataObject>): boolean {
    // eslint-disable-next-line  @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const result = drmData.some(drmEntry => drmEntry.scheme === DrmScheme.FAIRPLAY) && !!window.WebKitMediaKeys;
    _logger.debug(`Can play DRM scheme of: ${DrmScheme.FAIRPLAY} is ${result.toString()}`);
    return result;
  }

  /**
   * Sets the FairPlay playback.
   * @param {FairPlayDrmConfigType} config - The config to manipulate.
   * @param {Array<PCDrmDataObject>} drmData - The drm data.
   * @returns {void}
   */
  public static setDrmPlayback(config: FairPlayDrmConfigType, drmData: Array<PCDrmDataObject>): void {
    _logger.debug('Sets drm playback');
    const drmEntry = drmData.find(drmEntry => drmEntry.scheme === DrmScheme.FAIRPLAY);
    if (drmEntry) {
      config.licenseUrl = drmEntry.licenseUrl;
      config.certificate = drmEntry.certificate;
    }
  }
}

export default FairPlay;
