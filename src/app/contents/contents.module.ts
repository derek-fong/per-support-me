import { NgModule } from '@angular/core';


import { ContentsRoutingModule } from './contents-routing.module';
import { ContentsComponent } from './contents.component';
import { ContentCreationComponent } from './content-creation/content-creation.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    ContentsRoutingModule,
    SharedModule
  ],
  declarations: [
    ContentsComponent,
    ContentCreationComponent
  ]
})
export class ContentsModule { }
