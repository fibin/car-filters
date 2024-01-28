import { ChangeDetectionStrategy, Component, OnInit, Input, Output, EventEmitter, } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CarsGroup } from './models/cars-group.interface';
import { CarFilters } from './models/car-filters.interface';

@Component({
  selector: 'app-cars-filters',
  templateUrl: './cars-filters.component.html',
  styleUrls: ['./cars-filters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarsFiltersComponent implements OnInit {

  @Input() brands: string[];
  @Input() models: CarsGroup[];
  @Input() vehicleTypes: string[];
  @Input() maxPrice: number = 0;

  @Output() filtersChanges = new EventEmitter<CarFilters>();

  form: FormGroup;

  ngOnInit(): void {
    this.form = this.createForm();
  }

  trackByBrand(_index: number, option: string): string {
    return option;
  }

  filterSelected(): void {
    if (this.form.valid) {
      this.filtersChanges.emit(this.form.getRawValue());
    }
  }

  priceRangeChanged(): void {
    const priceRangeFrom = this.form.controls['priceRangeFrom'].value;
    const priceRangeTo = this.form.controls['priceRangeTo'].value;
    if (priceRangeFrom > priceRangeTo) {
      this.form.controls['priceRangeTo'].setErrors({'incorrect': true});
      this.form.controls['priceRangeTo'].markAsTouched();
    } else {
      this.form.controls['priceRangeTo'].setErrors({'incorrect': null});
      this.form.controls['priceRangeTo'].updateValueAndValidity();
    }
    this.filterSelected();
  }

  trackByValue(_index: number, value: string): string {
    return value;
  }

  trackByModelGroup(_index: number, group: CarsGroup): string {
    return group?.brand;
  }

  private createForm(): FormGroup {
    const formGroup = new FormGroup({
      brands: new FormControl([]),
      models: new FormControl([]),
      vehicleTypes: new FormControl([]),
      priceRangeFrom: new FormControl(0),
      priceRangeTo: new FormControl(this.maxPrice > 0 ? this.maxPrice : 999999),
    });

    return formGroup;
  }
}
