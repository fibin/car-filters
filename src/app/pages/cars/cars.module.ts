import { NgModule } from '@angular/core';

import { CarsComponent } from './cars.component';
import { CarsRoutingModule } from './cars-routing.module';
import { CarsTableModule } from './components/cars-table/cars-table.module';
import { CarsFiltersModule } from './components/cars-filters/cars-filters.module';

@NgModule({
  declarations: [
    CarsComponent,
  ],
  imports: [
    CarsRoutingModule,
    CarsTableModule,
    CarsFiltersModule,
  ],
})
export class CarsModule { }
