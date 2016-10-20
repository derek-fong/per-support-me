import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { Story } from '../shared/story.model';
import { StoryService } from '../shared/story.service';

@Component({
  selector: 'sm-story-list',
  styleUrls: ['stories/story-list/story-list.component.css'],
  templateUrl: 'stories/story-list/story-list.component.html'
})
export class StoryListComponent implements OnInit {
  stories$: Observable<Story[]>;

  constructor(private storyService: StoryService) {}

  ngOnInit(): void {
    this.stories$ = this.storyService.getStories$();
  }
}
