import {
  Component,
  OnChanges,
  Input
} from '@angular/core';

import { Story } from '../shared/story.model';

@Component({
  selector: 'tk-story-card',
  templateUrl: './story-card.component.html',
  styleUrls: ['./story-card.component.scss']
})
export class StoryCardComponent implements OnChanges {
  @Input() story: Story;
  private storyDetailElementID: string;

  constructor() { }

  ngOnChanges(): void {
    if (this.story && Object.prototype.hasOwnProperty.call(this.story, 'id')) {
      this.storyDetailElementID = `story-${this.story.id}`;
    }
  }
}
