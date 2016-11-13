import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';

import { ContentsComponent } from './contents.component';
import { ContentCreationComponent } from './content-creation/content-creation.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'contents',
        component: ContentsComponent,
        children: [
          {
            path: 'create',
            component: ContentCreationComponent
          }
        ]
      }
    ])
  ],
  exports: [RouterModule]
})
export class ContentsRoutingModule { }
