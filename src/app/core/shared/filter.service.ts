import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/Rx';

import { Tag } from '../tags/shared/tag.model';

@Injectable()
export class FilterService {
  private contentType = new BehaviorSubject<string>(undefined);
  private keyword = new BehaviorSubject<string>(undefined);
  private selectedTags: string[] = [];
  private tags = new BehaviorSubject<string[]>(this.selectedTags);

  contentType$ = this.contentType.asObservable();
  keyword$ = this.keyword.asObservable();
  tags$ = this.tags.asObservable();

  /**
   * Set content type.
   * @param {string} type - Content type.
   */
  setContentType(type: string): void {
    this.selectedTags = [];
    this.tags.next(this.selectedTags);
    this.contentType.next(type);
  }

  /**
   * Set keyword type.
   * @param {string} inKeyword - Keyword.
   */
  setKeyword(inKeyword: string): void {
    this.keyword.next(inKeyword);
  }

  /**
   * Update tags.
   * @param {Tag} tag - Tag object.
   */
  updateTags(tag: Tag): void {
    if (tag.isSelected) {
      this.selectedTags.push(tag.name);
    } else {
      this.selectedTags = this.selectedTags.filter(item => item !== tag.name);
    }

    this.tags.next(this.selectedTags);
  }
}
