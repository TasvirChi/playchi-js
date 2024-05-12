//@flow
declare interface IDrmProtocol {
  isConfigured(drmData: Array<Object>, drmConfig: PCDrmConfigObject): boolean;
  canPlayDrm(drmData: Array<Object>): boolean;
  setDrmPlayback(...any): void;
}
