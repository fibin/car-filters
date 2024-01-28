import { CarsTableItems } from './cars-table-items.interface';

export interface CarsTable {
    headers: string[];
    items: CarsTableItems[];
}
