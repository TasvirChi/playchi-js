export type PlayerStreamTypes = 'dash' | 'hls' | 'progressive' | 'image' | 'document';
export type PCStreamTypes = Record<'DASH' | 'HLS' | 'PROGRESSIVE' | 'IMAGE' | 'DOCUMENT', PlayerStreamTypes>;
