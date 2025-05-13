import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LessonsService } from 'src/app/services/lessons.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lesson-details',
  templateUrl: './lesson-details.component.html',
  styleUrls: ['./lesson-details.component.css']
})
export class LessonDetailsComponent {
  lessonId: number = 0;
  lesson: any = null;

  constructor(private lessonsService: LessonsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.lessonId = Number(this.route.snapshot.paramMap.get('id'));
    if (isNaN(this.lessonId)) {
      //הצגת alert יפה עם הודעה מתאימה
      console.error('Invalid lesson ID');
      Swal.fire({
        icon: 'error',
        title: 'שגיאה',
        text: 'מזהה שיעור לא חוקי',
        confirmButtonText: 'אישור'
      });
      return;
    }
    this.getLessonById(this.lessonId);
  }

  getLessonById(id: number) :void{
    this.lessonsService.getLessonById(id).subscribe(
      (response: any) => {
        if (response) {
          this.lesson = response;
        }
        else {
          console.error('No lesson found with the given ID');
        }
      },
      (error) => {
        console.error('Error fetching lesson details:', error);
      }
    );
  }

  backToLessons() {
    window.history.back();
  }
}