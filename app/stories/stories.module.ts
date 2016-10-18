import { NgModule } from '@angular/core';

import { StoriesComponent } from './stories.component';
import { StoriesRoutingModule } from './stories-routing.module';
import { StoryService } from './shared/story.service';
import { StoryListComponent } from './story-list/story-list.component';

@NgModule({
  imports: [StoriesRoutingModule],
  declarations: [StoriesComponent, StoryListComponent],
  providers: [StoryService]
})
export class StoriesModule {}
