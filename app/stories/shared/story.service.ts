import { Injectable } from '@angular/core';

@Injectable()
export class StoryService {
  getStories(): string[] {
    return ['Foo', 'Bar'];
  }
}
