import { Component, OnInit } from '@angular/core';
import { NgxMorseService } from '../../projects/ngx-morse/src/lib/ngx-morse.service'

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

  }

  encode(){
    this.morse.encode();
  }

  decode(){
    this.morse.decode();
  }

}
