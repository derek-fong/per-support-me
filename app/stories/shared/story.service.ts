import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs/Rx';

import { Story } from './story.model';

@Injectable()
export class StoryService {
  getStories(): Story[] {
    return [{
      title: 'Title 1',
      content: 'Title 1 Content',
      imgUrl: 'http://www.flooringvillage.co.uk/ekmps/shops/flooringvillage/images/request-a-sample--547-p.jpg'
    }, {
      title: 'Title 2',
      content: 'Title 2 Content',
      imgUrl: 'http://www.flooringvillage.co.uk/ekmps/shops/flooringvillage/images/request-a-sample--547-p.jpg'
    }];
  }

  getStories$(): Observable<Story[]> {
    return Observable.create((observer: Observer<Story[]>) => {
      observer.next(this.getStories());
    });
  }
}
