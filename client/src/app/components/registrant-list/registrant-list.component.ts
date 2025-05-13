import { Component, OnInit } from '@angular/core';
import { RegisterantService } from 'src/app/services/registerant.service';

@Component({
  selector: 'app-registrant-list',
  templateUrl: './registrant-list.component.html',
  styleUrls: ['./registrant-list.component.css']
})
export class RegistrantListComponent implements OnInit {
  constructor(private registrantService: RegisterantService) { }

  ngOnInit(): void {
    this.getAllRegisterants();
  }

  registrants: any[] = [];
  rowData: any[] = [];

  // הצגת פרטי כל הנרשמות בתוך טבלה ע"י ימוש ב ag-grid
  // הגדרת משתנים
columnDefs = [
  { field: 'fullName', headerName: 'שם מלא', sortable: true, filter: true },
  { field: 'phone', headerName: 'טלפון', sortable: true, filter: true },
  { field: 'idNumber', headerName: 'תעודת זהות', sortable: true, filter: true },
  { field: 'lessonId', headerName: 'מזהה שיעור', sortable: true, filter: true },
  { field: 'price', headerName: 'מחיר', sortable: true, filter: true },
  { field: 'paid', headerName: 'שולם', sortable: true, filter: true }
];  

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
  ngAfterViewInit(): void {
  const ariaDescription = document.querySelector('.ag-aria-description-container');
  if (ariaDescription) {
    ariaDescription.remove();
  }
}
}
