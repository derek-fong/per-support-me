/* tslint:disable:no-unused-variable */
import {
  async,
  ComponentFixture,
  fakeAsync,
  tick,
  TestBed
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { Observable, Observer } from 'rxjs/Rx';

import { StoryListComponent } from './story-list.component';
import { Story } from '../shared/story.model';
import { StoryService } from '../shared/story.service';
import { FilterService } from '../../core/shared/filter.service';

describe('StoryListComponent', () => {
  let component: StoryListComponent;
  let fixture: ComponentFixture<StoryListComponent>;

  let storyServiceStub: {
    addPrivateStory: Function,
    findPublicStories: Function,
    getPrivateStories: Function,
    getPublicStory: Function,
    getPublicStories: Function,
  };

  beforeEach(async(() => {

    const mockStory: Story = { id: 'ss000', title: 'Test Story Title', content: 'Test story content' };

    storyServiceStub = {
      getPublicStories: () => {
        return new Observable((observer: Observer<Story[]>) => {
          observer.next([mockStory, mockStory]);
          observer.complete();
        });
      },
      // TODO: Cleanup
      getPublicStory: () => {
        return undefined;
      },
      findPublicStories: () => {
        return undefined;
      },
      getPrivateStories: () => {
        return undefined;
      },
      addPrivateStory: () => {
        return undefined;
      }
    };

    TestBed.configureTestingModule({
      declarations: [ StoryListComponent ],
      providers: [
        FilterService,
        { provide: StoryService, useValue: storyServiceStub } ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain 2 public stories', fakeAsync(() => {
    tick();
    const debugElements: DebugElement[] = fixture.debugElement.queryAll(By.css('tk-story-card'));
    fixture.detectChanges();
    expect(debugElements.length).toBe(2);
  }));
});
