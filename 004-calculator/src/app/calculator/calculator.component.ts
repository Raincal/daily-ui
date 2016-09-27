import { Component, OnInit } from '@angular/core';

import { BUTTONS } from './buttons';

type Button = {
  label: string;
  value: string;
  size?: string;
}

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  buttons: Button[] = BUTTONS;
  operations: string[] = [];
  result: string = '';
  display: string = '';

  constructor() { }

  ngOnInit() {
  }

  reset(): void {
    this.result = '';
    this.display = '';
    this.operations = [];
  }

  calculateOperations(): void {
    this.operations.map((operation, i) => {
      this.result += operation;
    });
    this.operations = [];
    this.display = String(eval(this.result));
  }

  handleClick(btnValue): void {
    let value = btnValue;
    switch (value) {
      case 'clear':
        this.reset();
        break;
      case 'equal':
        if (this.operations.length > 2) {
          this.calculateOperations();
        }
        break;
      default:
        if (this.result) {
          this.reset();
          this.display += value;
          this.operations.push(value);
        } else {
          this.display += value;
          this.operations.push(value);
        }
        break;
    }
  }

}
