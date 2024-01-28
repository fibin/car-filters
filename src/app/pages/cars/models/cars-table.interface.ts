import { CarTableItem } from './cars-table-items.interface';

export interface CarsTable {
    headers: string[];
    items: CarTableItem[];
}
