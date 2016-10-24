import { NgModule } from '@angular/core';

import { NavbarComponent } from './navbar/navbar.component';
import { NavbarModule } from './navbar/navbar.module';

@NgModule({
  imports: [NavbarModule],
  exports: [NavbarComponent]
})
export class SharedModule { }
