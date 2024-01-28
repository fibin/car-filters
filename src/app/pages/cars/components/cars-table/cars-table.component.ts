import { AfterViewInit, ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { CarTableItem } from '../../models/cars-table-items.interface';
import { MatTableDataSource } from '@angular/material/table';
import { cars } from '../../models/cars-data.mock';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-cars-table',
  templateUrl: './cars-table.component.html',
  styleUrls: ['./cars-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarsTableComponent implements OnChanges, AfterViewInit{
  @Input() table: CarTableItem[] = [];
  @Input() displayColumns: string[] = [];
  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSource = new MatTableDataSource<CarTableItem>(cars);

  ngOnChanges(changes: SimpleChanges): void {
      if (changes['table']) {
        this.dataSource = new MatTableDataSource<CarTableItem>(changes['table'].currentValue);
        this.dataSource.paginator = this.paginator;
      }
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  trackByTableHeader(_index: number, header: string): string {
    return header;
  }
}
