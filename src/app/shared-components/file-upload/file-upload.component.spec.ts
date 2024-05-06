import { ComponentFixture, TestBed } from '@angular/core/testing';
import {FileUploadComponent} from "./file-upload.component";



describe('FileUploadComponent', () => {
  let component: FileUploadComponent;
  let fixture: ComponentFixture<FileUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FileUploadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not emit saveImage event when no file is selected', () => {
    const component = new FileUploadComponent();
    const event = {
      target: {
        files: []
      }
    };
    spyOn(component.saveImage, 'emit');

    component.onFileSelected(event);

    expect(component.fileName).toBe('');
    expect(component.saveImage.emit).not.toHaveBeenCalled();
  });

  it('should emit saveImage event with file name', () => {
    // Arrange
    const fileUploadComponent = new FileUploadComponent();
    const fileName = 'test.jpg';
    const event = {
      target: {
        files: [
          {
            name: fileName
          }
        ]
      }
    };
    let emittedFileName = '';

    fileUploadComponent.saveImage.subscribe((name: string) => {
      emittedFileName = name;
    });

    // Act
    fileUploadComponent.onFileSelected(event);

    // Assert
    expect(emittedFileName).toBe(fileName);
  });
});
