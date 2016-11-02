import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceProvidersComponent } from './service-providers.component';
import { ServiceProviderListComponent } from './service-provider-list/service-provider-list.component';
import { ServiceProvidersRoutingModule } from './service-providers-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ServiceProvidersRoutingModule
  ],
  declarations: [ServiceProvidersComponent, ServiceProviderListComponent]
})
export class ServiceProvidersModule { }
