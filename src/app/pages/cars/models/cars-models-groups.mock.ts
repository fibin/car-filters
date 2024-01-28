import { CarBrands } from './car-brands.interface';
import { CarsGroup } from '../components/cars-filters/models/cars-group.interface';

export const carModelsGroups: CarsGroup[] = [
    {
        brand: CarBrands.BMW,
        models: ['328', '528', 'X5', '428', 'X6'],
    },
    {
        brand: CarBrands.AUDI,
        models: ['A6 Allroad', 'A5', 'Q5', 'Q7', 'A4'],
    },
    {
        brand: CarBrands.KIA,
        models: ['Cerato', 'Ceed', 'Sportage', 'K5', 'RIO'],
    },
    {
        brand: CarBrands.RENAULT,
        models: ['Megane', 'Laguna', 'Duster', 'Logan'],
    },
    {
        brand: CarBrands.VW,
        models: ['Tiguan', 'Golf', 'Jetta', 'e-Golf', 'Passat'],
    },
];
