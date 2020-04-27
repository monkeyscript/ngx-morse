import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NgxMorseService {

  constructor() { }

  //
  // Encode function : string to morse
  //
  encode() {
    console.log('encode');
  }

  //
  // Decode function : morse to string
  //
  decode() {
    console.log('decode');
  }

}
