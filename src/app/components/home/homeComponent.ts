
import {  FormBuilder, Validators, FormsModule } from '@angular/forms';

import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
import {Component, OnInit,AfterViewInit, ViewChild, ElementRef} from '@angular/core';
import { AdunitService } from 'app/adunit.service';



@Component({
  selector: ' app-root',
  templateUrl: './home.component.html'
  
})
export class HomeComponent  implements OnInit{
 
  @ViewChild('abc')abc: ElementRef;
  
  [x: string]: any;
  el: any;
  @ViewChild('keywordsInput') keywordsInput;

  

  public formData: FileUploader = new FileUploader({});

  
   constructor(private _adunitservice: AdunitService,el:ElementRef) { }

 
  newProduct(formData){
    let inputEl: HTMLInputElement = this.el.nativeElement.querySelector('#image');   
           let fileCount: number = inputEl.files.length;   
          
            if (fileCount > 0) {
                    formData.append('image', inputEl.files.item(0));
             }

this._adunitservice.addProduct(formData.value)
        .then(()=>{
          formData.reset()
        })
        .catch(err=>console.log(err))
  }
  ngOnInit() {
    this.formData.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.formData.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
         console.log('ImageUpload:uploaded:', item, status, response);
         alert('File uploaded successfully');
     };
 }

  }
 
  
    
    


  
  

   
   
   
