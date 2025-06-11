import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterantService } from 'src/app/services/registerant.service';

@Component({
  selector: 'app-registrant-list',
  templateUrl: './registrant-list.component.html',
  styleUrls: ['./registrant-list.component.css']
})
export class RegistrantListComponent implements OnInit {
  constructor(private registrantService: RegisterantService, private router: Router) { }

  ngOnInit(): void {
    this.getAllRegisterants();
  }

  registrants: any[] = [];
  rowData: any[] = [];

  columnDefs = [
    {
      headerName: 'פרטים',
      cellRenderer: (params: any) => {
        return `<button class="details-btn">פרטים</button>`;
      },
      width: 100,
      suppressMenu: true,
      sortable: false,
      filter: false
    },
    { field: 'idNumber', headerName: 'תעודת זהות', sortable: true, filter: true },
    { field: 'phone', headerName: 'טלפון', sortable: true, filter: true },

    { field: 'fullName', headerName: 'שם מלא', sortable: true, filter: true },

  ];

  defaultColDef = {
    flex: 1,
    minWidth: 100,
    filter: true,
    sortable: true,
    resizable: true
  };

  rowClassRules = {
    'unpaid-row': (params: any) => params.data && !params.data.paid
  };

  getAllRegisterants() {
    this.registrantService.getAllRegisterants().subscribe(
      (response: any) => {
        if (response) {
          this.registrants = response;
          this.rowData = this.registrants;
          console.log('Registrants:', this.registrants);
        } else {
          console.error('No registrants found');
        }
      },
      (error: any) => {
        console.error('Error fetching registrants:', error);
      }
    );
  }

  onCellClicked(event: any) {
    if (event.colDef.headerName === 'פרטים' && event.event.target.classList.contains('details-btn')) {
      this.showRegistrantDetails(event.data);
    }
  }

  showRegistrantDetails(registrant: any) {
    this.router.navigate(['/registrant', registrant.idNumber]);
  }
}
