import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { NgxMorseService } from '../../projects/ngx-morse/src/lib/ngx-morse.service';

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
import { NgxMorseService } from 'ngx-morse';

@Component({...})
export class YourComponent {
  private morse = inject(NgxMorseService);

  encode() {
    const encoded = this.morse.encode('hello world!');
    // .... . .-.. .-.. --- / .-- --- .-. .-.. -.. -.-.--
  }

  decode() {
    const decoded = this.morse.decode('.... . .-.. .-.. --- / .-- --- .-. .-.. -.. -.-.--');
    // hello world!
  }
}`
  };

  private morse = inject(NgxMorseService);

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

  reset() {
    this.encodeInput = '';
    this.encodeOutput = '';
    this.decodeInput = '';
    this.decodeOutput = '';
  }
}
