import { Pipe, PipeTransform, inject } from '@angular/core';
import { NgxMorseService } from './ngx-morse.service';

@Pipe({
  name: 'morseEncode',
  standalone: true
})
export class MorseEncodePipe implements PipeTransform {
  private readonly morse = inject(NgxMorseService);

  transform(value: string | null | undefined): string {
    if (!value) {
      return '';
    }
    return this.morse.encode(value);
  }
}
