import { NgModule } from '@angular/core';

import {
  MatToolbarModule,
  MatButtonModule,
  MatTooltipModule,
  MatRadioModule,
  MatFormFieldModule,
  MatInputModule,
} from '@angular/material';

@NgModule({
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatTooltipModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatTooltipModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
  ]
})

export class MaterialModule {}