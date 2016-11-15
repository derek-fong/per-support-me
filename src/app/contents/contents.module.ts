import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { ContentsRoutingModule } from './contents-routing.module';
import { ContentsComponent } from './contents.component';
import { ContentCreationComponent } from './content-creation/content-creation.component';
import { SharedModule } from '../shared/shared.module';
import { ContentTypeSelectionComponent } from './content-type-selection/content-type-selection.component';
import { ContentServiceProviderComponent } from './content-service-provider/content-service-provider.component';
import { ContentStoryComponent } from './content-story/content-story.component';
import { ContentService } from './shared/content.service';

@NgModule({
  imports: [
    ContentsRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [
    ContentsComponent,
    ContentCreationComponent,
    ContentTypeSelectionComponent,
    ContentServiceProviderComponent,
    ContentStoryComponent
  ],
  providers: [ContentService]
})
export class ContentsModule { }
