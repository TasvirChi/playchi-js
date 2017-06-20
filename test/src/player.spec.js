// eslint-disable-next-line no-unused-vars
import Player from '../../src/player'
import {HTML5_EVENTS as Html5Events, CUSTOM_EVENTS as CustomEvents} from '../../src/event/events'
import sourcesConfig from './configs/sources.json'
import VideoTrack from '../../src/track/video-track'
import AudioTrack from '../../src/track/audio-track'
import TextTrack from '../../src/track/text-track'
import {removeVideoElementsFromTestPage} from './utils/test-utils'

describe("play", () => {
  let config, player;

  beforeEach(() => {
    config = sourcesConfig.mp4_none_hls_dash;
    player = new Player(config);
  });

  afterEach(() => {
    player.destroy();
  });

  after(() => {
    removeVideoElementsFromTestPage();
  });

  it("should success before load", (done) => {
    player.addEventListener('playing', () => {
      done();
    });
    player.play();
  });

  it("should success after load", (done) => {
    player.addEventListener('playing', () => {
      done();
    });
    player.load();
    player.ready().then(() => {
      player.play();
    });
  });
});

describe("ready", () => {

  describe("success", () => {

    let config;

    before(() => {
      config = sourcesConfig.mp4_none_hls_dash;
    });

    describe("preload none", () => {

      describe("passing config in constructor", () => {

        let player;

        beforeEach(() => {
          player = new Player(config);
        });

        afterEach(() => {
          player.destroy();
        });

        it("should success ready -> load", (done) => {
          player.ready()
            .then(() => {
              done();
            });
          player.load();
        });

        it("should success load -> ready", (done) => {
          player.load();
          player.ready()
            .then(() => {
              done();
            });
        });
      });

      describe("passing config in configure", () => {

        let player;

        beforeEach(() => {
          player = new Player();
        });

        afterEach(() => {
          player.destroy();
        });

        it("should success configure -> ready -> load", (done) => {
          player.configure(config);
          player.ready()
            .then(() => {
              done();
            });
          player.load();
        });

        it("should success configure -> load -> ready", (done) => {
          player.configure(config);
          player.load();
          player.ready()
            .then(() => {
              done();
            });
        });

        it("should success ready -> configure -> load", (done) => {
          player.ready()
            .then(() => {
              done();
            });
          player.configure(config);
          player.load();
        });
      });
    });

    describe("preload auto", () => {

      describe("passing config in constructor", () => {

        let player;

        beforeEach(() => {
          config.preload = 'auto';
          player = new Player(config);
        });

        afterEach(() => {
          player.destroy();
        });

        it("should success ready -> load", (done) => {
          player.ready()
            .then(() => {
              done();
            });
          player.load();
        });

        it("should success load -> ready", (done) => {
          player.load();
          player.ready()
            .then(() => {
              done();
            });
        });
      });

      describe("passing config in configure", () => {

        let player;

        beforeEach(() => {
          config.preload = 'auto';
          player = new Player();
        });

        afterEach(() => {
          player.destroy();
        });

        it("should success configure -> ready -> load", (done) => {
          player.configure(config);
          player.ready()
            .then(() => {
              done();
            });
          player.load();
        });

        it("should success configure -> load -> ready", (done) => {
          player.configure(config);
          player.load();
          player.ready()
            .then(() => {
              done();
            });
        });

        it("should success ready -> load -> configure", (done) => {
          player.ready()
            .then(() => {
              done();
            });
          player.load();
          player.configure(config);
        });

        it("should success ready -> configure -> load", (done) => {
          player.ready()
            .then(() => {
              done();
            });
          player.configure(config);
          player.load();
        });

        it("should success load -> configure -> ready", (done) => {
          player.load();
          player.configure(config);
          player.ready()
            .then(() => {
              done();
            });
        });

        it("should success load -> ready -> configure", (done) => {
          player.load();
          player.ready()
            .then(() => {
              done();
            });
          player.configure(config);
        });
      });
    });

  });

  describe("failure", () => {

    let config;

    before(() => {
      config = sourcesConfig.corrupted_url;
    });

    describe("preload none", () => {

      describe("passing config in constructor", () => {

        let player;

        beforeEach(() => {
          player = new Player(config);
        });

        afterEach(() => {
          player.destroy();
        });

        it("should fail ready -> load", (done) => {
          player.ready()
            .catch((error) => {
              error.type.should.be.equal('error');
              done();
            });
          player.load();
        });

        it("should fail load -> ready", (done) => {
          player.load();
          player.ready()
      .catch((error) => {
        error.type.should.be.equal('error');
        done();
      });
        });
      });

      describe("passing config in configure", () => {

        let player;

        beforeEach(() => {
          player = new Player();
        });

        afterEach(() => {
          player.destroy();
        });

        it("should fail configure -> ready -> load", (done) => {
          player.configure(config);
          player.ready()
      .catch((error) => {
        error.type.should.be.equal('error');
        done();
      });
          player.load();
        });

        it("should fail configure -> load -> ready", (done) => {
          player.configure(config);
          player.load();
          player.ready()
      .catch((error) => {
        error.type.should.be.equal('error');
        done();
      });
        });

        it("should fail ready -> configure -> load", (done) => {
          player.ready()
      .catch((error) => {
        error.type.should.be.equal('error');
        done();
      });
          player.configure(config);
          player.load();
        });
      });
    });

    describe("preload auto", () => {

      describe("passing config in constructor", () => {

        let player;

        beforeEach(() => {
          config.preload = 'auto';
          player = new Player(config);
        });

        afterEach(() => {
          player.destroy();
        });

        it("should fail ready -> load", (done) => {
          player.ready()
      .catch((error) => {
        error.type.should.be.equal('error');
        done();
      });
          player.load();
        });

        it("should fail load -> ready", (done) => {
          player.load();
          player.ready()
      .catch((error) => {
        error.type.should.be.equal('error');
        done();
      });
        });
      });

      describe("passing config in configure", () => {

        let player;

        beforeEach(() => {
          config.preload = 'auto';
          player = new Player();
        });

        afterEach(() => {
          player.destroy();
        });

        it("should fail configure -> ready -> load", (done) => {
          player.configure(config);
          player.ready()
      .catch((error) => {
        error.type.should.be.equal('error');
        done();
      });
          player.load();
        });

        it("should fail configure -> load -> ready", (done) => {
          player.configure(config);
          player.load();
          player.ready()
      .catch((error) => {
        error.type.should.be.equal('error');
        done();
      });
        });

        it("should fail ready -> load -> configure", (done) => {
          player.ready()
      .catch((error) => {
        error.type.should.be.equal('error');
        done();
      });
          player.load();
          player.configure(config);
        });

        it("should fail ready -> configure -> load", (done) => {
          player.ready()
      .catch((error) => {
        error.type.should.be.equal('error');
        done();
      });
          player.configure(config);
          player.load();
        });

        it("should fail load -> configure -> ready", (done) => {
          player.load();
          player.configure(config);
          player.ready()
      .catch((error) => {
        error.type.should.be.equal('error');
        done();
      });
        });

        it("should fail load -> ready -> configure", (done) => {
          player.load();
          player.ready()
      .catch((error) => {
        error.type.should.be.equal('error');
        done();
      });
          player.configure(config);
        });
      });
    });

  });

  after(() => {
    removeVideoElementsFromTestPage();
  });
});

