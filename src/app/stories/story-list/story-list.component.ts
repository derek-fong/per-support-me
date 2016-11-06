import {
  Component,
  OnInit
} from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { Story } from '../shared/story.model';
import { StoryService } from '../shared/story.service';
import { FilterService } from '../../core/shared/filter.service';

@Component({
  selector: 'tk-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.scss']
})
export class StoryListComponent implements OnInit {
  private publicStories: Observable<Story[]>;

  constructor(private filterService: FilterService,
              private storyService: StoryService) { }

  ngOnInit() {
    this.filterService.setContentType('stories');
    this.publicStories = this.storyService.getFilteredStories$();
  }
}
