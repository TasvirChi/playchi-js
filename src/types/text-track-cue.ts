export interface PCTextTrackCue extends TextTrackCue {
  value: { key: string, data: string | any };
  type?: string;
}
