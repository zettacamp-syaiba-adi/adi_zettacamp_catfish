import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserManagementComponent } from './user-management.component';
import { AddUserComponent } from './add-user/add-user.component';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import {MatDialogModule} from '@angular/material/dialog'; 
import {MatButtonModule} from '@angular/material/button'; 
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'; 
import {MatRadioModule} from '@angular/material/radio'; 
import {MatTableModule} from '@angular/material/table'; 
import {MatDatepickerModule} from '@angular/material/datepicker'; 
import { MatNativeDateModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

export function HttpLoaderFactory(httpClient: HttpClient){
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  declarations: [
    UserManagementComponent,
    AddUserComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,

    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  exports:[
    UserManagementComponent,
    AddUserComponent
  ]
})
export class UserManagementModule { }
