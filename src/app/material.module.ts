import { NgModule } from '@angular/core';

import {
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatTooltipModule,
  MatRadioModule,
  MatFormFieldModule,
  MatInputModule,
} from '@angular/material';

@NgModule({
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
  ]
})

export class MaterialModule {}