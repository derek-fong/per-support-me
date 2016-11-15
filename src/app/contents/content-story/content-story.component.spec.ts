// /* tslint:disable:no-unused-variable */
//
// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { ReactiveFormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';
//
// import { ContentStoryComponent } from './content-story.component';
// import { ContentService } from '../shared/content.service';
//
// class MockContentService {
//   createStory(story: Object): any { }
// }
//
// describe('ContentStoryComponent', () => {
//   let component: ContentStoryComponent;
//   let fixture: ComponentFixture<ContentStoryComponent>;
//
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       imports: [
//         ReactiveFormsModule,
//         RouterModule
//       ],
//       declarations: [ ContentStoryComponent ],
//       providers: [
//         { provide: ContentService, useClass: MockContentService }
//       ]
//     })
//     .compileComponents();
//   }));
//
//   beforeEach(() => {
//     fixture = TestBed.createComponent(ContentStoryComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });
//
//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
