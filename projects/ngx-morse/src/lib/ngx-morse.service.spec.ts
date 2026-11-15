import { TestBed } from '@angular/core/testing';
import { InvalidInputError } from './exceptions/invalid-input';
import { NgxMorseService } from './ngx-morse.service';

describe('NgxMorseService', () => {
  let ngxMorseService: NgxMorseService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxMorseService]
    });

    ngxMorseService = TestBed.inject(NgxMorseService);
  });

  it('encoding method should exist', () => {
    expect(ngxMorseService.encode).toBeTruthy();
  });

  it('decoding method should exist', () => {
    expect(ngxMorseService.decode).toBeTruthy();
  });

  // Encode tests
  it('encode: should skip encoding an empty string', () => {
    const emptyString = '';
    expect(ngxMorseService.encode(emptyString)).toBe(emptyString);
  });

  it('encode: should encode same irrespective of lowercase or uppercase', () => {
    const upperCaseMessage = 'CASE';
    const lowerCaseMessage = upperCaseMessage.toLowerCase();
    const expectedResult = '-.-. .- ... . ';

    expect(ngxMorseService.encode(upperCaseMessage)).toBe(expectedResult);
    expect(ngxMorseService.encode(lowerCaseMessage)).toBe(expectedResult);
  });

  it('encode: should encode message made up of valid input', () => {
    const message = 'Keep the dream alive';
    expect(ngxMorseService.encode(message)).toBe('-.- . . .--. / - .... . / -.. .-. . .- -- / .- .-.. .. ...- . ');
  });

  it('encode: throw InvalidInputError when encounters invalid input', () => {
    const message = 'Keep the dream alive\t\t\t';
    expect(() => {
      ngxMorseService.encode(message);
    }).toThrow(new InvalidInputError(InvalidInputError.INVALID_INPUT));
  });

  // Decode tests
  it('decode: should throw when empty string is passed to decode', () => {
    const emptyString = '';
    expect(() => {
      ngxMorseService.decode(emptyString);
    }).toThrow(new InvalidInputError(InvalidInputError.INVALID_MORSE_INPUT));
  });

  it('decode: should decode morse code generated from valid input', () => {
    const encodedMessage = '-.- . . .--. / - .... . / -.. .-. . .- -- / .- .-.. .. ...- . ';
    const expectedMessageResult = 'Keep the dream alive'.toLowerCase();
    expect(ngxMorseService.decode(encodedMessage).trim()).toBe(expectedMessageResult);
  });

  it('decode: should throw DecodeError when message made up of invalid input', () => {
    const corruptedMorseCode = '-\n.\t- . . .--. / - .... . / -.. .-. . .- -- / .- .-.. .. ...- . ';

    expect(() => {
      ngxMorseService.decode(corruptedMorseCode);
    }).toThrow(new InvalidInputError(InvalidInputError.INVALID_MORSE_INPUT));
  });
});
