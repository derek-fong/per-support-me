/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Story } from '../shared/story.model';
import { StoryDetailComponent } from './story-detail.component';

describe('StoryDetailComponent', () => {
  let component: StoryDetailComponent;
  let fixture: ComponentFixture<StoryDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoryDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryDetailComponent);
    component = fixture.componentInstance;

    component.story = new Story();
    component.story.title = 'Test Title';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
