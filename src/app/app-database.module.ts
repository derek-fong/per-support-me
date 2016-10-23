import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';

import { firebaseConfig } from '../environments/firebase-config';

@NgModule({
  imports: [
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  exports: [AngularFireModule]
})
export class AppDatabaseModule { }
