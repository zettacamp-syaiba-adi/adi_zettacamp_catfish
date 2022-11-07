import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {  MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from '../model/users.mode';
import Swal from 'sweetalert2';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  
  selectedLang:any = null;

  formUser = new FormGroup({
    civility: new FormControl(null, Validators.required),
    last_Name: new FormControl(null, Validators.required),
    first_Name: new FormControl(null, Validators.required),
    birthday: new FormControl(null, Validators.required),
    gender: new FormControl(null)
  })

  cgender = ["male", "Female"];

  constructor(
    public dialogRef: MatDialogRef<AddUserComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: User,
    public translateService: TranslateService
  ) { }

  ngOnInit(): void {
    
  }

 
  onNoClick(): void{
    this.dialogRef.close();
  }
  setLanguage(lang: string){
    this.selectedLang = lang;
    this.translateService.use(lang);
  }

  onAdd(){
    // let hasil = this.formUser.value;
    const hasil = this.formUser.valid;
    if(!hasil){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a href="">Why do I have this issue?</a>'
      });
    }else{
      this.dialogRef.close(this.formUser.value);
    }    
  }
}


