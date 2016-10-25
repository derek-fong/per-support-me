import { Component, Input } from '@angular/core';

import { Story } from '../shared/story.model';

@Component({
  selector: 'tk-story-detail',
  templateUrl: './story-detail.component.html',
  styleUrls: ['./story-detail.component.scss']
})
export class StoryDetailComponent {
  @Input() story: Story;
  @Input() elementID: string;

  constructor() { }
}
