## Configuration

Configuration parameters could be provided upon instantiation of the player instance.

```js
var config = {
  // Configuration here
};
var player = playchi.core.loadPlayer(config);
```

#### Configuration Structure

```js
{
  log: PCLogConfigObject,
  text: PCTextConfigObject,
  playback: PCPlaybackConfigObject,
  streaming: PCStreamingConfigObject,
  session: PCSessionConfigObject,
  network: PCNetworkConfigObject,
  customLabels: PCCustomLabelsConfigObject,
  abr: PCAbrConfigObject,
  drm: PCDrmConfigObject,
  dimensions: PCDimensionsConfig
}
```

#### Default Configuration Values

```js
var config = {
  log: {
    level: 'ERROR'
  },
  text: {
    enableCEA708Captions: true,
    useNativeTextTrack: false,
    forceCenter: false,
    captionsTextTrack1Label: 'English',
    captionsTextTrack1LanguageCode: 'en',
    captionsTextTrack2Label: 'Spanish',
    captionsTextTrack2LanguageCode: 'es'
  },
  playback: {
    audioLanguage: '',
    textLanguage: '',
    captionsDisplay: false,
    additionalAudioLanguage: '',
    additionalTextLanguage: '',
    volume: 1,
    playsinline: true,
    preload: 'none',
    autoplay: false,
    loop: false,
    allowMutedAutoPlay: true,
    muted: false,
    pictureInPicture: true,
    options: {
      html5: {
        hls: {},
        dash: {},
        native: {}
      }
    },
    preferNative: {
      hls: false,
      dash: false
    },
    streamPriority: [
      {
        engine: 'html5',
        format: 'hls'
      },
      {
        engine: 'html5',
        format: 'dash'
      },
      {
        engine: 'html5',
        format: 'progressive'
      }
    ]
  },
  abr: {
    enabled: true,
    fpsDroppedFramesInterval: 5000,
    fpsDroppedMonitoringThreshold: 0.2,
    capLevelOnFPSDrop: false,
    capLevelToPlayerSize: false,
    restrictions: {
      minHeight: 0,
      maxHeight: Infinity,
      minWidth: 0,
      maxWidth: Infinity,
      minBitrate: 0,
      maxBitrate: Infinity
    }
  },
  drm: {
    keySystem: ''
  }
};
```

##

> ### config.log
>
> ##### Type: `PCLogConfigObject`
>
> ```js
> {
>   level: string,
>   playerVersion: boolean,
>   handler: ?LogHandlerType
> }
> ```
>
> > ### config.log.level
> >
> > ##### Default: `"ERROR"`
> >
> > ##### Description: Defines the player log level.
> >
> > Possible values: `"DEBUG", "INFO", "TIME", "WARN", "ERROR", "OFF"`
> >
> > ### config.log.playerVersion
> >
> > ##### Default: `true`
> >
> > ##### Description: Whether to show or hide player verion in logs.
> >
> > Possible values: `true/false`
> >
> > ### config.log.handler
> >
> > ##### Type `LogHandlerType`
> >
> > ##### Description: Defines the player log handler.
> >
> > ```js
> > function(messages: any[], context: Object)
> > ```
> >
> > (messages: any[], context: Object)

##

