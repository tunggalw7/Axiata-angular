import { Component, OnInit } from '@angular/core';
import { MyFilterPipe } from '../../../helper/table-filter.pipe';

@Component({
  selector: 'app-all-tickets',
  templateUrl: './all-tickets.component.html',
  styleUrls: ['./all-tickets.component.scss']
})
export class AllTicketsComponent implements OnInit {

  filterBy: string = "";
  filterValue: string;
  dataTable: any[];

  tickets: any[] = [
    { id: "ABC123", name: "Bronet Axis", reporter: "Ikhsan", createDate: "2020-09-04", status: "success", activity : "Initial Ticket", product : "AXIS" },
    { id: "ABC234", name: "Sisnet Axis", reporter: "Sunarto", createDate: "2020-06-01", status: "success", activity : "Approved by BRM", product : "PREPAID" },
    { id: "ABC345", name: "Internet Axis", reporter: "Sunardo", createDate: "2020-09-02", status: "warning", activity : "Waiting Approval", product : "POSTPAID" },
    { id: "ABC456", name: "Gamers Package", reporter: "Sunjaya", createDate: "2020-07-19", status: "danger", activity : "Withdrew by BRM", product : "VAS" },
    { id: "ABC567", name: "Paket Mantep", reporter: "Kimihime", createDate: "2020-08-22", status: "success", activity : "Approved by Tester", product : "AXIS" },
  ];

  constructor(private filterPipe : MyFilterPipe) { }

  ngOnInit(): void {
    this.dataTable = this.tickets;
  }

  search() {
    debugger;
      this.dataTable = this.filterPipe.transform(this.tickets, this.filterValue, this.filterBy);
  }

  reset(){
    this.dataTable = this.tickets;
    this.filterValue = "";
  }

}
