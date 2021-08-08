import {
  AfterViewInit,
  Component,
  Input, OnChanges, SimpleChanges,
  ViewChild
} from '@angular/core';
import {Customer} from "../../../model/RestaurantModel";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-all-customers',
  templateUrl: './all-customers.component.html',
  styleUrls: ['./all-customers.component.less']
})
export class AllCustomersComponent implements AfterViewInit, OnChanges {

  @Input()
  customers!: Customer[];

  @ViewChild(MatSort)
  sort: MatSort = new MatSort();

  columnNames: string[] = ['firstName', 'lastName', 'phoneNumber'];

  tableDataSource = new MatTableDataSource(this.customers);

  ngAfterViewInit(): void {
    this.tableDataSource.sort = this.sort;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
}
