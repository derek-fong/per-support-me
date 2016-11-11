import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';
import { Subscription } from 'rxjs/Rx';

import { FilterService } from '../shared/filter.service';

@Component({
  selector: 'tk-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit, OnDestroy {
  private contentTypeSub: Subscription;
  private elementID: string = 'side-nav-left';
  private keyword: string;

  constructor(private filterService: FilterService) { }

  ngOnInit() {
    this.contentTypeSub = this.filterService.contentType$.subscribe((res: string) => {
      console.log(res);
    });
    this.filterService.setKeyword(this.keyword);
  }

  ngOnDestroy(): void {
    if (this.contentTypeSub) {
      this.contentTypeSub.unsubscribe();
    }
  }

  onKeywordChange(keyword: string) {
    this.filterService.setKeyword(keyword);
  }
}
