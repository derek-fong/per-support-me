import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { TagCollection } from '../shared/tag-collection.model';
import { TagService } from '../shared/tag.service';
import { FilterService } from '../../shared/filter.service';

@Component({
  selector: 'tk-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.scss']
})
export class TagListComponent implements OnInit {
  private tagCollections$: Observable<TagCollection[]>;

  constructor(private filterService: FilterService,
              private tagService: TagService) { }

  ngOnInit() {
    this.filterService.contentType$.subscribe((res: string) => {
      if (res) {
        this.tagCollections$ = this.tagService.getTagCollections$(res);
      }
    });
  }

}
