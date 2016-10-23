import { Component, OnInit } from '@angular/core';

import { StoryService } from '../shared/story.service';

@Component({
  selector: 'tk-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.css']
})
export class StoryListComponent implements OnInit {

  constructor(private storyService: StoryService) { }

  ngOnInit() {
  }
}
