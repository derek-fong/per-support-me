/* tslint:disable:no-unused-variable */

import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import {AngularFire, AngularFireModule} from 'angularfire2';

import { StoryService } from './story.service';

describe('Service: Story', () => {
  let storyService: StoryService;

  @NgModule({
    imports: [
      AngularFireModule.initializeApp({
        apiKey: 'test_api_key',
        authDomain: 'test.firebaseapp.com',
        databaseURL: 'https://test.firebaseio.com',
        storageBucket: 'test.appspot.com',
      })
    ],
    exports: [AngularFireModule]
  })
  class MockDataBaseModule { }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MockDataBaseModule],
      providers: [StoryService]
    });

    storyService = new StoryService(AngularFire);
  });

  it('can instantiate service when inject service', () => {
    expect(storyService instanceof StoryService).toBeTruthy();
  });

  describe('when getPublicStories', () => {
    it('should get public stories', () => {
      spyOn(storyService, 'getPublicStories').and.callFake(() => {
        return 123;
      });

      let result = storyService.getPublicStories();

      expect(result).toEqual(123);
    });
  });
});
