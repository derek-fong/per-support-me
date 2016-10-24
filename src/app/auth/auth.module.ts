import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthComponent } from './auth.component';
import { AuthService } from './shared/auth.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AuthComponent],
  providers: [AuthService]
})
export class AuthModule { }
