import { Component, OnInit } from '@angular/core';

import { FilterService } from '../../core/shared/filter.service';

@Component({
  selector: 'tk-service-provider-list',
  templateUrl: './service-provider-list.component.html',
  styleUrls: ['./service-provider-list.component.scss']
})
export class ServiceProviderListComponent implements OnInit {

  constructor(private filterService: FilterService) { }

  ngOnInit() {
    this.filterService.setContentType('service-providers');
  }
}
