import { Component } from '@angular/core';

@Component({
  selector: 'tk-content-creation',
  templateUrl: './content-creation.component.html',
  styleUrls: ['./content-creation.component.scss']
})
export class ContentCreationComponent {
  private selectedContentType: string;

  onSelectContentType(contentType: string): void {
    this.selectedContentType = contentType;
  }
}
