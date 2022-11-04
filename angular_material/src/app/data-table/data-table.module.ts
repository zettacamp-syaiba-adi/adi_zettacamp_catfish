import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent } from './data-table.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatTableModule } from '@angular/material/table'; 
import { CdkTableModule } from '@angular/cdk/table';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon'; 
import {MatSelectModule} from '@angular/material/select';
@NgModule({
  declarations: [
    DataTableComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatTableModule,
    CdkTableModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule
  ],
  exports: [
    DataTableComponent
  ]
})
export class DataTableModule { }
