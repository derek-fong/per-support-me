import { Component, OnInit } from '@angular/core';

import { FilterService } from '../shared/filter.service';

@Component({
  selector: 'tk-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  private elementID: string = 'side-nav-left';
  private keyword: string;

  constructor(private filterService: FilterService) { }

  ngOnInit() {
    this.filterService.contentType$.subscribe((res: string) => {
      console.log(res);
    });
    this.filterService.setKeyword(this.keyword);
  }

  onKeywordChange(keyword: string) {
    this.filterService.setKeyword(keyword);
  }
}
