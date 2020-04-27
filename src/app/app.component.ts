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

    console.log(this.morse.encode('GEEKS-FOR-GEEKS'))
    console.log(this.morse.decode(this.morse.encode('GEEKS-FOR-GEEKS')))

  }

  encode(){
    this.encodeOutput = this.morse.encode(this.encodeInput);
  }

  decode(){
    this.decodeOutput = this.morse.decode(this.decodeInput);
  }

}
