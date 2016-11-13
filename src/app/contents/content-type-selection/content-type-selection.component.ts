import {
  Component,
  EventEmitter,
  Output,
  OnInit
} from '@angular/core';

@Component({
  selector: 'tk-content-type-selection',
  templateUrl: './content-type-selection.component.html',
  styleUrls: ['./content-type-selection.component.scss']
})
export class ContentTypeSelectionComponent implements OnInit {
  @Output() selectContentType = new EventEmitter<string>();
  private groupName: string = 'content-type';
  private contentTypes: any[];

  ngOnInit(): void {
    // Init content type options.
    // Set first option as default
    this.contentTypes = [
      {
        id: 'content-story',
        name: this.groupName,
        desc: 'Story',
        value: 'story',
        isChecked: true
      },
      {
        id: 'content-service-provider',
        name: this.groupName,
        desc: 'Service Provider',
        value: 'service-provider',
        isChecked: null
      }
    ];

    this.selectContentType.emit(this.contentTypes[0].value);
  }

  /**
   * Select content type event handler.
   * @param {string} contentType - Content type.
   */
  onSelectContentType(contentType: string): void {
    this.selectContentType.emit(contentType);
  }
}
