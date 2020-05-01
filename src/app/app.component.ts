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
