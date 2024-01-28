import { CarBrands } from './car-brands.interface';
import { VehicleType } from './vehicle-type.enum';

export interface CarsTableItems {
    brand: CarBrands;
    model: string;
    type: VehicleType;
    price: number;
}
