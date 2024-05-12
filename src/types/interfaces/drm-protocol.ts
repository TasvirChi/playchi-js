import {PCDrmConfigObject} from '../drm-config';
import {PCDrmDataObject} from '../drm-data';

export interface IDrmProtocol {
  isConfigured(drmData: Array<PCDrmDataObject>, drmConfig: PCDrmConfigObject): boolean;
  canPlayDrm(drmData: Array<PCDrmDataObject>): boolean;
  setDrmPlayback(...any): void;
}
