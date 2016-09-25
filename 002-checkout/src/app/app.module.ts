import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ImagePreviewComponent } from './image-preview/image-preview.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PaymentFormComponent } from './payment-form/payment-form.component';
import { PluralizePipe } from './pluralize.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ImagePreviewComponent,
    CheckoutComponent,
    PaymentFormComponent,
    PluralizePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
