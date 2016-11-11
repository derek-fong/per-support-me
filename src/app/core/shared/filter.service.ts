import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/Rx';

@Injectable()
export class FilterService {
  private contentType = new BehaviorSubject<string>(undefined);
  private keyword = new BehaviorSubject<string>(undefined);

  contentType$ = this.contentType.asObservable();
  keyword$ = this.keyword.asObservable();

  setContentType(type: string) {
    this.contentType.next(type);
  }

  setKeyword(inKeyword: string) {
    this.keyword.next(inKeyword);
  }
}
