import { TestBed } from '@angular/core/testing';
import { NgxMorseService } from './ngx-morse.service';
import { NgxMorseAudioService } from './ngx-morse-audio.service';

describe('NgxMorseAudioService', () => {
  let audioService: NgxMorseAudioService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxMorseService, NgxMorseAudioService]
    });
    audioService = TestBed.inject(NgxMorseAudioService);
  });

  afterEach(() => {
    audioService.stop();
  });

  it('should be created', () => {
    expect(audioService).toBeTruthy();
  });

  it('isPlaying should be false initially', () => {
    expect(audioService.isPlaying).toBeFalse();
  });

  it('play() should resolve immediately for empty input', async () => {
    await audioService.play('');
    expect(audioService.isPlaying).toBeFalse();
  });

  it('play() and stop() should handle playback lifecycle', async () => {
    // If AudioContext is available in browser test environment
    const playPromise = audioService.play('SOS', { wpm: 30 });
    expect(audioService.isPlaying).toBeTrue();

    audioService.stop();
    expect(audioService.isPlaying).toBeFalse();
    await playPromise;
  });

  it('play() should accept Morse code directly', async () => {
    const playPromise = audioService.play('... --- ...', { wpm: 40 });
    expect(audioService.isPlaying).toBeTrue();

    audioService.stop();
    expect(audioService.isPlaying).toBeFalse();
    await playPromise;
  });
});
