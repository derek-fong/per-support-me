/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AuthService } from './auth.service';

import { AngularFire } from 'angularfire2';

declare var Auth0Lock: any;

describe('Service: Auth', () => {
    beforeEach(() => {

    const mockAuth0Lock = {
      on: () => { return true; },
      getProfile: () => { return true; },
      show: () => { }
    };

    const mockAngularFire = {
      auth: {
        login: () => { return true; },
        logout: () => { return true; }
      }
    };

    TestBed.configureTestingModule({
      providers: [
        AuthService,
        { provide: AngularFire, useValue: mockAngularFire }
      ]
    });
  });

  it('should ...', inject([AuthService, Auth0Lock], (service: AuthService) => {
    let lock = new Auth0Lock();

    spyOn(lock, 'on');

    expect(service).toBeTruthy();
  }));
});
