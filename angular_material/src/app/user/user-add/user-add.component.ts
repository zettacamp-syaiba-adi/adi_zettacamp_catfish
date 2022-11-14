import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  selectedLang:any = null;

  userForm:any  = new FormGroup({
    id: new FormControl(null, Validators.required),
    name: new FormControl(null, Validators.required),
    nickname: new FormControl(null, Validators.required),
    email: new FormControl(null, Validators.required),
    gender: new FormControl(null, Validators.required),
    address: new FormGroup({
      address: new FormControl(null, Validators.required),
      zipcode: new FormControl(null, Validators.required),
      city: new FormControl(null, Validators.required),
      country: new FormControl(null, Validators.required)
    }),
  });

  constructor(
    private Service: UserService,
    private router: Router,
    public translateService: TranslateService
  ) { }

  ngOnInit(): void {
  }

  onAddUser(data: any){
    this.Service.addUser(data);
    this.router.navigate(['user-list']);
  }

  setLanguage(lang: string){
    this.selectedLang = lang;
    this.translateService.use(lang);
  }
}