describe('getTracks dummy', () => {
  let config = sourcesConfig.mp4_none_hls_dash;
  let player = new Player(config);

  before(() => {
    player._tracks = [
      new VideoTrack(),
      new AudioTrack(),
      new AudioTrack(),
      new TextTrack(),
      new TextTrack(),
      new TextTrack()
    ];
  });

  after(() => {
    removeVideoElementsFromTestPage();
  });

  it('should return all tracks for no type', () => {
    player.getTracks().length.should.be.equal(6);
  });

  it('should return video tracks', () => {
    player.getTracks('video').length.should.be.equal(1);
  });

  it('should return audio tracks', () => {
    player.getTracks('audio').length.should.be.equal(2);
  });

  it('should return text tracks', () => {
    player.getTracks('text').length.should.be.equal(3);
  });

  it('should return all tracks for unknown type', () => {
    player.getTracks('some').length.should.be.equal(6);
  });
});

describe('getTracks real', () => {
  let config;
  let player;
  let video;
  let track1;
  let track2;

  before(() => {
    track1 = document.createElement("track");
    track2 = document.createElement("track");
    track1.kind = 'subtitles';
    track1.label = 'English';
    track1.default = true;
    track2.kind = 'captions';
    track2.srclang = 'fr';
  });

  beforeEach(() => {
    config = sourcesConfig.mp4_none_hls_dash;
    player = new Player(config);
    video = player._engine.getVideoElement();
    video.appendChild(track1);
    video.appendChild(track2);
  });

  afterEach(() => {
    player.destroy();
  });

  after(() => {
    removeVideoElementsFromTestPage();
  });

  it('should return all tracks using ready', (done) => {
    player.ready().then(() => {
      let videoTracksLength = (video.videoTracks ? video.videoTracks.length : 0);
      let audioTracksLength = (video.audioTracks ? video.audioTracks.length : 0);
      let textTracksLength = (video.textTracks ? video.textTracks.length : 0);
      let totalTracksLength = videoTracksLength + audioTracksLength + textTracksLength;
      player.getTracks().length.should.be.equal(totalTracksLength);
      done();
    });
    player.load();
  });

  it('should return video tracks', (done) => {
    player.ready().then(() => {
      let videoTracksLength = (video.videoTracks ? video.videoTracks.length : 0);
      player.getTracks('video').length.should.be.equal(videoTracksLength);
      done();
    });
    player.load();
  });

  it('should return audio tracks', (done) => {
    player.ready().then(() => {
      let audioTracksLength = (video.audioTracks ? video.audioTracks.length : 0);
      player.getTracks('audio').length.should.be.equal(audioTracksLength);
      done();
    });
    player.load();
  });

  it('should return text tracks', (done) => {
    player.ready().then(() => {
      let textTracksLength = (video.textTracks ? video.textTracks.length : 0);
      player.getTracks('text').length.should.be.equal(textTracksLength);
      done();
    });
    player.load();
  });

  it('should return all tracks for unknown type', (done) => {
    player.ready().then(() => {
      let videoTracksLength = (video.videoTracks ? video.videoTracks.length : 0);
      let audioTracksLength = (video.audioTracks ? video.audioTracks.length : 0);
      let textTracksLength = (video.textTracks ? video.textTracks.length : 0);
      let totalTracksLength = videoTracksLength + audioTracksLength + textTracksLength;
      player.getTracks('some').length.should.be.equal(totalTracksLength);
      done();
    });
    player.load();
  });

  it('should return empty array before loading', () => {
    let tracks = player.getTracks();
    tracks.length.should.be.equal(0);
  });
});

