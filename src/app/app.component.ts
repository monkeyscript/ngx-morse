import { Component, OnInit } from '@angular/core';
import { NgxMorseService } from 'ngx-morse'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ngx-morse-ws';

  encodeInput : string;
  decodeInput : string;

  encodeOutput : string;
  decodeOutput : string;

  constructor(
    private morse : NgxMorseService
  ) {}

  ngOnInit() {

    // Init variables 
    this.encodeInput = '';
    this.decodeInput = '';
    this.encodeOutput = '';
    this.decodeOutput = '';

    console.log(this.morse.encode('Hello world!'))
    console.log(this.morse.decode(this.morse.encode('Hello world!')))

  }

  encode(){
    this.encodeOutput = this.morse.encode(this.encodeInput);
  }

  decode(){
    this.decodeOutput = this.morse.decode(this.decodeInput);
  }

}
