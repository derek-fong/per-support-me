import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppDatabaseModule } from './app-database.module';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { ServiceProvidersModule } from './service-providers/service-providers.module';
import { StoriesModule } from './stories/stories.module';

@NgModule({
  imports: [
    AppDatabaseModule,
    AppRoutingModule,
    AuthModule,
    BrowserModule,
    CoreModule,
    FormsModule,
    HttpModule,
    ServiceProvidersModule,
    StoriesModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
