import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

import { Story } from '../shared/story.model';
import { StoryService } from '../shared/story.service';

@Component({
  selector: 'tk-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.css']
})
export class StoryListComponent implements OnInit {
  private keyword: string = 'ccc';  // REVIEW: Change keyword.
  private matchedStories: FirebaseListObservable<Story[]>;
  private stories: FirebaseListObservable<Story[]>;
  private story: FirebaseObjectObservable<Story>;

  constructor(private storyService: StoryService) { }

  ngOnInit() {
    this.storyService.initStories();

    this.stories = this.storyService.getStories();
    this.story = this.storyService.getStory(this.keyword);
    this.matchedStories = this.storyService.findStories(this.keyword);
  }
}
