import { Component, Input } from '@angular/core';

import { Story } from '../shared/story.model';

@Component({
  selector: 'sm-story-card',
  templateUrl: 'stories/story-card/story-card.component.html'
})
export class StoryCardComponent {
  @Input() story: Story;

  constructor() {
    console.log(this.story.title);
  }
}
