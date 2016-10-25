import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoriesComponent } from './stories.component';
import { StoriesRoutingModule } from './stories-routing.module';
import { StoryService } from './shared/story.service';
import { StoryCardComponent } from './story-card/story-card.component';
import { StoryDetailComponent } from './story-detail/story-detail.component';
import { StoryListComponent } from './story-list/story-list.component';
import { MaterializeDirective } from 'angular2-materialize';

@NgModule({
  imports: [
    CommonModule,
    StoriesRoutingModule
  ],
  declarations: [
    MaterializeDirective,
    StoriesComponent,
    StoryCardComponent,
    StoryDetailComponent,
    StoryListComponent
  ],
  providers: [StoryService]
})
export class StoriesModule { }
