import { Injectable } from '@angular/core';
import { Dictionary } from './dictionary';

@Injectable({
  providedIn: 'root'
})
export class NgxMorseService {

  constructor() { }

  //
  // Encoding : text to morse
  //
  encode(message : string) :string {

    let cipher : string = '';

    for(let letter of message){
      
      // Looks up the dictionary and adds the correspponding morse code 
      // along with a space to separate morse codes for different characters
      cipher += Dictionary[letter.toLowerCase()];
      
      // if(letter!=' ') {
      //   console.log(letter,Dictionary[letter.toLowerCase()])
      // } else {
      //   // 1 space indicates different characters and 2 indicates different words
      //   cipher += ' ';
      // }

      cipher += ' ';

    }

    return cipher;

  }

  //
  // Decoding : morse to text
  //
  decode(message : string) :string {

    // Extra space added at the end to access the last morse code 
    message += ' ';
  
    let decipher : string = ''; 
    let citext : string = '';
    
    for(let letter of message) {

      // Check for space 
      if(letter!=' ') {

        // Counter to keep track of space 
        var i = 0;
      
        // Storing morse code of a single character 
        citext += letter; 

      } else {

        // If i = 1 that indicates a new character 
        i += 1;
      
        // If i = 2 that indicates a new word 
        if (i==2) {
          // Adding space to separate words 
          decipher += ' '
        } else {
          // Accessing the keys using their values 
          decipher += Object.keys(Dictionary).find(key => Dictionary[key] === citext);
          citext = ''; 
        }
      
      }

    }
  
    return decipher;
  }

}
