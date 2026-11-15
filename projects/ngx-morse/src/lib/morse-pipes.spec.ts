import { TestBed } from '@angular/core/testing';
import { NgxMorseService } from './ngx-morse.service';
import { MorseEncodePipe } from './morse-encode.pipe';
import { MorseDecodePipe } from './morse-decode.pipe';

describe('Morse Pipes', () => {
  let encodePipe: MorseEncodePipe;
  let decodePipe: MorseDecodePipe;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxMorseService, MorseEncodePipe, MorseDecodePipe]
    });
    encodePipe = TestBed.inject(MorseEncodePipe);
    decodePipe = TestBed.inject(MorseDecodePipe);
  });

  it('MorseEncodePipe: should encode text to morse', () => {
    expect(encodePipe.transform('SOS')).toBe('... --- ... ');
    expect(encodePipe.transform('')).toBe('');
    expect(encodePipe.transform(null)).toBe('');
  });

  it('MorseDecodePipe: should decode morse to text', () => {
    expect(decodePipe.transform('... --- ... ').trim()).toBe('sos');
    expect(decodePipe.transform('')).toBe('');
    expect(decodePipe.transform(null)).toBe('');
  });
});
