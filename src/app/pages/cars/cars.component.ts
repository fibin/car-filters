import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';

import { carsTable, headers } from './models/cars-data.mock';
import { CarBrands } from './models/car-brands.interface';
import { carModelsGroups } from './models/cars-models-groups.mock';
import { VehicleType } from './models/vehicle-type.enum';
import { CarsTableItems } from './models/cars-table-items.interface';
import { CarFilters } from './components/cars-filters/models/car-filters.interface';
import { CarsGroup } from './components/cars-filters/models/cars-group.interface';
import { CarsTable } from './models/cars-table.interface';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarsComponent implements OnInit {
  tableData = carsTable;
  brands = Object.values(CarBrands);
  modelsGroup = carModelsGroups;
  vehicleTypes = Object.values(VehicleType);
  maxPrice = 999999;

  ngOnInit(): void {
    this.maxPrice = this.getMaxPrice();
  }

  filtersChanges(filters: CarFilters): void {
    this.filterModelsByBrand(filters?.brands || []);
    const filteredCars = this.filterCars(filters, carsTable.items);
    const tempCarsTable: CarsTable = {
      headers: headers,
      items: filteredCars,
    };
    this.tableData = tempCarsTable;
  }

  private filterCars(filters: CarFilters, cars: CarsTableItems[]): CarsTableItems[] {
    return cars.filter((car: CarsTableItems) =>
      (!filters?.brands || filters?.brands?.length === 0 || filters.brands.includes(car.brand)) &&
      (!filters.models || filters.models.length === 0 || filters.models.includes(car.model)) &&
      (!filters.vehicleTypes || filters.vehicleTypes.length === 0 || filters.vehicleTypes.includes(car.type)) &&
      (!filters.priceRangeFrom || car.price >= filters.priceRangeFrom) &&
      (!filters.priceRangeTo || car.price <= filters.priceRangeTo)
    );
  }

  private getMaxPrice(): number {
    const mostExpensiveCar = this.tableData?.items?.reduce((previous: CarsTableItems, current: CarsTableItems) => (previous && previous?.price > current?.price) ? previous : current);
    return mostExpensiveCar?.price || 0;
  }

  private filterModelsByBrand(brands: string[]): void {
    if (brands?.length > 0) {
      const carGroups: CarsGroup[] = [];
      brands.forEach((brand: string) => {
        const findCarGroup = carModelsGroups.find((carGroup: CarsGroup) => carGroup.brand === brand);
        if (findCarGroup) {
          carGroups.push(findCarGroup);
        }
      });
      this.modelsGroup = carGroups;
    } else {
      this.modelsGroup = carModelsGroups;
    }
  }
}
