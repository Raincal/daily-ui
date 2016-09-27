import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculatorComponent } from './calculator.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CalculatorComponent],
  exports: [CalculatorComponent],
  providers: []
})
export class CalculatorModule { }
