import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppDatabaseModule } from './app-database.module';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { ServiceProvidersModule } from './service-providers/service-providers.module';
import { StoriesModule } from './stories/stories.module';

@NgModule({
  imports: [
    AppDatabaseModule,
    AppRoutingModule,
    AuthModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    ServiceProvidersModule,
    SharedModule,
    StoriesModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
