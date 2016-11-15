import {
  Component,
  Input,
  OnInit
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import { toast } from 'angular2-materialize';

import { Story } from '../../stories/shared/story.model';
import { ContentService } from '../shared/content.service';

@Component({
  selector: 'tk-content-story',
  templateUrl: './content-story.component.html',
  styleUrls: ['./content-story.component.scss']
})
export class ContentStoryComponent implements OnInit {
  @Input() story: Story;
  private storyCreationForm: FormGroup;

  constructor(private contentService: ContentService,
              private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  /**
   * Initialize story creation form.
   */
  private initForm(): void {
    if (this.story) {
      this.storyCreationForm = this.formBuilder.group({
        alias: [this.story.alias, Validators.required],
        title: [this.story.title, Validators.required],
        content: [this.story.content, Validators.required],
        imgUrl: [this.story.imgUrl, Validators.required],
        videoUrl: [this.story.videoUrl, Validators.required],
        tags: [this.story.tags, Validators.required]
    });
    } else {
      this.storyCreationForm = this.formBuilder.group({
        alias: [undefined, Validators.required],
        title: [undefined, Validators.required],
        content: [undefined, Validators.required],
        imgUrl: [undefined, Validators.required],
        videoUrl: [undefined, Validators.required],
        tags: [undefined, Validators.required]
      });
    }
  }

  /**
   * Create story event handler.
   * @param {Story} newStory - New story object.
   */
  onCreateStory(newStory: Story): void {
    this.contentService.createStory(newStory)
      .then(() => {
        toast('Your story has been submitted for review. ', 1000);
        this.router.navigate(['']);
      })
      .catch((err) => {
        if (err) {
          toast(`Error: ${err}`, 1000);
        } else {
          toast(`An unknown error occurred. `, 5000);
        }
      });
  }
}
