/* tslint:disable:no-unused-variable */

import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs/Rx';

import { TagListComponent } from './tag-list.component';
import { FilterService } from '../../shared/filter.service';
import { TagService } from '../../tags/shared/tag.service';

class MockFilterService {
  get contentType$(): Observable<string> {
    return Observable.of('stories');
  }
}

class MockTagService {
  getTagCollections$(contentType: string) {
    return Observable.of(['foo', 'bar']);
  }
}

describe('TagListComponent', () => {
  let component: TagListComponent;
  let fixture: ComponentFixture<TagListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagListComponent ],
      providers: [
        { provide: FilterService, useClass: MockFilterService },
        { provide: TagService, useClass: MockTagService }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagListComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
