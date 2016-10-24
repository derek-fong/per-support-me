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

  constructor(private angularFire: AngularFire) {
  }

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
  getPublicStories(): FirebaseListObservable<Story[]> {
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
   * initialize stories.
   */
  initPublicStories(): void {
    this.addPublicStory({
      id: 'aaa',
      title: 'Alpha',
      content: 'Alpha content',
      imgUrl: 'https://angular.io/resources/images/logos/angular2/angular.svg'
    });

    this.addPublicStory({
      id: 'bbb',
      title: 'Bravo',
      content: 'bravo content',
      imgUrl: 'https://angular.io/resources/images/logos/angular2/angular.svg'
    });

    this.addPublicStory({
      id: 'ccc',
      title: 'Charlie',
      content: 'Charlie content',
      imgUrl: 'https://angular.io/resources/images/logos/angular2/angular.svg'
    });

    this.addPublicStory({
      id: 'ddd',
      title: 'Delta',
      content: 'Delta content',
      imgUrl: 'https://angular.io/resources/images/logos/angular2/angular.svg'
    });
  }
}
