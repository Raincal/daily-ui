import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnChanges {
  @Input('state') state;
  @Input('duration') duration;

  initialTotal: number;
  discount: number;
  subTotal: number;
  tax: number;
  total: number;

  constructor() {
  }

  ngOnChanges() {
    this.duration = this.duration || this.state.duration;
    this.initialTotal = this.state.price * (this.duration);
    this.discount = Math.floor((this.initialTotal / 100) * this.state.discount);
    this.subTotal = this.initialTotal - this.discount;
    this.tax = Math.floor((this.subTotal / 100) * this.state.tax);
    this.total = this.subTotal + this.tax;
  }

}
