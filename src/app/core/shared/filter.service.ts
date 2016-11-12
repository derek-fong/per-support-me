import * as _ from 'lodash';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/Rx';

import { Story } from '../../stories/shared/story.model';
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
   * Filter stories by keyword.
   * @param {Story[]} stories - Stories.
   * @param {string} keyword - Keyword.
   * @returns {Story[]} - Stories that matches keyword.
   */
  filterByKeyword(stories: Story[], keyword: string): Story[] {
    return (keyword && keyword !== '') ? _.filter(stories, (story: Story) => {
      return story.alias.indexOf(keyword) !== -1 ||
        story.content.indexOf(keyword) !== -1 ||
        story.title.indexOf(keyword) !== -1 ||
        story.tags.indexOf(keyword) !== -1;
    }) : stories;
  }

  /**
   * Filter stories by tags.
   * @param {Story[]} stories - Stories.
   * @param {string[]} tags - Tag names.
   * @returns {Story[]} - Stories that matches tags.
   */
  filterByTags(stories: Story[], tags: string[]) {
    let filteredStories: Story[] = stories;

    // Perform filtering only if at least one `tag` is selected.
    if (tags && tags.length > 0) {
      filteredStories = filteredStories.filter((story: Story) => {
        return (story.tags.length >= tags.length) && this.matchTags(tags, story.tags);
      });
    }
    return filteredStories;
  }

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
    const tagName: string = _.kebabCase(tag.name);
    if (tag.isSelected) {
      this.selectedTags.push(tagName);
    } else {
      this.selectedTags = this.selectedTags.filter(item => item !== tagName);
    }

    this.tags.next(this.selectedTags);
  }

  /**
   * Compare if an array contains another array.
   * @param {string} needle - Sub-array.
   * @param {string} haystack - Array to match with.
   * @returns {boolean} - `true` if `haystack` contains `needle`; `false` otherwise.
   */
  private matchTags(needle: string[], haystack: string[]) {
    const storyTags: string[] = haystack.map((tag: string) => _.kebabCase(tag));

    for (let i = 0; i < needle.length; i++) {
      if (storyTags.indexOf(needle[i]) === -1) {
        return false;
      }
    }
    return true;
  }
}
