/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FIREBASE_PROVIDERS, AngularFire, defaultFirebase } from 'angularfire2';

import { StoryService } from './story.service';

describe('Service: Story', () => {
  beforeEach(() => {
    const angularFireConfig = {
      apiKey: 'test_api_key',
      authDomain: 'test.firebaseapp.com',
      databaseURL: 'https://test.firebaseio.com',
      storageBucket: 'test.appspot.com',
    };

    TestBed.configureTestingModule({
      providers: [
        FIREBASE_PROVIDERS,
        defaultFirebase(angularFireConfig),
        StoryService
      ]
    });
  });

  it('instantiate service when inject service', inject([StoryService], (storyService: StoryService) => {
    expect(storyService instanceof StoryService).toBeTruthy();
  }));
});
