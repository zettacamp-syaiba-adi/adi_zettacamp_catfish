import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { UserManagementService } from '../user-management.service';
import { TranslateService } from '@ngx-translate/core';
import { User } from '../model/user.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  userForm:any  = new FormGroup({
    id: new FormControl(null, Validators.required),
    name: new FormControl(null, Validators.required),
    age: new FormControl(null, Validators.pattern('[0-9][0-9]')),
    gender: new FormControl(null, Validators.required),
    email: new FormControl(null, [Validators.required, Validators.email]),
    position: new FormControl(null, Validators.required),
    status: new FormControl(null, Validators.required),
    addresses: new FormArray([])
  });

  isEdit: boolean = false;

  selectedLang:any = null;
  subsciption: any;

  constructor(
    private userManagementService: UserManagementService,
    private router: Router,
    private activateRouter: ActivatedRoute,
    public translateService: TranslateService
  ) { }

  ngOnInit(): void {
    // const id = this.router.snapshot.queryParamMap.get('userId');
    const id = this.activateRouter.snapshot.queryParamMap.get('userId');
    this.isEdit = id != null;
    
    if(this.isEdit){
      this.userManagementService.users$
      .pipe(first((items) => items.length !== 0))
      .subscribe((items) => {
        const item:any = items.find((items) => items.id === id);
        for(let i = 0; i < item.addresses.length; i++){
          this.pushForms();
        }
        this.userForm.patchValue(item);
      });
    }
    else{
      this.pushForms();
    }

    this.userForm.get('name').valueChanges.subscribe((input: any) =>{
      const specialchar = /[^a-z|\s]/i;

      let nama = input.replace(specialchar, '');
      this.userForm.get('name').patchValue(nama, {emitEvent: false});
    });
  }

  setLanguage(lang: string){
    this.selectedLang = lang;
    this.translateService.use(lang);
  }
 
  setFormValues(user: any){
    this.userForm.setValue(user);
  }

  onSubmit(){
    if(this.isEdit){
      if(this.userForm.valid){
        this.userManagementService.updateUser(this.userForm.value);
        Swal.fire('You have been Update','success');
        this.router.navigate(['/list']);
      }else{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Please Input Data with Requirement!'
        })
      }
    }else{
      console.log(this.userForm)
     if(this.userForm.valid){
      this.userManagementService.addUserToData(this.userForm.value);
      Swal.fire('Data has been insert', 'success');
      this.router.navigate(['/list']);
     }else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please Input Data with Requirement!'
      })
     }
    }
   
    // if (this.isEdit) {
    //   this.userManagementService.updateUser(this.userForm.value);
    //   // Make form null again
    //   this.userForm.reset();
    //   this.router.navigate(['/list']);
    // } else {
    //   this.userManagementService.addUserToData(this.userForm.value);
    //   // Make form null again
    //   this.userForm.reset();
    //   this.router.navigate(['/list']);
    // }
    //  this.userManagementService.addUserToData(this.userForm.value);
    // console.log(this.userForm.value)
  }

  get AddressForm(){
    return this.userForm.get("addresses") as FormArray;
  }

  pushForms(){
    this.AddressForm.push(new FormGroup({
      address: new FormControl(null, Validators.required),
      zipcode: new FormControl(null, [Validators.required, Validators.pattern('[0-9][0-9][0-9][0-9][0-9]')]),
      city: new FormControl(null, Validators.required),
      country: new FormControl(null, Validators.required)
    }))
  }

  ngOnDestroy(){
    this.subsciption && this.subsciption.unsubscribe();
  }

  removeForms(index: number){
    this.AddressForm.removeAt(index);
  }
}

