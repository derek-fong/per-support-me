import { platformNativeScriptDynamic, NativeScriptModule } from 'nativescript-angular/platform';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [NativeScriptModule],
})
class AppComponentModule {}

platformNativeScriptDynamic().bootstrapModule(AppComponentModule);