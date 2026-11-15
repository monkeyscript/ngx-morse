import { Pipe, PipeTransform, inject } from '@angular/core';
import { NgxMorseService } from './ngx-morse.service';

@Pipe({
  name: 'morseDecode',
  standalone: true
})
export class MorseDecodePipe implements PipeTransform {
  private readonly morse = inject(NgxMorseService);

  transform(value: string | null | undefined): string {
    if (!value) {
      return '';
    }
    return this.morse.decode(value);
  }
}
