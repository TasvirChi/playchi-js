declare type PCThumbnailVttCue = {
  startTime: number,
  endTime: number,
  imgUrl: string,
  coordinates: {x: number, y: number} | null,
  size: {height: number, width: number} | null
};
