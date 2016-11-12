import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { AngularFire } from 'angularfire2';

import { Tag } from './tag.model';
import { TagCollection } from './tag-collection.model';

@Injectable()
export class TagService {
  constructor(private angularFire: AngularFire) { }

  /**
   * Get tag collections.
   * @param {string} contentType - Content type.
   * @returns {Observable<TagCollection[]>} - Tag collections observable.
   */
  getTagCollections$(contentType: string): Observable<TagCollection[]> {
    return this.angularFire.database.list(`/tags/${contentType}`, { query: { orderByKey: true } }).map((res: Array<any>) => {
      let tagCollections: TagCollection[] = [];

      for (let category of res) {
        let tags: Tag[] = [];

        for (let tagName of category) {
          tags.push({
            name: tagName,
            isSelected: false
          });
        }

        tagCollections.push({
          category: category.$key,
          tags: tags
        });
      }
      return tagCollections;
    });
  }
}
