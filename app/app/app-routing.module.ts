import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

@NgModule({
  imports: [
    NativeScriptRouterModule.forRoot([
      {
        path: '',
        redirectTo: '/stories',
        pathMatch: 'full'
      }
    ])
  ],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {}
