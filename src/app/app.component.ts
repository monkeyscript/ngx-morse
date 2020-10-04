import { Component, OnInit } from '@angular/core';
import { NgxMorseService } from 'ngx-morse'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ngx-morse-ws';

  mode : string;

  encodeInput : string;
  decodeInput : string;

  encodeOutput : string;
  decodeOutput : string;

  code : {
    installation : string,
    usage : string
  };

  constructor(
    private morse : NgxMorseService
  ) {}

  ngOnInit() {

    // Init variables
    this.mode = 'ENCODER';
    this.encodeInput = '';
    this.decodeInput = '';
    this.encodeOutput = '';
    this.decodeOutput = '';

    this.code = {
      installation : 'npm i ngx-morse',
      usage : `import { NgxMorseService } from 'ngx-morse';

@Component({...})

export class YourComponent {

    constructor(private morse: NgxMorseService) {}

    encode() {
        let encoded = this.morse.encode('hello world!');
        // .... . .-.. .-.. --- / .-- --- .-. .-.. -.. -.-.--
    }

    decode() {
        let decoded = this.morse.decode('.... . .-.. .-.. --- / .-- --- .-. .-.. -.. -.-.--');
        // hello world!
    }

}`
    }

  }

  encode(){
    this.encodeOutput = '';
    this.encodeOutput = this.morse.encode(this.encodeInput);
  }

  decode(){
    this.decodeOutput = '';
    this.decodeOutput = this.morse.decode(this.decodeInput);
  }

  reset(){
    this.encodeInput = '';
    this.encodeOutput = '';
    this.decodeInput = '';
    this.decodeOutput = '';
  }

}
