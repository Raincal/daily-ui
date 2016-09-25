import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent implements OnInit {
  selectedMonth: string = 'January';
  selectedYear: number = 2016;
  models = [
    {
      name: 'name',
      label: 'Name on credit card',
      type: 'text',
      placeholder: 'Raincal'
    },
    {
      name: 'card',
      label: 'Credit card number',
      type: 'number',
      placeholder: '0000 0000 0000 0000'
    }
  ];
  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  years: number[] = [2016, 2017, 2018, 2019, 2020, 2021, 2022];

  constructor() { }

  ngOnInit() {
  }

  handleMonthChange(newValue) {
    this.selectedMonth = newValue;
  }

  handleYearChange(newValue) {
    this.selectedYear = newValue;
  }

  onSubmit(f: NgForm) {
    console.log(f.value);
  }

}
