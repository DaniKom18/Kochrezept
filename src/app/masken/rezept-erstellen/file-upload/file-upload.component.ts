import { Component } from '@angular/core';
import {ButtonModule} from "primeng/button";

@Component({
  selector: 'app-file-upload',
  standalone: true,
  imports: [
    ButtonModule
  ],
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.css'
})
export class FileUploadComponent {
  fileName = '';

  onFileSelected(event: any) {

    const file:File = event.target.files[0];

    if (file) {

      this.fileName = file.name;

    }
  }
}
