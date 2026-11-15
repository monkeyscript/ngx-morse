import { Injectable } from '@angular/core';
import { Dictionary } from './dictionary';
import { InvalidInputError } from './exceptions/invalid-input';

// Build inverted dictionary in key order for O(1) Morse -> char lookups
const reverseDictionary: Record<string, string> = {};
for (const key of Object.keys(Dictionary)) {
  const morseVal = Dictionary[key];
  if (!(morseVal in reverseDictionary)) {
    reverseDictionary[morseVal] = key;
  }
}

@Injectable({
  providedIn: 'root'
})
export class NgxMorseService {
  /**
   * Encodes a plain text string into Morse code.
   * Characters are separated by a single space.
   *
   * @param message The input string to encode.
   * @returns The encoded Morse code string.
   * @throws InvalidInputError if an unsupported character is encountered.
   */
  encode(message: string): string {
    if (!message) {
      return '';
    }

    let cipher = '';
    for (const letter of message) {
      const lower = letter.toLowerCase();
      if (!(lower in Dictionary)) {
        throw new InvalidInputError(InvalidInputError.INVALID_INPUT);
      }
      cipher += Dictionary[lower] + ' ';
    }

    return cipher;
  }

  /**
   * Decodes a Morse code string back into plain text.
   *
   * @param message The Morse code string to decode.
   * @returns The decoded plain text string.
   * @throws InvalidInputError if invalid or corrupted Morse code is encountered.
   */
  decode(message: string): string {
    const formattedMessage = message + ' ';
    let decipher = '';
    let citext = '';
    let spaceCount = 0;

    for (const letter of formattedMessage) {
      if (letter !== ' ') {
        spaceCount = 0;
        citext += letter;
      } else {
        spaceCount += 1;
        if (spaceCount === 2) {
          decipher += ' ';
        } else {
          const char = reverseDictionary[citext];
          if (!char) {
            throw new InvalidInputError(InvalidInputError.INVALID_MORSE_INPUT);
          }
          decipher += char;
          citext = '';
        }
      }
    }

    return decipher;
  }
}
