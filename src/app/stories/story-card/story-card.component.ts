import {
  Component,
  Input,
  OnInit
} from '@angular/core';

import { Story } from '../shared/story.model';

@Component({
  selector: 'tk-story-card',
  templateUrl: './story-card.component.html',
  styleUrls: ['./story-card.component.scss']
})
export class StoryCardComponent implements OnInit {
  @Input() story: Story;

  constructor() { }

  ngOnInit() {

  }
}
