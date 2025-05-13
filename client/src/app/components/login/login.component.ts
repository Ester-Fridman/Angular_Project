import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StaffService } from 'src/app/services/staff.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(private fb: FormBuilder, private staffService: StaffService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  login() {
    if (this.loginForm.valid) {
      const formData = this.loginForm.value;
      console.log('User Logged In:', formData);

      this.staffService.checkUserExists(formData.username, formData.password).subscribe(
        (response) => {
          if (response.success) {
            localStorage.setItem('user', JSON.stringify({ username: formData.username, role: response.role })); // שמירת פרטי המשתמש
            console.log('Login successful, role:', response.role);
            if (response.role === 'מורה') {
              this.router.navigate(['/lessons']);
            } else if (response.role === 'מזכירה') {
              this.router.navigate(['/registrations']);
            }
          } else {
            console.log('Login failed');
            Swal.fire({
              icon: 'error',
              title: 'שגיאה',
              text: 'שם המשתמש או הסיסמה שגויים!',
              confirmButtonText: 'אישור'
            });
          }
        },
        (error) => {
          console.error('Error during login:', error);
          Swal.fire({
            icon: 'error',
            title: 'שגיאה',
            text: 'שגיאה בשרת, אנא נסה שוב מאוחר יותר.',
            confirmButtonText: 'אישור'
          });
        }
      );
    } else {
      console.log('Form is not valid');
      Swal.fire({
        icon: 'warning',
        title: 'שגיאה',
        text: 'אנא מלא את כל השדות הנדרשים.',
        confirmButtonText: 'אישור'
      });
    }
      //ניקוי שדות הטופס
    this.loginForm.reset();
  }

}