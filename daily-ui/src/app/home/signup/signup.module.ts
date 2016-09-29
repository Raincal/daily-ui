import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';
import { signupRouting } from './signup.routing';

@NgModule({
  imports: [
    CommonModule,
    signupRouting
  ],
  declarations: [SignupComponent]
})
export class SignupModule {
}
