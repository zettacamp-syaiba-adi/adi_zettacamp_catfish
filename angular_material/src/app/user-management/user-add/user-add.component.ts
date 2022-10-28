import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { UserManagementService } from '../user-management.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  userForm:any  = new FormGroup({
    id: new FormControl(null),
    name: new FormControl(null),
    age: new FormControl(null),
    gender: new FormControl(null),
    email: new FormControl(null),
    position: new FormControl(null),
    status: new FormControl(null),
    addresses: new FormGroup({
      address: new FormControl(null),
      zipcode: new FormControl(null),
      city: new FormControl(null),
      country: new FormControl(null)
    }),
  });

  isEdit: boolean = false;

  selectedLang:any = null;

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
    console.log(this.isEdit);
    
    if(this.isEdit){
      this.userManagementService.users
      .pipe(first((items) => items.length !== 0))
      .subscribe((items) => {
        const item = items.find((items) => items.id === id);
        this.setFormValues(item);
      });
    }
  }

  setLanguage(lang: string){
    this.selectedLang = lang;
    this.translateService.use(lang);
  }
 
  setFormValues(user: any){
    this.userForm.setValue(user);
  }

  onSubmit(){
    if (this.isEdit) {
      this.userManagementService.updateUser(this.userForm.value);
      // Make form null again
      this.userForm.reset();
      this.router.navigate(['/list']);
    } else {
      this.userManagementService.addUserToData(this.userForm.value);
      // Make form null again
      this.userForm.reset();
      this.router.navigate(['/list']);
    }

    //  this.userManagementService.addUserToData(this.userForm.value);
    // console.log(this.userForm.value)
  }
}

