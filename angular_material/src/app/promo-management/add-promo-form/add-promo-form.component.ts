import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SubSink } from 'subsink';
import Swal from 'sweetalert2';
import { PromoService } from '../promo.service';

@Component({
  selector: 'app-add-promo-form',
  templateUrl: './add-promo-form.component.html',
  styleUrls: ['./add-promo-form.component.css']
})
export class AddPromoFormComponent implements OnInit {
  private subs = new SubSink();

  promoForm = new FormGroup({
    title: new FormControl(null, Validators.required),
    sub_title: new FormControl(null, Validators.required),
    ref: new FormControl(null, Validators.required),
    image_url: new FormControl(null, Validators.required),
    description: new FormControl(null, Validators.required)
  })

  constructor(
    private fb: FormBuilder,
    private promoService: PromoService,
    public dialogRef: MatDialogRef<AddPromoFormComponent>, 
    @Inject(MAT_DIALOG_DATA) public data:any
  ) { }

  ngOnInit(): void {
  }


  onAdd(){
    const isValid = this.promoForm.valid;
    if(!isValid){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Invalid Input! Please Cek Again!',
      })
    }else{
      this.dialogRef.close(this.promoForm.value)
    }
  }
}
