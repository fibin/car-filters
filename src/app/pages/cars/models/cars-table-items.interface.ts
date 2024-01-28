import { CarBrands } from './car-brands.interface';
import { VehicleType } from './vehicle-type.enum';

export interface CarTableItem {
    brand: CarBrands;
    model: string;
    type: VehicleType;
    price: number;
}
