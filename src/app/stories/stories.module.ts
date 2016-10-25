import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoriesComponent } from './stories.component';
import { StoriesRoutingModule } from './stories-routing.module';
import { StoryService } from './shared/story.service';
import { StoryCardComponent } from './story-card/story-card.component';
import { StoryListComponent } from './story-list/story-list.component';

@NgModule({
  imports: [
    CommonModule,
    StoriesRoutingModule
  ],
  declarations: [
    StoriesComponent,
    StoryCardComponent,
    StoryListComponent
  ],
  providers: [StoryService]
})
export class StoriesModule { }
