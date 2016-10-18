import { NgModule } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/platform';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { StoriesModule } from '../stories/stories.module';

@NgModule({
  imports: [
    AppRoutingModule,
    NativeScriptModule,
    StoriesModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
