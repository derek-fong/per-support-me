import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tk-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  private elementID: string = 'side-nav-left';

  constructor() { }

  ngOnInit() {
  }

}
