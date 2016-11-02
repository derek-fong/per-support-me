import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ServiceProvidersComponent } from './service-providers.component';
import { ServiceProviderListComponent } from './service-provider-list/service-provider-list.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'service-providers',
        component: ServiceProvidersComponent,
        children: [
          {
            path: '',
            component: ServiceProviderListComponent
          }
        ]
      }
    ])
  ],
  exports: [RouterModule]
})
export class ServiceProvidersRoutingModule { }

