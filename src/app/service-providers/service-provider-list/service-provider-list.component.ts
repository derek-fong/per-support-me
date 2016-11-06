import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { FilterService } from '../../core/shared/filter.service';

@Component({
  selector: 'tk-service-provider-list',
  templateUrl: './service-provider-list.component.html',
  styleUrls: ['./service-provider-list.component.scss']
})
export class ServiceProviderListComponent implements OnInit, OnDestroy {
  private keywordSub: Subscription;

  constructor(private filterService: FilterService) { }

  ngOnInit() {
    this.filterService.setContentType('service-providers');

    this.keywordSub = this.filterService.keyword$.subscribe((res: string) => {
      console.log(`Service Provider: keyword ${res}`);
    });
  }

  ngOnDestroy(): void {
    this.keywordSub.unsubscribe();
  }
}
