import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';

import { Story } from '../shared/story.model';
import { StoryService } from '../shared/story.service';
import { FilterService } from '../../core/shared/filter.service';

@Component({
  selector: 'tk-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.scss']
})
export class StoryListComponent implements OnInit, OnDestroy {
  private publicStories: Observable<Story[]>;
  private tagsSub: Subscription;

  constructor(private filterService: FilterService,
              private storyService: StoryService) { }

  ngOnInit() {
    this.filterService.setContentType('stories');
    this.publicStories = this.storyService.getFilteredStories$();

    // REVIEW: Debug only
    this.tagsSub = this.filterService.tags$.subscribe((res: string[]) => {
      console.log(res);
    });
  }

  ngOnDestroy(): void {
    if (this.tagsSub) {
      this.tagsSub.unsubscribe();
    }
  }
}
