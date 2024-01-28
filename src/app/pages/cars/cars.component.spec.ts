import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsComponent } from './cars.component';
import { CarFilters } from './components/cars-filters/models/car-filters.interface';
import { CarBrands } from './models/car-brands.interface';
import { carsTable } from './models/cars-data.mock';
import { CarsTableModule } from './components/cars-table/cars-table.module';
import { CarsFiltersModule } from './components/cars-filters/cars-filters.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarTableItem } from './models/cars-table-items.interface';

describe('CarsComponent', () => {
  let component: CarsComponent;
  let fixture: ComponentFixture<CarsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        CarsTableModule,
        CarsFiltersModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatTableModule,
        MatPaginatorModule,
        BrowserAnimationsModule
      ],
      declarations: [CarsComponent]
    });
    fixture = TestBed.createComponent(CarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('array should contain only bmw', () => {
    const filter: CarFilters = {
      brands: [CarBrands.BMW],
    };
    const filteredCars = component['filterCars'](filter, carsTable.items);
    expect(filteredCars[filteredCars.length-1].brand).toEqual(CarBrands.BMW);
    expect(filteredCars[0].brand).toEqual(CarBrands.BMW);
  });
  it('array should contain only bmw and audi', () => {
    const filter: CarFilters = {
      brands: [CarBrands.BMW, CarBrands.AUDI],
    };
    const filteredCars = component['filterCars'](filter, carsTable.items);
    const findBmw = filteredCars.find((car: CarTableItem) => car.brand === CarBrands.BMW);
    const findAudi = filteredCars.find((car: CarTableItem) => car.brand === CarBrands.AUDI);
    const findRenault = filteredCars.find((car: CarTableItem) => car.brand === CarBrands.RENAULT);
    expect(findBmw.brand).toEqual(CarBrands.BMW);
    expect(findAudi.brand).toEqual(CarBrands.AUDI);
    expect(findRenault?.brand).toEqual(undefined);
  });
  it('array should contain only bmw x5', () => {
    const filter: CarFilters = {
      brands: [CarBrands.BMW, CarBrands.AUDI],
      models: ['X5']
    };
    const filteredCars = component['filterCars'](filter, carsTable.items);
    const findBmwX5 = filteredCars.find((car: CarTableItem) => car.model === 'X5');
    const findBmw328 = filteredCars.find((car: CarTableItem) => car.model === '328');
    const findAudi = filteredCars.find((car: CarTableItem) => car.brand === CarBrands.AUDI);
    expect(findBmwX5?.model).toEqual('X5');
    expect(findBmw328?.model).toEqual(undefined);
    expect(findAudi?.brand).toEqual(undefined);
  });
});
