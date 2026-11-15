import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { NgxMorseService } from '../../projects/ngx-morse/src/lib/ngx-morse.service';
import { NgxMorseAudioService } from '../../projects/ngx-morse/src/lib/ngx-morse-audio.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, MaterialModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ngx-morse-ws';

  mode = 'ENCODER';

  encodeInput = '';
  decodeInput = '';

  encodeOutput = '';
  decodeOutput = '';

  code = {
    installation: 'npm i ngx-morse',
    usage: `import { Component, inject } from '@angular/core';
import { NgxMorseService, NgxMorseAudioService } from 'ngx-morse';

@Component({...})
export class YourComponent {
  private morse = inject(NgxMorseService);
  private audio = inject(NgxMorseAudioService);

  encode() {
    const encoded = this.morse.encode('hello world!');
    // .... . .-.. .-.. --- / .-- --- .-. .-.. -.. -.-.--
  }

  playAudio() {
    // Play Morse audio directly using the Web Audio API (tree-shakable)
    this.audio.play('hello world!', { wpm: 20, frequency: 600 });
  }

  stopAudio() {
    this.audio.stop();
  }
}`
  };

  private morse = inject(NgxMorseService);
  private audio = inject(NgxMorseAudioService);

  get isAudioPlaying(): boolean {
    return this.audio.isPlaying;
  }

  ngOnInit() {
    this.reset();
  }

  encode() {
    try {
      this.encodeOutput = this.morse.encode(this.encodeInput);
    } catch {
      this.encodeOutput = 'Error: Invalid input character';
    }
  }

  decode() {
    try {
      this.decodeOutput = this.morse.decode(this.decodeInput);
    } catch {
      this.decodeOutput = 'Error: Invalid Morse code';
    }
  }

  playMorseAudio() {
    const textToPlay = this.mode === 'ENCODER' ? this.encodeOutput : this.decodeInput;
    if (textToPlay) {
      this.audio.play(textToPlay);
    }
  }

  stopMorseAudio() {
    this.audio.stop();
  }

  reset() {
    this.stopMorseAudio();
    this.encodeInput = '';
    this.encodeOutput = '';
    this.decodeInput = '';
    this.decodeOutput = '';
  }
}
