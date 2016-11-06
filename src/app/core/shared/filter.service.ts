import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class FilterService {
  private contentType = new Subject<string>();
  private keyword = new Subject<string>();

  contentType$ = this.contentType.asObservable();
  keyword$ = this.keyword.asObservable();

  setContentType(type: string) {
    this.contentType.next(type);
  }

  setKeyword(inKeyword: string) {
    this.keyword.next(inKeyword);
  }
}
