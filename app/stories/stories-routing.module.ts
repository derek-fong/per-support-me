import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { StoriesComponent } from './stories.component';
import { StoryListComponent } from './story-list/story-list.component';

@NgModule({
  imports: [
    NativeScriptRouterModule.forChild([
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
  exports: [NativeScriptRouterModule]
})
export class StoriesRoutingModule {}
