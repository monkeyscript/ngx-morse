import { Injectable, inject } from '@angular/core';
import { NgxMorseService } from './ngx-morse.service';

export interface MorseAudioOptions {
  /** Words per minute (standard PARIS standard, default: 20) */
  wpm?: number;
  /** Tone frequency in Hz (default: 600 Hz) */
  frequency?: number;
  /** Volume gain between 0 and 1 (default: 0.5) */
  volume?: number;
}

@Injectable({
  providedIn: 'root'
})
export class NgxMorseAudioService {
  private readonly morse = inject(NgxMorseService);

  private audioCtx: AudioContext | null = null;
  private currentOscillator: OscillatorNode | null = null;
  private currentGain: GainNode | null = null;
  private playbackResolve: (() => void) | null = null;
  private playbackTimeout: any = null;
  private playing = false;

  /** Whether Morse code audio is currently playing */
  get isPlaying(): boolean {
    return this.playing;
  }

  /**
   * Plays a plain text string or Morse code sequence audibly using Web Audio.
   *
   * @param input Plain text or Morse code string.
   * @param options Audio configuration (wpm, frequency, volume).
   * @returns Promise that resolves when playback completes.
   */
  async play(input: string, options?: MorseAudioOptions): Promise<void> {
    if (!input || typeof window === 'undefined') {
      return;
    }

    this.stop();

    const wpm = Math.max(5, Math.min(60, options?.wpm ?? 20));
    const frequency = Math.max(200, Math.min(2000, options?.frequency ?? 600));
    const volume = Math.max(0, Math.min(1, options?.volume ?? 0.5));

    // Convert input to Morse code if it contains plain text characters
    const morseCode = /^[.\-/ ]+$/.test(input) ? input : this.morse.encode(input);

    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContextClass) {
      return;
    }

    this.playing = true;

    try {
      this.audioCtx = new AudioContextClass();
      if (this.audioCtx.state === 'suspended') {
        await this.audioCtx.resume();
      }
    } catch {
      this.cleanup();
      return;
    }

    // If stop() was called during async resume, abort cleanly
    if (!this.playing || !this.audioCtx) {
      this.cleanup();
      return;
    }

    try {
      const dotDuration = 1.2 / wpm; // Duration of one dot in seconds (standard PARIS)
      const rampTime = 0.003; // 3ms smooth attack/decay to eliminate audio clicks

      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(frequency, this.audioCtx.currentTime);
      gain.gain.setValueAtTime(0, this.audioCtx.currentTime);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      osc.start();

      this.currentOscillator = osc;
      this.currentGain = gain;

      let time = this.audioCtx.currentTime + 0.05;

      for (let i = 0; i < morseCode.length; i++) {
        const char = morseCode[i];

        if (char === '.') {
          gain.gain.setValueAtTime(0, time);
          gain.gain.linearRampToValueAtTime(volume, time + rampTime);
          time += dotDuration;
          gain.gain.setValueAtTime(volume, time - rampTime);
          gain.gain.linearRampToValueAtTime(0, time);
          time += dotDuration;
        } else if (char === '-') {
          gain.gain.setValueAtTime(0, time);
          gain.gain.linearRampToValueAtTime(volume, time + rampTime);
          time += dotDuration * 3;
          gain.gain.setValueAtTime(volume, time - rampTime);
          gain.gain.linearRampToValueAtTime(0, time);
          time += dotDuration;
        } else if (char === ' ') {
          time += dotDuration * 2;
        } else if (char === '/') {
          time += dotDuration * 6;
        }
      }

      return new Promise<void>((resolve) => {
        this.playbackResolve = resolve;
        const totalDurationMs = Math.max(0, (time - this.audioCtx!.currentTime) * 1000);

        this.playbackTimeout = setTimeout(() => {
          this.cleanup();
          resolve();
        }, totalDurationMs);
      });
    } catch {
      this.cleanup();
    }
  }

  /**
   * Immediately stops any active audio playback.
   */
  stop(): void {
    if (this.playbackTimeout) {
      clearTimeout(this.playbackTimeout);
      this.playbackTimeout = null;
    }
    this.cleanup();
    if (this.playbackResolve) {
      this.playbackResolve();
      this.playbackResolve = null;
    }
  }

  private cleanup(): void {
    this.playing = false;
    if (this.currentOscillator) {
      try {
        this.currentOscillator.stop();
        this.currentOscillator.disconnect();
      } catch {}
      this.currentOscillator = null;
    }
    if (this.currentGain) {
      try {
        this.currentGain.disconnect();
      } catch {}
      this.currentGain = null;
    }
    if (this.audioCtx) {
      try {
        if (this.audioCtx.state !== 'closed') {
          this.audioCtx.close();
        }
      } catch {}
      this.audioCtx = null;
    }
  }
}
