import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class FilterService {
  private contentType = new Subject<string>();

  contentType$ = this.contentType.asObservable();

  setContentType(type: string) {
    this.contentType.next(type);
  }
}
