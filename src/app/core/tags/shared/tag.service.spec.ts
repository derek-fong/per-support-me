/* tslint:disable:no-unused-variable */

import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { AngularFire, AngularFireModule } from 'angularfire2';

import { TagService } from './tag.service';

describe('Service: Tag', () => {
  let tagService: TagService;

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
      providers: [TagService]
    });

    tagService = new TagService(AngularFire);
  });

  it('can instantiate service when inject service', () => {
    expect(tagService instanceof TagService).toBeTruthy();
  });
});
