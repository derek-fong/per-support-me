import { NgModule } from '@angular/core';

import { NavbarComponent } from './navbar/navbar.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [SharedModule],
  declarations: [
    NavbarComponent,
    SideNavComponent
  ],
  exports: [
    NavbarComponent,
    SideNavComponent
  ]
})
export class CoreModule { }
