import { Injectable } from '@angular/core';
import {
  AngularFire,
  FirebaseListObservable,
  FirebaseObjectObservable
} from 'angularfire2';
import { Subject } from 'rxjs/Subject';

import { Story } from './story.model';

@Injectable()
export class StoryService {

  constructor(private angularFire: AngularFire) { }

  /**
   * Add story.
   * @param {Story} story - Story.
   */
  addStory(story: Story): void {
    this.angularFire.database.object(`/stories/${story.id}`).set({
      id: story.id,
      title: story.title,
      content: story.content,
      imgUrl: story.imgUrl,
      createdAt: Date.now()
    });
  }

  /**
   * Find story by keyword.
   * @param {string} keyword - Keyword.
   * @returns {FirebaseListObservable<any[]>} - Stories with keyword matched.
   */
  findStories(keyword: string): FirebaseListObservable<Story[]> {
    const keywordSubject = new Subject();
    keywordSubject.next(keyword);

    return this.angularFire.database.list('/stories', {
      // REVIEW: Replace `orderByChild` property.
      query: {
        orderByChild: 'id',
        // equalTo: keyword
        equalTo: keywordSubject
      }
    });
  }

  /**
   * Get stories.
   * @returns {FirebaseListObservable<any[]>} - Stories.
   */
  getStories(): FirebaseListObservable<Story[]> {
    return this.angularFire.database.list('/stories');
  }

  /**
   * Get story by ID.
   * @param {string} id - Story ID.
   * @returns {FirebaseObjectObservable<Story>} - Story with ID matched.
   */
  getStory(id: string): FirebaseObjectObservable<Story> {
    return this.angularFire.database.object(`/stories/${id}`);
  }

  /**
   * initialize stories.
   */
  initStories(): void {
    this.addStory({
      id: 'aaa',
      title: 'Alpha',
      content: 'Alpha content',
      imgUrl: 'https://angular.io/resources/images/logos/angular2/angular.svg'
    });

    this.addStory({
      id: 'bbb',
      title: 'Bravo',
      content: 'bravo content',
      imgUrl: 'https://angular.io/resources/images/logos/angular2/angular.svg'
    });

    this.addStory({
      id: 'ccc',
      title: 'Charlie',
      content: 'Charlie content',
      imgUrl: 'https://angular.io/resources/images/logos/angular2/angular.svg'
    });

    this.addStory({
      id: 'ddd',
      title: 'Delta',
      content: 'Delta content',
      imgUrl: 'https://angular.io/resources/images/logos/angular2/angular.svg'
    });
  }
}
