/* tslint:disable:no-unused-variable */

import { NgModule } from '@angular/core';
import { TestBed, async, inject } from '@angular/core/testing';
import { AngularFire, AngularFireModule } from 'angularfire2';

import { ContentService } from './content.service';
import { AuthService } from '../../auth/shared/auth.service';
import { Story } from '../../stories/shared/story.model';

class MockAuthService {
  userID(): string {
    return 'test_id';
  }
}

describe('Service: Content', () => {
  let contentService: ContentService;

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
  class MockDatabaseModule { }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MockDatabaseModule],
      providers: [
        ContentService,
        { provide: AuthService, useClass: MockAuthService }
      ]
    });
    contentService = new ContentService(AngularFire, AuthService);
  });

  it('can instantiate service when inject service', () => {
    expect(contentService instanceof ContentService).toBeTruthy();
  });
});