describe('selectTrack - audio', () => {
  let config, player, video;

  beforeEach(() => {
    config = sourcesConfig.mp4_none_hls_dash;
    player = new Player();
  });

  afterEach(() => {
    player.destroy();
  });

  after(() => {
    removeVideoElementsFromTestPage();
  });

  it('should select a new audio track', (done) => {
    player.load();
    player.ready().then(() => {
      if (video.audioTracks) {
        player.addEventListener(CustomEvents.AUDIO_TRACK_CHANGED, (event) => {
          (event.payload instanceof AudioTrack).should.be.true;
          event.payload.index.should.equal(2);
          video.audioTracks[0].enabled.should.be.false;
          video.audioTracks[1].enabled.should.be.false;
          video.audioTracks[2].enabled.should.be.true;
          tracks[0].active.should.be.false;
          tracks[1].active.should.be.false;
          tracks[2].active.should.be.true;
          done();
        });
        let tracks = player._tracks.filter((track) => {
          return track instanceof AudioTrack;
        });
        video.audioTracks[0].enabled.should.be.true;
        video.audioTracks[1].enabled.should.be.false;
        video.audioTracks[2].enabled.should.be.false;
        tracks[0].active.should.be.true;
        tracks[1].active.should.be.false;
        tracks[2].active.should.be.false;
        player.selectTrack(new AudioTrack({index: 2}));
      }
      done();
    });
    player.configure(config);
    video = player._engine.getVideoElement();
  });

  it('should not change the selected audio track', (done) => {
    player.ready().then(() => {
      if (video.audioTracks) {
        let tracks = player._tracks.filter((track) => {
          return track instanceof AudioTrack;
        });
        video.audioTracks[0].enabled.should.be.true;
        video.audioTracks[1].enabled.should.be.false;
        video.audioTracks[2].enabled.should.be.false;
        tracks[0].active.should.be.true;
        tracks[1].active.should.be.false;
        tracks[2].active.should.be.false;
        player.selectTrack(new AudioTrack({index: 0}));
        video.audioTracks[0].enabled.should.be.true;
        video.audioTracks[1].enabled.should.be.false;
        video.audioTracks[2].enabled.should.be.false;
        tracks[0].active.should.be.true;
        tracks[1].active.should.be.false;
        tracks[2].active.should.be.false;
      }
      done();
    });
    config.preload = 'auto';
    player.configure(config);
    video = player._engine.getVideoElement();
    player.load();
  });

  it('should not change the selected for non exist audio track', (done) => {
    player.ready().then(() => {
      if (video.audioTracks) {
        let tracks = player._tracks.filter((track) => {
          return track instanceof AudioTrack;
        });
        video.audioTracks[0].enabled.should.be.true;
        video.audioTracks[1].enabled.should.be.false;
        video.audioTracks[2].enabled.should.be.false;
        tracks[0].active.should.be.true;
        tracks[1].active.should.be.false;
        tracks[2].active.should.be.false;
        player.selectTrack(new AudioTrack({index: 3}));
        video.audioTracks[0].enabled.should.be.true;
        video.audioTracks[1].enabled.should.be.false;
        video.audioTracks[2].enabled.should.be.false;
        tracks[0].active.should.be.true;
        tracks[1].active.should.be.false;
        tracks[2].active.should.be.false;
      }
      done();
    });
    player.load();
    player.configure(config);
    video = player._engine.getVideoElement();
  });
});

