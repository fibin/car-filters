import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table'  
import { MatPaginatorModule } from '@angular/material/paginator'  


import { CarsTableComponent } from './cars-table.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    CarsTableComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
  ],
  exports: [
    CarsTableComponent,
  ]
})
export class CarsTableModule { }
