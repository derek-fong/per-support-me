import {
  Component,
  Input
} from '@angular/core';

import { Tag } from '../shared/tag.model';
import { TagCollection } from '../shared/tag-collection.model';
import { FilterService } from '../../shared/filter.service';

@Component({
  selector: 'tk-tag-collection',
  templateUrl: './tag-collection.component.html',
  styleUrls: ['./tag-collection.component.scss']
})
export class TagCollectionComponent {
  @Input() isCollapsed: boolean;
  @Input() tagCollection: TagCollection;

  constructor(private filterService: FilterService) { }

  onToggleTags(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  onToggleTagSelect(tag: Tag): void {
    tag.isSelected = !tag.isSelected;
    this.filterService.updateTags(tag);
  }
}
