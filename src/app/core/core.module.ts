import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NavbarComponent } from './navbar/navbar.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { FilterService } from './shared/filter.service';
import { TagService } from './tags/shared/tag.service';
import { TagListComponent } from './tags/tag-list/tag-list.component';
import { SharedModule } from '../shared/shared.module';
import { TagCollectionComponent } from './tags/tag-collection/tag-collection.component';

@NgModule({
  imports: [
    FormsModule,
    SharedModule
  ],
  declarations: [
    NavbarComponent,
    SideNavComponent,
    TagListComponent,
    TagCollectionComponent
  ],
  providers: [
    FilterService,
    TagService
  ],
  exports: [
    NavbarComponent,
    SideNavComponent
  ]
})
export class CoreModule { }