describe('selectTrack - text', () => {
  let config, player, video, track1, track2;

  beforeEach(() => {
    config = sourcesConfig.mp4_none_hls_dash;
    player = new Player(config);
    video = player._engine.getVideoElement();
    track1 = document.createElement("track");
    track2 = document.createElement("track");
    track1.kind = 'subtitles';
    track1.label = 'English';
    track1.default = true;
    track2.kind = 'subtitles';
    track2.srclang = 'fr';
    video.appendChild(track1);
    video.appendChild(track2);
  });

  afterEach(() => {
    player.destroy();
  });

  after(() => {
    removeVideoElementsFromTestPage();
  });

  it('should select a new subtitles track', (done) => {
    player.ready().then(() => {
      player.addEventListener(CustomEvents.TEXT_TRACK_CHANGED, (event) => {
        (event.payload.selectedTextTrack instanceof TextTrack).should.be.true;
        event.payload.selectedTextTrack.index.should.equal(1);
        video.textTracks[0].mode.should.be.equal('disabled');
        video.textTracks[1].mode.should.be.equal('showing');
        tracks[0].active.should.be.false;
        tracks[1].active.should.be.true;
        done();
      });
      let tracks = player._tracks.filter((track) => {
        return track instanceof TextTrack;
      });
      video.textTracks[0].mode.should.be.equal('showing');
      video.textTracks[1].mode.should.be.equal('disabled');
      tracks[0].active.should.be.true;
      tracks[1].active.should.be.false;
      player.selectTrack(new TextTrack({index: 1, kind: 'subtitles'}));
    });
    player.load();
  });

  it('should select a new captions track', (done) => {
    player.load();
    player.ready().then(() => {
      player.addEventListener(CustomEvents.TEXT_TRACK_CHANGED, (event) => {
        (event.payload.selectedTextTrack instanceof TextTrack).should.be.true;
        event.payload.selectedTextTrack.index.should.equal(1);
        video.textTracks[0].mode.should.be.equal('disabled');
        video.textTracks[1].mode.should.be.equal('showing');
        tracks[0].active.should.be.false;
        tracks[1].active.should.be.true;
        done();
      });
      let tracks = player._tracks.filter((track) => {
        return track instanceof TextTrack;
      });
      video.textTracks[0].mode.should.be.equal('showing');
      video.textTracks[1].mode.should.be.equal('disabled');
      tracks[0].active.should.be.true;
      tracks[1].active.should.be.false;
      player.selectTrack(new TextTrack({index: 1, kind: 'captions'}));
    });
  });

  it('should not change the selected text track', (done) => {
    player.ready().then(() => {
      let tracks = player._tracks.filter((track) => {
        return track instanceof TextTrack;
      });
      video.textTracks[0].mode.should.be.equal('showing');
      video.textTracks[1].mode.should.be.equal('disabled');
      tracks[0].active.should.be.true;
      tracks[1].active.should.be.false;
      player.selectTrack(new TextTrack({index: 0, kind: 'subtitles'}));
      video.textTracks[0].mode.should.be.equal('showing');
      video.textTracks[1].mode.should.be.equal('disabled');
      tracks[0].active.should.be.true;
      tracks[1].active.should.be.false;
      done();
    });
    player.load();
  });

  it('should not change the selected for non exist text track', (done) => {
    player.load();
    player.ready().then(() => {
      let tracks = player._tracks.filter((track) => {
        return track instanceof TextTrack;
      });
      video.textTracks[0].mode.should.be.equal('showing');
      video.textTracks[1].mode.should.be.equal('disabled');
      tracks[0].active.should.be.true;
      tracks[1].active.should.be.false;
      player.selectTrack(new TextTrack({index: 3, kind: 'subtitles'}));
      video.textTracks[0].mode.should.be.equal('showing');
      video.textTracks[1].mode.should.be.equal('disabled');
      tracks[0].active.should.be.true;
      tracks[1].active.should.be.false;
      done();
    });
  });

  it('should not change the selected for metadata text track', (done) => {
    player.ready().then(() => {
      let tracks = player._tracks.filter((track) => {
        return track instanceof TextTrack;
      });
      video.textTracks[0].mode.should.be.equal('showing');
      video.textTracks[1].mode.should.be.equal('disabled');
      tracks[0].active.should.be.true;
      tracks[1].active.should.be.false;
      player.selectTrack(new TextTrack({index: 1, kind: 'metadata'}));
      video.textTracks[0].mode.should.be.equal('showing');
      video.textTracks[1].mode.should.be.equal('disabled');
      tracks[0].active.should.be.true;
      tracks[1].active.should.be.false;
      done();
    });
    player.load();
  });
});

