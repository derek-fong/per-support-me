import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NavbarComponent } from './navbar/navbar.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { FilterService } from './shared/filter.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    FormsModule,
    SharedModule
  ],
  declarations: [
    NavbarComponent,
    SideNavComponent
  ],
  providers: [
    FilterService
  ],
  exports: [
    NavbarComponent,
    SideNavComponent
  ]
})
export class CoreModule { }
