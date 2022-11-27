
import { Component, OnInit, Input } from '@angular/core';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { UploadFileService } from '../shared/upload-file.service';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-form-upload',
  templateUrl: './form-upload.component.html',
  styleUrls: ['./form-upload.component.scss']
})
export class FormUploadComponent implements OnInit {

  // selectedFiles: FileList;
  selectionFiles!: FileList;
  @Input() logo!: string;

  currentFileUpload!: File;
  // currentFile: File;
  uploadForm!: UntypedFormGroup;
  progres: { percentage: number } = { percentage: 0};

  constructor(private uploaService: UploadFileService,
    private formBuilder: UntypedFormBuilder,
  private toast: ToastrService) { }

  ngOnInit() {
    this.uploadForm = this.formBuilder.group({
      logo: ['/assets/yasn logo.jpeg']
    });
    this.getImageUrl();
  }

  // selectFile(event) {
  //   this.selectedFiles = event.target.files;
  // }
  checkUpFile(event: any ) {
    this.selectionFiles = event.target.files;
    if (this.selectionFiles.length > 0) {
    const file = this.selectionFiles.item(0);
    this.uploadForm.get('logo')!.setValue(file);
    }
  }

  onSubmit() {
    this.progres.percentage = 0;
    // this.currentFileUpload = this.selectionFiles.item(0);
    this.currentFileUpload = this.uploadForm.get('logo')!.value;
    console.log(this.currentFileUpload);
    // this.logo = '/upload-dir/' + this.currentFileUpload['name'];
    console.log(this.logo);

    this.uploaService.pushFileToStorage(this.currentFileUpload).subscribe( event => {

      if (event.type === HttpEventType.UploadProgress) {
        this.progres.percentage = Math.round(100 * event.loaded / event.total!);
        } else if (event instanceof HttpResponse) {
          this.toast.success('Fichier chargé avec succès! ');
      }
    });

    this.selectionFiles ;
  }
  getImageUrl() {
    return this.currentFileUpload ? this.uploaService.getFile(this.currentFileUpload) : '/assets/yasn logo.jpeg';
}
}
