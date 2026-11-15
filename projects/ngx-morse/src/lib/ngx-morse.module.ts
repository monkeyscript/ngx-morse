import { NgModule } from '@angular/core';
import { MorseEncodePipe } from './morse-encode.pipe';
import { MorseDecodePipe } from './morse-decode.pipe';

@NgModule({
  imports: [MorseEncodePipe, MorseDecodePipe],
  exports: [MorseEncodePipe, MorseDecodePipe]
})
export class NgxMorseModule {}
