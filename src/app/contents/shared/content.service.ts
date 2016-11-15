import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';

import { AuthService } from '../../auth/shared/auth.service';
import { Story } from '../../stories/shared/story.model';

@Injectable()
export class ContentService {

  constructor(private angularFire: AngularFire,
              private authService: AuthService) { }

  createStory(story: Story): any {
    // TODO: Add objects to `/stories/pending`.
    return this.angularFire.database.list('/stories/public').push({
      alias: story.alias,
      title: story.title,
      content: story.content,
      imgUrl: story.imgUrl,
      videoUrl: story.videoUrl,
      tags: this.parseTags(story.tags as any),
      createdAt: firebase.database.ServerValue.TIMESTAMP,
      createdBy: this.authService.userID
    });
  }

  /**
   * Parse string of tags to tag names.
   * @param {string} strTags - String of tags.
   * @returns {string[]} - Tag names in lowercase and space-trimmed.
   */
  private parseTags(strTags: string): string[] {
    let tags: string[] = undefined;

    if (typeof strTags === 'string') {
      tags = strTags.split(',');

      for (let i = 0; i < tags.length; i++) {
        tags[i] = tags[i].trim().toLowerCase();
      }
    }
    return tags;
  }
}
