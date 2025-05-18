import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RegisterantService } from 'src/app/services/registerant.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registrant-details',
  templateUrl: './registrant-details.component.html',
  styleUrls: ['./registrant-details.component.css']
})
export class RegistrantDetailsComponent {
  registerantId: string = '';
  registerant: any = null;

  constructor(private registerantService: RegisterantService, private route: ActivatedRoute) {
    this.registerantId = this.route.snapshot.paramMap.get('id') || '';
    this.getRegistrantDetails();
  }

  ngOnInit() {
    this.registerantId = this.route.snapshot.paramMap.get('id') || '';
    this.getRegistrantDetails();
  }

  getRegistrantDetails() {
    this.registerantService.getRegisterantById(this.registerantId).subscribe(
      (response: any) => {
        if (response) {
          this.registerant = response;
        }
        else {
          console.error('No registerant found with the given ID');
        }
      },
      (error: any) => {
        console.error('Error fetching registrant details:', error);
      }
    );
  }

  backToRegisterants() {
    this.registerantService.back();
  }
}
