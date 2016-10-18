import { Component, OnInit } from '@angular/core';

import { StoryService } from '../shared/story.service';

@Component({
  selector: 'sm-story-list',
  template: `
    <Label [text]="'Story List Component'"></Label>
  `
})
export class StoryListComponent implements OnInit {
  stories: string[];

  constructor(private storyService: StoryService) {}

  ngOnInit(): void {
    this.stories = this.storyService.getStories();
  }
}
