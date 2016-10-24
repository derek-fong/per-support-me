import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

import { Story } from '../shared/story.model';
import { StoryService } from '../shared/story.service';

@Component({
  selector: 'tk-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.scss']
})
export class StoryListComponent implements OnInit {
  private keyword: string = 'ccc';  // REVIEW: Change keyword.
  private matchedPublicStories: FirebaseListObservable<Story[]>;
  private publicStories: FirebaseListObservable<Story[]>;
  private publicStory: FirebaseObjectObservable<Story>;
  private privateStories: FirebaseListObservable<Story[]>;

  constructor(private storyService: StoryService) { }

  ngOnInit() {
    this.publicStories = this.storyService.getPublicStories();
    this.publicStory = this.storyService.getPublicStory(this.keyword);
    this.matchedPublicStories = this.storyService.findPublicStories(this.keyword);

    this.privateStories = this.storyService.getPrivateStories();
  }

  onAddPrivateStory(): void {

    // Create random story.
    this.storyService.addPrivateStory({
      id: Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5),
      title: Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5),
      content: Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5)
    });
  }
}
