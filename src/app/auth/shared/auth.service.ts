import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';

import { AngularFire, AuthMethods, AuthProviders } from 'angularfire2';

import { auth0Config } from '../../../environments/auth0.config';

// Avoid name not found warnings
declare var Auth0: any;
declare var Auth0Lock: any;

@Injectable()
export class AuthService {
  private lock = new Auth0Lock(auth0Config.clientID, auth0Config.domain, {});
  private auth0 = new Auth0({ domain: auth0Config.domain, clientID: auth0Config.clientID });

  constructor(private angularFire: AngularFire) {
    // Add callback for lock `authenticated` event
    this.lock.on('authenticated', (authResult) => {
      localStorage.setItem('id_token', authResult.idToken);

      this.lock.getProfile(authResult.idToken, (error, profile) => {
        if (!error) {
          localStorage.setItem('profile', JSON.stringify(profile));

          // Set the options to retrieve a firebase delegation token
          const options = {
            id_token: authResult.idToken,
            api: 'firebase',
            scope : 'openid name email displayName',
            target: auth0Config.clientID
          };

          // Make a call to the Auth0 '/delegate'
          this.auth0.getDelegationToken(options, (err, result) => {
            if (!err) {
              this.angularFire.auth.login(result.id_token, {
                provider: AuthProviders.Custom,
                method: AuthMethods.CustomToken
              });
            } else {
              // Handle error
            }
          });
        } else {
          // Handle error
        }
      });
    });
  }

  get isAuthenticated(): boolean {
    return tokenNotExpired();
  }

  login(): void {
    this.lock.show();
  }

  logout() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');

    this.angularFire.auth.logout();
  }
}
