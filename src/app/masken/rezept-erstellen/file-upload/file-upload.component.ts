import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ButtonModule} from "primeng/button";
import {Recipe} from "../../../models/recipe";

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
  @Output() saveImage = new EventEmitter<string>();
  @Input() fileName: string = ""

  onFileSelected(event: any) {
    const file:File = event.target.files[0];
    if (file) {
      this.fileName = file.name
      this.saveImage.emit(this.fileName)
    }
  }
}
