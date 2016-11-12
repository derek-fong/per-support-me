/* tslint:disable:no-unused-variable */

import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TagCollectionComponent } from './tag-collection.component';
import { FilterService } from '../../shared/filter.service';

describe('TagCollectionComponent', () => {
  let component: TagCollectionComponent;
  let fixture: ComponentFixture<TagCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagCollectionComponent ],
      providers: [FilterService],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagCollectionComponent);
    component = fixture.componentInstance;

    // Mock inputs
    component.isCollapsed = true;
    component.tagCollection = {
      category: 'Test Category',
      tags: [
        { name: 'Foo', isSelected: false },
        { name: 'Bar', isSelected: false }
      ]
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
