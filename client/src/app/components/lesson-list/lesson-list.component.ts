import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LessonsService } from 'src/app/services/lessons.service';
import { RegisterantService } from 'src/app/services/registerant.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lesson-list',
  templateUrl: './lesson-list.component.html',
  styleUrls: ['./lesson-list.component.css']
})
export class LessonListComponent implements OnInit {
  lessons: any[] = [];
  selectedLesson: any = null;
  lessonFullStatus: { [lessonId: number]: boolean } = {};

  constructor(private lessonsService: LessonsService, private registerantService: RegisterantService, private router: Router) { }

  ngOnInit(): void {
    this.getLessons();
  }

  getLessons() {
    this.lessonsService.getAllLessons().subscribe(
      (data) => {
        this.lessons = data;
        this.checkIfLessonsAreFull();
      }
      , (error) => {
        console.error('Error fetching lessons:', error);
      }
    );
  }

  checkIfLessonsAreFull() {
  this.lessons.forEach(lesson => {
    this.registerantService.getAllRegisterantsOfLesson(lesson.id).subscribe(registerants => {
      this.lessonFullStatus[lesson.id] = registerants.length >= 10;
    }, error => {
      console.error('Error fetching registrants for lesson', lesson.id, error);
      this.lessonFullStatus[lesson.id] = false;
    });
  });
}

  goToLessonDetails(id: number) {
    this.lessonsService.getLessonById(id).subscribe(
      (data) => {
        this.selectedLesson = data;
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

  // async isLessonFull(lesson: any): Promise<boolean> {
  //   const registerants = await this.registerantService.getAllRegisterantsOfLesson(lesson.id).toPromise();
  //   console.log(registerants);
  //   return !!registerants && registerants.length >= 10; // בדיקה אם מספר הנרשמים גדול או שווה למספר המקסימלי
    
  // }
  
  backToLogin(){
    this.lessonsService.back();
  }

}
