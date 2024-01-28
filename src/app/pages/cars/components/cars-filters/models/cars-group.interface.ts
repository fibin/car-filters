import { CarBrands } from '../../../models/car-brands.interface';

export interface CarsGroup {
    disabled?: boolean;
    brand?: CarBrands;
    models?: string[];
}
