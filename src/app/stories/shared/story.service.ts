import * as _ from 'lodash';
import { Injectable } from '@angular/core';
import {
  AngularFire,
  FirebaseListObservable,
  FirebaseObjectObservable
} from 'angularfire2';
import { Observable, Subject } from 'rxjs/Rx';

import { Story } from './story.model';
import { FilterService } from '../../core/shared/filter.service';

@Injectable()
export class StoryService {

  constructor(private angularFire: AngularFire,
              private filterService: FilterService) { }

  /**
   * Add story.
   * @param {Story} story - Story.
   */
  addPublicStory(story: Story): void {
    this.angularFire.database.object(`/stories/public/${story.id}`).set({
      id: story.id,
      title: story.title,
      content: story.content,
      imgUrl: story.imgUrl,
      createdAt: Date.now()
    });
  }

  /**
   * Add private story.
   * @param story
   */
  addPrivateStory(story: Story): void {
    this.angularFire.database.object(`/stories/private/${story.id}`).set({
      id: story.id,
      title: story.title,
      content: story.content
    });
  }

  /**
   * Find story by keyword.
   * @param {string} keyword - Keyword.
   * @returns {FirebaseListObservable<any[]>} - Stories with keyword matched.
   */
  findPublicStories(keyword: string): FirebaseListObservable<Story[]> {
    const keywordSubject = new Subject();
    keywordSubject.next(keyword);

    return this.angularFire.database.list('/stories/public', {
      // REVIEW: Replace `orderByChild` property.
      query: {
        orderByChild: 'id',
        // equalTo: keyword
        equalTo: keywordSubject
      }
    });
  }

  /**
   * GEt filtered stories.
   * @returns {Observable<Story[]>} - Filtered stories.
   */
  getFilteredStories$(): Observable<Story[]> {
    return Observable.combineLatest(
      this.getPublicStories$(),
      this.filterService.keyword$,
      (stories: Story[], keyword: string) => {
        return this.filterByKeyword(stories, keyword);
      }
    );
  }

  /**
   * Get private stories.
   * @returns {FirebaseListObservable<any[]>}
   */
  getPrivateStories(): FirebaseListObservable<Story[]> {
    return this.angularFire.database.list('/stories/private');
  }


  /**
   * Get stories.
   * @returns {FirebaseListObservable<any[]>} - Stories.
   */
  getPublicStories$(): FirebaseListObservable<Story[]> {
    return this.angularFire.database.list('/stories/public');
  }

  /**
   * Get story by ID.
   * @param {string} id - Story ID.
   * @returns {FirebaseObjectObservable<Story>} - Story with ID matched.
   */
  getPublicStory(id: string): FirebaseObjectObservable<Story> {
    return this.angularFire.database.object(`/stories/public/${id}`);
  }

  /**
   * Filter stories by keyword.
   * @param {Story[]} stories - Stories.
   * @param {string} keyword - Keyword.
   * @returns {Story[]} - Stories that matches keyword.
   */
  private filterByKeyword(stories: Story[], keyword: string): Story[] {
    return (keyword && keyword !== '') ? _.filter(stories, (story: Story) => {
      return story.alias.indexOf(keyword) !== -1 ||
        story.content.indexOf(keyword) !== -1 ||
        story.title.indexOf(keyword) !== -1 ||
        story.tags.indexOf(keyword) !== -1;
    }) : stories;
  }
}