describe('Track enum', function () {
  after(() => {
    removeVideoElementsFromTestPage();
  });

  it('should return the track enum', () => {
    let config = sourcesConfig.mp4_none_hls_dash;
    let player = new Player(config);
    player.Track.VIDEO.should.be.equal('video');
    player.Track.AUDIO.should.be.equal('audio');
    player.Track.TEXT.should.be.equal('text');
  });
});

describe('events', () => {
  describe('tracks changed', () => {
    let config, player, video, track1, track2;

    beforeEach(() => {
      config = sourcesConfig.mp4_none_hls_dash;
      player = new Player(config);
      video = player._engine.getVideoElement();
      track1 = document.createElement("track");
      track2 = document.createElement("track");
      track1.kind = 'subtitles';
      track1.label = 'English';
      track1.default = true;
      track2.kind = 'subtitles';
      track2.srclang = 'fr';
      video.appendChild(track1);
      video.appendChild(track2);
    });

    afterEach(() => {
      player.destroy();
    });

    after(() => {
      removeVideoElementsFromTestPage();
    });
    it('should fire tracks changed', function (done) {
      player.load();
      player.addEventListener(CustomEvents.TRACKS_CHANGED, (data) => {
        let videoTracksLength = (video.videoTracks ? video.videoTracks.length : 0);
        let audioTracksLength = (video.audioTracks ? video.audioTracks.length : 0);
        let textTracksLength = (video.textTracks ? video.textTracks.length : 0);
        let totalTracksLength = videoTracksLength + audioTracksLength + textTracksLength;
        data.payload.tracks.length.should.be.equal(totalTracksLength);
        done();
      });
    });
  });

  describe('firstPlay', () => {
    let config;
    let player;

    beforeEach(() => {
      config = sourcesConfig.mp4_none_hls_dash;
      player = new Player(config);
    });

    afterEach(() => {
      player.destroy();
    });

    after(() => {
      removeVideoElementsFromTestPage();
    });

    it('should fire first play only once', (done) => {
      let counter = 0;
      let onPlaying = () => {
        player.removeEventListener(Html5Events.PLAYING, onPlaying);
        player.pause();
        player.play();
        setTimeout(() => {
          counter.should.equal(1);
          done();
        }, 0);
      };
      player.addEventListener(CustomEvents.FIRST_PLAY, () => {
        counter++;
      });
      player.addEventListener(Html5Events.PLAYING, onPlaying);
      player.play();
    });
  });
});
