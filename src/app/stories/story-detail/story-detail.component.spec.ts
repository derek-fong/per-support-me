/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

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

    component.story = {
      title: 'Test Title',
      content: 'Test Content'
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show story title as "Test Title"', () => {
    const debugElement: DebugElement = fixture.debugElement.query(By.css('#story-title'));

    expect(debugElement.nativeElement.textContent).toContain(component.story.title);
  });

  it('should show story content as "Test Content"', () => {
    const debugElement: DebugElement = fixture.debugElement.query((By.css('#story-content')));

    expect(debugElement.nativeElement.textContent).toBe(component.story.content);
  });
});
