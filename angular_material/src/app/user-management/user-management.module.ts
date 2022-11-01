import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserManagementComponent } from './user-management.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserCardComponent } from './user-list/user-card/user-card.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import {MatInputModule} from '@angular/material/input'; 
import {MatRadioModule} from '@angular/material/radio'; 
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button'; 
import {MatCardModule} from '@angular/material/card'; 
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { FilterPipe } from './pipe/filter.pipe';
import { AccentPipe } from './pipe/accent.pipe';

export function HttpLoaderFactory(httpClient: HttpClient){
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  declarations: [
    UserManagementComponent,
    UserListComponent,
    UserAddComponent,
    UserCardComponent,
    UserDetailComponent,
    FilterPipe,
    AccentPipe
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatButtonModule,
    AppRoutingModule,
    MatCardModule,

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
    UserListComponent,
    UserAddComponent,
    UserCardComponent,
    UserDetailComponent
  ]
})
export class UserManagementModule { }
