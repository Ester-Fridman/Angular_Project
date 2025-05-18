import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LessonsService } from 'src/app/services/lessons.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lesson-list',
  templateUrl: './lesson-list.component.html',
  styleUrls: ['./lesson-list.component.css']
})
export class LessonListComponent implements OnInit {
  lessons: any[] = [];
  selectedLesson: any = null;
  constructor(private lessonsService: LessonsService, private router: Router) { }

  ngOnInit(): void {
    this.getLessons();
  }

  getLessons() {
    this.lessonsService.getAllLessons().subscribe(
      (data) => {
        this.lessons = data;
      }
      , (error) => {
        console.error('Error fetching lessons:', error);
      }
    );
  }

  goToLessonDetails(id: number) {
    this.lessonsService.getLessonById(id).subscribe(
      (data) => {
        this.selectedLesson = data;
        //ניתוב לדף פרטי השיעור
        this.router.navigate([`/lessons/${id}`]);
      }
      , (error) => {
        console.error('Error fetching lesson details:', error);
        Swal.fire({
          icon: 'error',
          title: 'שגיאה',
          text: 'שגיאה בשרת, אנא נסה שוב מאוחר יותר.',
          confirmButtonText: 'אישור'
        });
      }
    );
  }

  isLessonExpired(startDate: string): boolean {
    const today = new Date();
    const lessonDate = new Date(startDate);
    return lessonDate < today; // בדיקה אם תאריך השיעור קטן מהיום
  }

  backToLogin(){
    this.lessonsService.back();
  }

}
