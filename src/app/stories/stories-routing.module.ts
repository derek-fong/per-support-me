import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { StoriesComponent } from './stories.component';
import { StoryListComponent } from './story-list/story-list.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'stories',
        component: StoriesComponent,
        children: [
          {
            path: '',
            component: StoryListComponent
          }
        ]
      }
    ])
  ],
  exports: [RouterModule]
})
export class StoriesRoutingModule { }