> ### sources
>
> ##### Type: `PCSourcesConfigObject`
>
> ```js
> {
>  dash: Array<PCMediaSourceObject>,
>  hls: Array<PCMediaSourceObject>,
>  progressive: Array<PCMediaSourceObject>,
>  options: PCMediaSourceOptionsObject,
>  type: string,
>  dvr: boolean,
>  vr?: Object,
>  metadata: PCMetadataConfigObject,
>  id?: string,
>  poster?: string,
>  duration?: number,
>  captions?: Array<PCExternalCaptionObject>,
>  thumbnails?: PCExternalThumbnailsConfig,
>  startTime?: number
>  seekFrom?: number
>  clipTo?: number
> }
> ```
>
> > ##### Type `PCMediaSourceObject`
> >
> > ```js
> > {
> >  mimetype: string,
> >  url: string,
> >  id: string, // optional
> >  bandwidth: number, // optional
> >  width: number, // optional
> >  height: number, // optional
> >  drmData: Array<PCDrmDataObject> // optional
> > }
> > ```
> >
> > ##### Type `PCDrmDataObject`
> >
> > ```js
> > {
> >  licenseUrl: string,
> >  scheme: string,
> >  certificate: string // optional
> > }
> > ```
> >
> > ##### Type `PCMediaSourceOptionsObject`
> >
> > ```js
> > {
> >  forceRedirectExternalStreams: boolean,
> >  redirectExternalStreamsHandler: ?Function,
> >  redirectExternalStreamsTimeout: ?number
> > }
> > ```
> >
> > ##### Type `PCMetadataConfigObject`
> >
> > ```js
> > {
> >  name?: string,
> >  description?: string
> > }
> > ```
> >
> > ##### Type `PCExternalCaptionObject`
> >
> > ```js
> > {
> >  url: string,
> >  label: string,
> >  language: string,
> >  default?: string,
> >  type?: string
> > }
> > ```
>
> ##### Default:
>
> ```js
> {
>  options: {
>    forceRedirectExternalStreams: false
>  }.
>  metadata: {}
> }
> ```
>
> ##### Description: Defines related sources configurations.
>
> ##
>
> > ### sources.hls
> >
> > ##### Type: `Array<PCMediaSourceObject>`
> >
> > ##### Default: `[]`
> >
> > ##### Description: Defines the optional hls sources for playback.
> >
> > #### Example:
> >
> > ```js
> > var sources: {
> >   hls: [
> >     {
> >       mimetype: 'application/x-mpegurl',
> >       url: '//PATH/TO/MANIFEST.m3u8'
> >     }
> >   ]
> > };
> > ```
> >
> > ##
> >
> > ### sources.dash
> >
> > ##### Type: `Array<PCMediaSourceObject>`
> >
> > ##### Default: `[]`
> >
> > ##### Description: Defines the optional dash sources for playback.
> >
> > #### Example:
> >
> > ```js
> > var sources: {
> >   dash: [
> >     {
> >       mimetype: 'application/x-mpegurl',
> >       url: '//PATH/TO/MANIFEST.mpd'
> >     }
> >   ]
> > };
> > ```
> >
> > ##
> >
> > ### sources.progressive
> >
> > ##### Type: `Array<PCMediaSourceObject>`
> >
> > ##### Default: `[]`
> >
> > ##### Description: Defines the optional progressive sources for playback.
> >
> > #### Example:
> >
> > ```js
> > var sources: {
> >   progressive: [
> >     {
> >       mimetype: 'video/mp4',
> >       url: '//PATH/TO/FILE.mp4'
> >     }
> >   ]
> > };
> > ```
> >
> > ##
> >
> > ### sources.options
> >
> > ##### Type: `PCMediaSourceOptionsObject`
> >
> > ##### Default:
> >
> > ```js
> > {
> >   forceRedirectExternalStreams: false;
> > }
> > ```
> >
> > ##### Description: Defines the sources options.
> >
> > ##
> >
> > > ### sources.options.forceRedirectExternalStreams
> > >
> > > ##### Type: `boolean`
> > >
> > > ##### Default: `false`
> > >
> > > ##### Description: Enable workaround for some user-agents that don't allow redirects after a successful CORS-preflight request.
> > >
> > > ##
> > >
> > > ### sources.options.redirectExternalStreamsHandler
> > >
> > > ##### Type: `Function`
> > >
> > > ##### Default: `-`
> > >
> > > ##### Description: The handler function which redirects the stream.
> > >
> > > ##
> > >
> > > ### sources.options.redirectExternalStreamsTimeout
> > >
> > > ##### Type: `number`
> > >
> > > ##### Default: `-`
> > >
> > > ##### Description: The timeout for the redirect operation.
> >
> > ##
> >
> > ### sources.type
> >
> > ##### Type: `string`
> >
> > ##### Default: `-`
> >
> > ##### Description: Defines the type of media being used.
> >
> > Possible values: `"Vod", "Live", "Image", "Audio", "Unknown"`.
> >
> > ##
> >
> > ### sources.dvr
> >
> > ##### Type: `boolean`
> >
> > ##### Default: `-`
> >
> > ##### Description: Defines the dvr value.
> >
> > Relevant only if the media type=`"Live"`.
> >
> > ##
> >
> > ### sources.metadata
> >
> > ##### Type: `PCMetadataConfigObject`
> >
> > ##### Default: `{}`
> >
> > ##### Description: Defines the metadata of the media.
> >
> > ##
> >
> > > ### sources.metadata.name
> > >
> > > ##### Type: `string`
> > >
> > > ##### Default: `-`
> > >
> > > ##### Description: The name of the media.
> > >
> > > ##
> > >
> > > ### sources.metadata.description
> > >
> > > ##### Type: `string`
> > >
> > > ##### Default: `-`
> > >
> > > ##### Description: The description of the media.
> >
> > ##
> >
> > ### sources.id
> >
> > ##### Type: `string`
> >
> > ##### Default: `-`
> >
> > ##### Description: The id of the media.
> >
> > ##
> >
> > ### sources.poster
> >
> > ##### Type: `string`
> >
> > ##### Default: `-`
> >
> > ##### Description: The poster url of the media.
> >
> > ##
> >
> > ### sources.duration
> >
> > ##### Type: `number`
> >
> > ##### Default: `-`
> >
> > ##### Description: The duration of the media.
> >
> > ##
> >
> > ### sources.captions
> >
> > ##### Type: `Array<PCExternalCaptionObject>`
> >
> > ##### Default: `-`
> >
> > ##### Description: An array of captions to be added to the media.
> >
> > The following fields are mandatory: `url`, `language` and `label`.
> >
> > #### Example:
> >
> > ```js
> > var sources: {
> >   captions: [
> >     {
> >       url: 'www.path.to/your/captions/file',
> >       type: 'vtt',
> >       default: true,
> >       language: 'en',
> >       label: 'English'
> >     }
> >   ]
> > };
> > ```
> >
> > ##
> >
> > ### sources.thumbnails
> >
> > ##### Type: `PCExternalThumbnailsConfig`
> >
> > ##### Default: `-`
> >
> > ##### Description: vtt thumbnails to be added to the media.
> >
> > The imgBaseUrl field is optional, if not provided - it would be resolved to the application domain.
> >
> > #### Example:
> >
> > ```js
> > var sources: {
> >   thumbnails: [
> >     {
> >       imgBaseUrl: 'www.path.to/your/resources/images',
> >       vttUrl: 'www.path.to/your/thumbnails/file.vtt'
> >     }
> >   ]
> > };
> > ```
> >
> > ##
> >
> > ### sources.startTime
> >
> > ##### Type: `number`
> >
> > ##### Default: `-1`
> >
> > ##### Description: Optional start time, in seconds, to begin playback.
> >
> > Default -1 refer to automatic start time - 0 to VOD and live edge to live.
> >
> > > Note. `startTime` affects the ad playback, e.g. `startTime: 10` will skip ads scheduled until 10.
> > > <br>To force playing ads scheduled before `startTime`, need to configure the ads plugin.
> > > <br>For example with [IMA](https://github.com/tasvirchi/playchi-js-ima/blob/master/docs/api.md) plugin, set `adsRenderingSettings: {playAdsAfterTime: -1}`.
> >
> > ##
> >
> > ### sources.seekFrom
> >
> > ##### Type: `number`
> >
> > ##### Default: `-`
> >
> > ##### Description: Optional time, in seconds, to start the playback from, by cutting the video.
> >
> > Unlike `startTime`, this configuration will cut and omit the part of the video that is before the configured `seekFrom` value and will start from there.
> > This will affect the duration of the video.
> >
> > ##
> >
> > ### sources.clipTo
> >
> > ##### Type: `number`
> >
> > ##### Default: `-`
> >
> > ##### Description: Optional time, in seconds, to end the playback, by cutting the video.
> >
> > `clipTo` will cut and omit the part of the video that is after the configured value, and will end at this position.
> > This will affect the duration of the video.
>
> ##
>
> ### config.text
>
> ##### Type: `PCTextConfigObject`
>
> ```js
> {
>  useNativeTextTrack: boolean,
>  enableCEA708Captions: boolean,
>  forceCenter: boolean,
>  textTrackDisplaySetting: PCTextTrackDisplaySettingObject,
>  textStyle: TextStyle,
>  captionsTextTrack1Label: string,
>  captionsTextTrack1LanguageCode: string,
>  captionsTextTrack2Label: string,
>  captionsTextTrack2LanguageCode: string
> }
> ```
>
> ##### Default:
>
> ```js
> {
>  useNativeTextTrack: false,
>  enableCEA708Captions: true,
>  forceCenter: false,
>  captionsTextTrack1Label: "English",
>  captionsTextTrack1LanguageCode: "en",
>  captionsTextTrack2Label: "Spanish",
>  captionsTextTrack2LanguageCode: "es"
> }
> ```
>
> ##
>
> > ### config.text.useNativeTextTrack
> >
> > ##### Type: `boolean`
> >
> > ##### Default: `false`
> >
> > ##### Description: Determines whether to use native browser text tracks or not.
> >
> > If set to True, the native browser captions will be displayed.
>
> ##
>
> > ### config.text.enableCEA708Captions
> >
> > ##### Type: `boolean`
> >
> > ##### Default: `true`
> >
> > ##### Description: Whether or not to enable CEA-708 captions.
>
> ##
>
> > ### config.text.forceCenter
> >
> > ##### Type: `Object`
> >
> > ##### Default: `false`
> >
> > ##### Description: set the forceCenter to true will override the position, align and size in textTrackDisplaySetting
>
> ##
>
> > ### config.text.textTrackDisplaySetting
> >
> > ##### Type: `PCTextTrackDisplaySettingObject`
> >
> > ##### Default: `null`
> >
> > ##### Description: set the textTrackDisplaySetting to override the vtt cues position
> >
> > ##### Config:
>
> ```js
> {
>   line: string | number, // [-16 .. 16]
>   lineAlign: string, // ['start', 'center', 'end']
>   align: string, // ['start', 'center', 'end', 'left', 'right']
>   position: number, //[0 .. 100]
>   positionAlign: string, // ['line-left', 'center', 'line-right']
>   snapToLines: boolean, // [true, false]
>   vertical: string, //['', 'lr', 'rl']
>   size: number //[0 .. 100]
> }
> ```
>
> > ##### line
> >
> > The line defines positioning of the cue box
> >
> > ##### lineAlign
> >
> > An alignment for the cue box’s line, one of start/center/end alignment
> >
> > ##### align
> >
> > An alignment for all lines of text within the cue box, in the dimension of the writing direction
> >
> > ##### snapToLines
> >
> > is a boolean indicating whether the line is an integer number of lines (using the line dimensions of the first line of the cue), or whether it is a percentage of the dimension of the video. The flag is set to true when lines are counted, and false otherwise.
> >
> > ##### position
> >
> > The position defines the indent of the cue box in the direction defined by the writing direction
> >
> > ##### positionAlign
> >
> > An alignment for the cue box in the dimension of the writing direction, describing what the position
> >
> > ##### snapToLines
> >
> > is a boolean indicating whether the line is an integer number of lines (using the line dimensions of the first line of the cue), or whether it is a percentage of the dimension of the video. The flag is set to true when lines are counted, and false otherwise.
> >
> > ##### vertical
> >
> > configures the cue to use vertical text layout rather than horizontal text layout. Vertical text layout is sometimes used in Japanese, for example. The default is horizontal layout
> >
> > ##### size
> >
> > A number giving the size of the cue box, to be interpreted as a percentage of the video, as defined by the writing direction
> >
> > [instance_properties](https://developer.mozilla.org/en-US/docs/Web/API/VTTCue#instance_properties)
>
> ##
>
> > ### config.text.textStyle
> >
> > ##### Type: `TextStyle`
> >
> > ##### Default: `null`
> >
> > ##### Description: set the styling for text tracks
> >
> > ##### Config:
> >
> > ```js
> > {
> >   fontSize?: '50%' | '75%' | '100%' | '200%' | '300%' | '400%'
> >   textAlign?: string, // ['default', 'center', 'left', 'right']
> >   fontScale?: -2 | -1 | 0 | 2 | 3 | 4
> >   fontFamily?: string, // font family available in browser
> >   fontColor?: [number, number, number], // RGB
> >   fontOpacity?: number, // [0.0 .. 1.0]
> >   fontEdge?: Array<[number, number, number, number, number, number]>, //
> > 								 TextStyle.EdgeStyles.NONE
> > 								 TextStyle.EdgeStyles.RAISED
> > 							 TextStyle.EdgeStyles.DEPRESSED
> > 							 TextStyle.EdgeStyles.UNIFORM
> > 							 TextStyle.EdgeStyles.DROP
> >   backgroundColor?: [number, number, number], // RGB
> >   backgroundOpacity?: number // [0.0 .. 1.0]
> > }
> > ```
> >
> > ##### textAlign
> >
> > An alignment for all lines of text within the cue box, in the dimension of the writing direction
> >
> > ##### fontSize
> >
> > Percentage unit relative to the parent element's font
> >
> > ##### fontScale
> >
> > Integer number representing the scaling factor relative to the parent element's font size
> >
> > ##### fontFamily
> >
> > The font family
> >
> > ##### fontColor
> >
> > Font color in RGB format
> >
> > ##### fontOpacity
> >
> > The font opacity
> >
> > ##### fontEdge
> >
> > Each inner array represents a shadow, and is composed of RGB values for the
> > shadow color, followed by pixel values for x-offset, y-offset, and blur
> >
> > ##### backgroundColor
> >
> > Background color in RGB format
> >
> > ##### backgroundOpacity
> >
> > The background opacity

> ##
>
> > ### config.text.captionsTextTrack1Label
> >
> > ##### Type: `string`
> >
> > ##### Default: `English`
> >
> > ##### Description: Label for the CEA-708 captions track 1.
>
> ##
>
> > ### config.text.captionsTextTrack1LanguageCode
> >
> > ##### Type: `string`
> >
> > ##### Default: `en`
> >
> > ##### Description: RFC 3066 language code for the CEA-708 captions track 1.
>
> ##
>
> > ### config.text.captionsTextTrack2Label
> >
> > ##### Type: `string`
> >
> > ##### Default: `Spanish`
> >
> > ##### Description: Label for the CEA-708 captions track 2.
>
> ##
>
> > ### config.text.captionsTextTrack2LanguageCode
> >
> > ##### Type: `string`
> >
> > ##### Default: `es`
> >
> > ##### Description: RFC 3066 language code for the CEA-708 captions track 2.
>
> ##
>
> ### config.playback
>
> ##### Type: `PCPlaybackConfigObject`
>
> ```js
> {
>  audioLanguage: string,
>  textLanguage: string,
>  additionalAudioLanguage: string,
>  additionalTextLanguage: string,
>  captionsDisplay: boolean,
>  volume: number,
>  playsinline: boolean,
>  crossOrigin: string,
>  preload: string,
>  autoplay: PCAutoPlayTypes,
>  loop: boolean,
>  autopause: boolean,
>  allowMutedAutoPlay: boolean,
>  muted: boolean,
>  pictureInPicture: boolean,
>  options: PCPlaybackOptionsObject,
>  streamPriority: Array<PCStreamPriorityObject>,
>  preferNative: PCPreferNativeConfigObject,
>  inBrowserFullscreen: boolean,
>  playAdsWithMSE: boolean,
>  screenLockOrientionMode: string
> }
> ```
>
> ##### Default:
>
> ```js
> {
>  audioLanguage: "",
>  textLanguage: "",
>  additionalAudioLanguage: "",
>  additionalTextLanguage: "",
>  captionsDisplay: false,
>  volume: 1,
>  playsinline: true,
>  preload: "none",
>  autoplay: false,
>  loop: false,
>  allowMutedAutoPlay: true,
>  muted: false,
>  pictureInPicture: true,
>  playAdsWithMSE: false,
>  screenLockOrientionMode: ScreenOrientationType.NONE,
>  options: {
>    html5: {
>      hls: {},
>      dash: {}
>    }
>  },
>  preferNative: {
>    hls: false,
>    dash: false
>  },
>  streamPriority: [
>    {
>      engine: "html5",
>      format: "hls"
>    },
>    {
>      engine: "html5",
>      format: "dash"
>    },
>    {
>      engine: "html5",
>      format: "progressive"
>    }
>  ]
> }
> ```
>
> ##### Description: Defines the playback options.
>
> > ### config.playback.audioLanguage
> >
> > ##### Type: `string || "auto"`
> >
> > ##### Default: `""`
> >
> > ##### Description: Sets the default audio track language.
> >
> > If an audio track with the defined language exists, this audio track will be selected as the initial audio track.
> >
> > #### Example:
> >
> > ```js
> > var config = {
> >   playback: {
> >     audioLanguage: 'eng' // Start playback with english audio
> >   }
> > };
> > ```
> >
> > If the value `"auto"` is set, i.e:
> >
> > ```js
> > var config = {
> >   playback: {
> >     audioLanguage: 'auto'
> >   }
> > };
> > ```
> >
> > If there is an audio track with the same language as the user's system locale language, this audio track will be selected.
>
> ##
>
> > ### config.playback.textLanguage
> >
> > ##### Type: `string || "auto"`
> >
> > ##### Default: `""`
> >
> > ##### Description: Defines the default captions language
> >
> > If captions for the defined language are available, this text track will be selected as the initial text track.
> >
> > #### Example:
> >
> > ```js
> > var config = {
> >   playback: {
> >     textLanguage: 'heb' // Start playback with hebrew captions
> >   }
> > };
> > ```
> >
> > If the value `"auto"` is set, i.e:
> >
> > ```js
> > var config = {
> >   playback: {
> >     textLanguage: 'auto'
> >   }
> > };
> > ```
> >
> > The player will choose the default captions language using the following logic:
> >
> > 1.  **Locale language** - If there is a text track with the same language as the user's system locale language, this text track will be selected.
> > 2.  **Manifest default language** - If a default language is specified in the manifest file then this language will be selected.
> > 3.  **First language in manifest** - The first language specified in the manifest file will be selected.
> > 4.  If none of the above conditions have taken place, do not display captions.
>
> ##
>
> > ### config.playback.additionalAudioLanguage
> >
> > ##### Type: `string`
> >
> > ##### Default: `""`
> >
> > ##### Description: Sets the default audio track language from the additionalAudioLanguage.
> >
> > option to add the audioLanguage with additional code (should be the same language as the audioLanguage field).
> > intended for cases where the 639-1 code is totaly different than the 639-2 code.
> > for example: Spanish 639-1: 'es' 639-2: 'spa'
> >
> > If an audio track with the defined language exists, this audio track will be selected as the initial audio track.
> >
> > #### Example:
> >
> > ```js
> > var config = {
> >   playback: {
> >     additionalAudioLanguage: 'spa' // Start playback with Spanish audio
> >   }
> > };
> > ```
>
> ##
>
> > ### config.playback.additionalTextLanguage
> >
> > ##### Type: `string`
> >
> > ##### Default: `""`
> >
> > ##### Description: Defines the default captions language from the additionalTextLanguage
> >
> > option to add the textLanguage with additional code. (should be the same language as the textLanguage field).
> > intended for cases where the 639-1 code is totaly different than the 639-2 code.
> > for example: Spanish 639-1: 'es' 639-2: 'spa'
> >
> > If captions for the defined language are available, this text track will be selected as the initial text track.
> >
> > #### Example:
> >
> > ```js
> > var config = {
> >   playback: {
> >     additionalTextLanguage: 'spa' // Start playback with Spanish captions
> >   }
> > };
> > ```
>
> ##
>
> > ### config.playback.captionsDisplay
> >
> > ##### Type: `boolean`
> >
> > ##### Default: `false`
> >
> > ##### Description: A Boolean attribute that indicates whether the captions are disabled or enabled by default.
> >
> > #### Example:
> >
> > ```js
> > var config = {
> >   playback: {
> >     captionsDisplay: true
> >   }
> > };
> > ```
>
> ##
>
> > ### config.playback.volume
> >
> > ##### Type: `number`
> >
> > ##### Default: `1`
> >
> > ##### Description: Defines the initial volume value.
> >
> > The value must be in the range of 0-1.
> >
> > #### Example:
> >
> > ```js
> > var config = {
> >   playback: {
> >     volume: 0.5
> >   }
> > };
> > ```
>
> ##
>
> > ### config.playback.playsinline
> >
> > ##### Type: `boolean`
> >
> > ##### Default: `true`
> >
> > ##### Description: A Boolean attribute that indicates whether the video should be played "inline", that is, within the element's playback area.
> >
> > This is especially relevant when playing videos on iPhone devices, where - if the value is set to false - the video will be played using the AV Player (iOS native video player).
>
> ##
>
> > ### config.playback.crossOrigin
> >
> > ##### Type: `string`
> >
> > ##### Default: -
> >
> > ##### Description: This enumerated attribute indicates whether to use CORS to fetch the related image. [CORS-enabled resources](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image) can be reused in the <canvas> element without being tainted.
> >
> > Possible values:
> >
> > - `"anonymous"`: Sends a cross-origin request without a credential. In other words, it sends the Origin: HTTP header without a cookie, X.509 certificate, or performing HTTP Basic authentication. If the server does not give credentials to the origin site (by not setting the Access-Control-Allow-Origin: HTTP header), the image will be tainted, and its usage restricted.
> > - `"use-credentials"`: Sends a cross-origin request with a credential. In other words, it sends the Origin: HTTP header with a cookie, a certificate, or performing HTTP Basic authentication. If the server does not give credentials to the origin site (through Access-Control-Allow-Credentials: HTTP header), the image will be tainted and its usage restricted.
> >
> > When not present, the resource is fetched without a CORS request (i.e. without sending the Origin: HTTP header), preventing its non-tainted used in <canvas> elements. If invalid, it is handled as if the enumerated keyword anonymous was used. See [CORS settings attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for additional information.
>
> ##
>
> > ### config.playback.preload
> >
> > ##### Type: `string`
> >
> > ##### Default: `"none"`
> >
> > ##### Description: Indicates whether the video should be preloaded or not.
> >
> > Possible values:
> >
> > - `"none"`: indicates that the video should not be preloaded.
> > - `"auto"`: indicates that the whole video file could be downloaded, even if the user is not expected to use it.
>
> ##
>
> > ### config.playback.autoplay/allowMutedAutoPlay
> >
> > for `autoplay` & `allowMutedAutoPlay` options read [here](autoplay.md).
>
> ##
>
> > ### config.playback.loop
> >
> > ##### Type: `boolean`
> >
> > ##### Default: `false`
> >
> > ##### Description: Indicates whether the video should play in loop
>
> ##
>
> > ### config.playback.autopause
> >
> > ##### Type: `boolean`
> >
> > ##### Default: `false`
> >
> > ##### Description: Indicates whether the video should be automatically paused when not in view
>
> ##
>
> > ### config.playback.muted
> >
> > ##### Type: `boolean`
> >
> > ##### Default: `false`
> >
> > ##### Description: Indicates whether the video should be muted or not.
> >
> > This is a Boolean attribute that indicates the default setting of the audio contained in the video. If set, the audio will be initially silenced. The attribute's default value is false, which means that the audio will be played automatically when the video is played.
>
> ##
>
> > ### config.playback.playbackRates
> >
> > ##### Type: `Array<number>`
> >
> > ##### Description: Sets the available rates at which the media can be played back.
> >
> > This is an Array attribute that is used to implement user controls for fast forward, slow motion, and so forth. The normal playback rate is multiplied by this value to obtain the current rate, so a value of 1.0 indicates normal speed.
>
> ##
>
> > ### config.playback.pictureInPicture
> >
> > ##### Type: `boolean`
> >
> > ##### Default: `true`
> >
> > ##### Description: Indiciates if the picture in picture feature is enabled.
> >
> > This is a boolean attribute that allows to disable (enabled by default) the picture in picture feature (it will be enabled only in browsers supporting this ability)
>
> ##
>
> > ### config.playback.options
> >
> > ##### Type: `PCPlaybackOptionsObject`
> >
> > ```js
> > {
> >  html5: {
> >    hls: Object,
> >    dash: Object
> >  }
> > }
> > ```
> >
> > ##### Default:
> >
> > ```js
> > {
> >  html5: {
> >    hls: {},
> >    dash: {}
> >  }
> > }
> > ```
> >
> > ##### Description: Defines the media source adapters configurations.
> >
> > - For `hls` configuration, see the [hls.js](https://github.com/video-dev/hls.js/blob/master/docs/API.md) documentation.
> > - For `dash` configuration, see the [shaka-player](https://shaka-player-demo.appspot.com/docs/api/tutorial-config.html) documentation.
>
> ##
>
> > ### config.playback.preferNative
> >
> > ##### Type: `PCPreferNativeConfig`
> >
> > ```js
> > {
> >  hls: boolean,
> >  dash: boolean
> > }
> > ```
> >
> > ##### Default:
> >
> > ```js
> > {
> >  hls: false,
> >  dash: false
> > }
> > ```
> >
> > ##### Description: Indicates whether to prefer native browser playback (if supported) with media source extensions.
> >
> > If one of the values is set to True and the player chooses to play the truthly media source extension, the player will try to play it natively if supported by the browser.
> >
> > #### Example:
> >
> > Lets assume the following configuration:
> >
> > ```js
> > var config = {
> >   playback: {
> >     preferNative: {
> >       hls: true
> >     }
> >   }
> > };
> > ```
> >
> > If the player is running on a _Safari_ browser, the player will use the native hls playback managed by the _Safari_ browser. However, if running on a browser in which hls playback is not supported natively, for example, _Chrome_, the player will play hls using the `hls.js` library.
>
> ##
>
> > ### config.playback.inBrowserFullscreen
> >
> > ##### Type: `boolean`
> >
> > ##### Default: `false`
> >
> > ```js
> > inBrowserFullscreen: boolean;
> > ```
> >
> > ##### Description: Gives the ability to choose an in-browser fullscreen experience. Useful on iOS devices which will replace the native fullscreen of the AV player.
>
> ##
>
> > ### config.playback.playAdsWithMSE
> >
> > ##### Type: `boolean`
> >
> > ##### Default: `false`
> >
> > ```js
> > playAdsWithMSE: boolean;
> > ```
> >
> > > ##### Description: Gives the ability to share same video tag to play ads and source with media source
>
> ##
>
> > ### config.playback.screenLockOrientionMode
> >
> > ##### Type: `string` - value list option in ScreenOrientationType
> >
> > ##### Default: `none` - ScreenOrientationType.NONE
> >
> > ```js
> > screenLockOrientionMode: string;
> > ```
> >
> > > ##### Description: Gives the ability to lock the screen orientation in fullscreen
>
> ##
>
> > ### config.playback.streamPriority
> >
> > ##### Type: `Array<PCStreamPriorityObject`
> >
> > > ##### Type `PCStreamPriorityObject`
> > >
> > > ```js
> > > {
> > >   engine: string,
> > >   format: string
> > > }
> > > ```
> >
> > ##### Default:
> >
> > ```js
> > [
> >   {
> >     engine: 'html5',
> >     format: 'hls'
> >   },
> >   {
> >     engine: 'html5',
> >     format: 'dash'
> >   },
> >   {
> >     engine: 'html5',
> >     format: 'progressive'
> >   },
> >   {
> >     engine: 'flash',
> >     format: 'hls'
> >   }
> > ];
> > ```
> >
> > ##### Description: Specifies the list of engine and stream format pairs of the player by ascending order.
> >
> > As soon as the player receives the sources, it will review the configuration array and try to play the source with the matched stream format according to the matched engine.
> > For example, in the priority configuration above, the player will try to play the hls stream using an html5 engine first. If an hls stream isn't received, the player will continue to play the dash stream using an html5 engine. If a dash stream isn't received, the player will then will continue to play the progressive stream using an html5 engine.

##

> ### config.streaming
>
> ##### Type: `PCStreamingConfigObject`
>
> ```js
> {
>   forceBreakStall: boolean,
>   lowLatencyMode: boolean,
>   trackEmsgEvents: boolean,
>   switchDynamicToStatic: boolean
> }
> ```
>
> ##### Default:
>
> ```js
> {
>   forceBreakStall: false,
>   lowLatencyMode: true, // default for hls playback (optional)
>   lowLatencyMode: false, // default for dash & smart TV playback (optional)
>   trackEmsgEvents: true, // default for dash (optional)
>   switchDynamicToStatic: false // toggle whether to switch to static manifest when live stream ends
> }
> ```
>
> > ##
> >
> > ### config.streaming.forceBreakStall
> >
> > ##### Type: `boolean`
> >
> > ##### Default: `false`
> >
> > ##### Description: Gives the ability to break stalls on low level devices which could get stuck on stall
>
> > ##
> >
> > ### config.streaming.lowLatencyMode (optional)
> >
> > ##### Type: `boolean`
> >
> > ##### Default: hls: `true`, dash and smart TV: `false` (in smart TV due to an issue in dash on samsung)
> >
> > ##### Description: Enable low latency streaming mode
> >
> > ##
> >
> > ### config.streaming.trackEmsgEvents (optional)
> >
> > ##### Default: dash: `true`
> >
> > ##### Description: Toggle emsg event listener on/off in dash adapter
> >
> > ##
> >
> > ### config.streaming.switchDynamicToStatic (optional)
> >
> > ##### Default: dash: `false`
> >
> > ##### Description: Toggle whether to switch to static manifest when live stream ends.

##

> ### config.session
>
> ##### Type: `PCSessionConfigObject`
>
> ```js
> {
>  id: string,
>  ts: string,
>  partnerId: number,
>  uiConfId: number
> }
> ```
>
> ##### Default: `-`
>
> ##### Description: Defines the session data (optional).
>
> > ##
> >
> > ### config.session.id
> >
> > ##### Type: `string`
> >
> > ##### Default: `-`
> >
> > ##### Description: The session id.
> >
> > ##
> >
> > ### config.session.ts
> >
> > ##### Type: `string`
> >
> > ##### Default: `-`
> >
> > ##### Description: The session secret.
> >
> > ##
> >
> > ### config.session.partnerId
> >
> > ##### Type: `number`
> >
> > ##### Default: `-`
> >
> > ##### Description: The partner id.
> >
> > ##
> >
> > ### config.session.uiConfId
> >
> > ##### Type: `number`
> >
> > ##### Default: `-`
> >
> > ##### Description: The ui configuration id.

##

> ### config.network
>
> ##### Type: `PCNetworkConfigObject`
>
> ```js
> {
>  requestFilter?: Function,
>  responseFilter?: Function
> }
> ```
>
> ##### Default: `-`
>
> ##### Description: Defines the network data (optional).
>
> > ##
> >
> > ### config.network.requestFilter
> >
> > ##### Type: `function(type: PCRequestType, request: PCRequestObject): (void | Promise<PCRequestObject>)`
> >
> > ##### Default: `-`
> >
> > ##### Description: Defines a filter for requests. This filter takes the request and modifies it before it is sent. A request filter can run asynchronously by returning a promise; in this case, the request will not be sent until the promise is resolved.
> >
> > ##
> >
> > > ##### Type: PCRequestType
> > >
> > > ```js
> > > {
> > >   MANIFEST: 0,
> > >   SEGMENT: 1,
> > >   LICENSE: 2
> > > }
> > > ```
> > >
> > > ##
> > >
> > > ##### Type: PCRequestObject
> > >
> > > ```js
> > > {
> > >   url: string,
> > >   body: ?string | ArrayBuffer,
> > >   headers: { [header: string] : string }
> > > }
> > > ```
> > >
> > > ##
> > >
> > > > ##### `PCRequestObject.url`
> > > >
> > > > ##### Type: `string`
> > > >
> > > > ##### Description: The request URL.
> > > >
> > > > ##
> > > >
> > > > ##### `PCRequestObject.body`
> > > >
> > > > ##### Type: `string || ArrayBuffer`
> > > >
> > > > ##### Description: The body of the request.
> > > >
> > > > ##
> > > >
> > > > ##### `PCRequestObject.headers`
> > > >
> > > > ##### Type: `{ [header: string] : string }`
> > > >
> > > > ##### Description: A mapping of headers for the request. e.g.: {'HEADER': 'VALUE'}.
> >
> > ##
> >
> > #### Examples:
> >
> > ```js
> > var config = {
> >   network: {
> >     requestFilter: function (type, request) {
> >       if (type === TasvirchiPlayer.core.RequestType.LICENSE) {
> >         request.headers['customData'] = CUSTOM_DATA;
> >       }
> >     }
> >   }
> > };
> > ```
> >
> > ```js
> > var config = {
> >   network: {
> >     requestFilter: function (type, request) {
> >       if (type === TasvirchiPlayer.core.RequestType.LICENSE) {
> >         return new Promise(function (resolve) {
> >           request.headers['customData'] = CUSTOM_DATA;
> >           resolve(request);
> >         });
> >       }
> >     }
> >   }
> > };
> > ```
> >
> > ##
> >
> > ### config.network.responseFilter
> >
> > ##### Type: `function(type: PCRequestType, request: PCResponseObject): (void | Promise<PCResponseObject>)`
> >
> > ##### Default: `-`
> >
> > ##### Description: Defines a filter for responses. This filter takes the response and modifies it before it is returned. A response filter can run asynchronously by returning a promise.
> >
> > ##
> >
> > > ##### Type: PCRequestType
> > >
> > > ```js
> > > {
> > >   MANIFEST: 0,
> > >   SEGMENT: 1,
> > >   LICENSE: 2
> > > }
> > > ```
> > >
> > > ##
> > >
> > > ##### Type: PCResponseObject
> > >
> > > ```js
> > > {
> > >   url: string,
> > >   originalUrl: string,
> > >   data: ArrayBuffer,
> > >   headers: { [header: string] : string }
> > > }
> > > ```
> > >
> > > ##
> > >
> > > > ##### `PCResponseObject.url`
> > > >
> > > > ##### Type: `string`
> > > >
> > > > ##### Description: The URI which was loaded. Request filters and server redirects can cause this to be different from the original request URIs.
> > > >
> > > > ##
> > > >
> > > > ##### `PCResponseObject.originalUrl`
> > > >
> > > > ##### Type: `string`
> > > >
> > > > ##### Description: The original URI passed to the browser for networking. This is before any redirects, but after request filters are executed.
> > > >
> > > > ##
> > > >
> > > > ##### `PCResponseObject.data`
> > > >
> > > > ##### Type: `ArrayBuffer`
> > > >
> > > > ##### Description: The body of the response.
> > > >
> > > > ##
> > > >
> > > > ##### `PCResponseObject.headers`
> > > >
> > > > ##### Type: `{ [header: string] : string }`
> > > >
> > > > ##### Description: A map of response headers, if supported by the underlying protocol. All keys should be lowercased. For HTTP/HTTPS, may not be available cross-origin.
> >
> > ##
> >
> > #### Examples:
> >
> > ```js
> > var config = {
> >   network: {
> >     responseFilter: function (type, response) {
> >       if (type === TasvirchiPlayer.core.RequestType.LICENSE) {
> >         response.data = MANIPULATED_DATA;
> >       }
> >     }
> >   }
> > };
> > ```
> >
> > ```js
> > var config = {
> >   network: {
> >     responseFilter: function (type, response) {
> >       if (type === TasvirchiPlayer.core.RequestType.LICENSE) {
> >         return new Promise(function (resolve) {
> >           response.data = MANIPULATED_DATA;
> >           resolve(response);
> >         });
> >       }
> >     }
> >   }
> > };
> > ```
> >
> > ##
> >
> > ### config.network.maxStaleLevelReloads
> >
> > ##### Type: `number`
> >
> > ##### Default: `20`
> >
> > ##### Description: The maximal amount of times player should request a manifest refresh, when no new segments appear in the refreshed manifest.
>
> ### config.customLabels
>
> ##### Type: `PCCustomLabelsConfigObject`
>
> ```js
> {
>  audio: Function,
>  qualities: Function,
>  captions: Function
> }
> ```
>
> ##### Default: `-`
>
> ##### Description: Specifies callback functions that modify the default label of a track. If this section or one of the keys is not present, the player will use a default label.
>
> This part of the configuration has three possible keys:
>
> - audio (for Audio tracks).
> - qualities (for Video tracks).
> - captions (for Text tracks).
>
> The value of the keys is a reference to a function.
> The function gets a track object as an input and returns a string with the custom label.
> Here is an example to a possible use of this configuration:
>
> ```js
> var config = {
>   customLabels: {
>     qualities: function (videoTrack) {
>       if (videoTrack.height > 500) {
>         return 'High';
>       }
>       return 'Low';
>     }
>   }
> };
> ```
>
> **Important**:
> A Text track has language and label properties. The label is set by the label property in the manifest.
> However, in case the manifest does not have a label property - the language property will be set as the tracks label.

##

> ### config.abr
>
> ##### Type: `PCAbrConfigObject`
>
> ```js
> {
>   enabled: boolean,
>   fpsDroppedFramesInterval: number,
>   fpsDroppedMonitoringThreshold: number,
>   capLevelOnFPSDrop: boolean,
>   capLevelToPlayerSize: boolean,
>   defaultBandwidthEstimate: number,
>   restrictions: {
>     minHeight: number,
>     maxHeight: number,
>     minWidth: number,
>     maxWidth: number,
>     minBitrate: number,
>     maxBitrate: number
>   }
> }
> ```
>
> ##### Default:
>
> ```js
> {
>   enabled: true,
>   fpsDroppedFramesInterval: 5000,
>   fpsDroppedMonitoringThreshold: 0.2,
>   capLevelOnFPSDrop: false,
>   capLevelToPlayerSize: false,
>   restrictions: {
>     minHeight: 0,
>     maxHeight: Infinity,
>     minWidth: 0,
>     maxWidth: Infinity,
>     minBitrate: 0,
>     maxBitrate: Infinity
>   }
> }
> ```
>
> ##### Description: Specifies flags to control / restrict the ABR mechanism.
>
> > ### config.abr.enabled
> >
> > ##### Type: `boolean`
> >
> > ##### Default: `true`
> >
> > ##### Description: Whether the ABR mechanism is enabled.
> >
> > ##
> >
> > ### config.abr.fpsDroppedFramesInterval
> >
> > ##### Type: `number`
> >
> > ##### Default: `5000`
> >
> > ##### Description: Interval time in milliseconds to check if too many frames are dropped
> >
> > ##
> >
> > ### config.abr.fpsDroppedMonitoringThreshold
> >
> > ##### Type: `number`
> >
> > ##### Default: `0.2`
> >
> > ##### Description: The allowed frames dropped threshold.
> >
> > ##
> >
> > ### config.abr.capLevelOnFPSDrop
> >
> > ##### Type: `boolean`
> >
> > ##### Default: false
> >
> > ##### Description: If the player should cap the level when the fps exceeds the threshold.
> >
> > ##
> >
> > ### config.abr.capLevelToPlayerSize
> >
> > ##### Type: `boolean`
> >
> > ##### Default: false
> >
> > ##### Description: If the player should cap the level to the player dimensions (width and height).
> >
> > ##
> >
> > ### config.abr.defaultBandwidthEstimate
> >
> > ##### Type: `number`
> >
> > ##### Description: The default bandwidth estimate to use if there is not enough data, in bit/sec.
> >
> > ##
> >
> > ### config.abr.restrictions
> >
> > ##### Type: `PCABRRestrictionObject`
> >
> > ##### Default: `{}`
> >
> > ##### Description: The restrictions to apply to ABR decisions.
> >
> > ##
> >
> > > ### config.abr.restrictions.minHeight
> > >
> > > ##### Type: `number`
> > >
> > > ##### Default: `0`
> > >
> > > ##### Description: The minimum height of video track.
> > >
> > > ##
> > >
> > > ### config.abr.restrictions.maxHeight
> > >
> > > ##### Type: `number`
> > >
> > > ##### Default: `Infinity`
> > >
> > > ##### Description: The maximum height of video track.
> > >
> > > ##
> > >
> > > ### config.abr.restrictions.minWidth
> > >
> > > ##### Type: `number`
> > >
> > > ##### Default: `0`
> > >
> > > ##### Description: The minimum width of video track.
> > >
> > > ##
> > >
> > > ### config.abr.restrictions.maxWidth
> > >
> > > ##### Type: `number`
> > >
> > > ##### Default: `Infinity`
> > >
> > > ##### Description: The maximum width of video track.
> > >
> > > ##
> > >
> > > ### config.abr.restrictions.minBitrate
> > >
> > > ##### Type: `number`
> > >
> > > ##### Default: `0`
> > >
> > > ##### Description: The minimum bitrate in bit/sec.
> > >
> > > ##
> > >
> > > ### config.abr.restrictions.maxBitrate
> > >
> > > ##### Type: `number`
> > >
> > > ##### Default: `Infinity`
> > >
> > > ##### Description: The maximum bitrate in bit/sec.

##

> ### config.drm
>
> ##### Type: `PCDrmConfigObject`
>
> ```js
> {
>   keySystem: string;
> }
> ```
>
> ##### Description: DRM system configuration
>
> > ### config.drm.keySystem
> >
> > ##### Type: `string`
> >
> > ##### Default: ``
> >
> > ##### Description: A specific DRM key system to use.

##

> ### config.dimensions
>
> ##### Type: `PCDimensionsConfig`
>
> ```js
> {
>   width?: string | number;
>   height?: string | number;
>   ratio?: string;
> }
> ```
>
> ##### Description: Dimensions configuration
>
> > ### config.dimensions.width
> >
> > ##### Type: `string | number`
> >
> > ##### Default: `''`
> >
> > ##### Description: The width of the player.
> >
> > If number was provided, the width will be calculated in pixels (`width: 640` equivalent to `width: '640px'`).
> > If string was provided, any valid css syntax can be passed, for example: `width: '100%'`, `width: 'auto'`, etc.
> >
> > ### config.dimensions.height
> >
> > ##### Type: `string | number`
> >
> > ##### Default: `''`
> >
> > ##### Description: The height of the player.
> >
> > If number was provided, the height will be calculated in pixels (`height: 360` equivalent to `width: '360px'`).
> > If string was provided, any valid css syntax can be passed, for example: `height: '100%'`, `height: 'auto'`, etc.
> >
> > ### config.dimensions.ratio
> >
> > ##### Type: `string`
> >
> > ##### Default: `''`
> >
> > ##### Description: Defines the aspect ratio of the player.
> >
> > The aspect ratio should be written in the form of `'width:height'`, for example: `'4:3'` (classic TV ratio).
> > If one of the `height` or `width` parameters is additionally provided in the configuration, the value of the other parameter not provided will be calculated accordingly to match the aspect ratio. If both were provided, the `height` value would be overridden.

##

Now that we've learned about the different options available in the player configuration, let's see [how does the source selection logic works](./source-selection-logic.md).
