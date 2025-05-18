import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LessonsService {

  constructor(private http: HttpClient) { }

  getAllLessons(): Observable<any[]>  {
    return this.http.get<any[]>('http://localhost:3000/api/lessons');
  }

  getLessonById(id: number): Observable<any> {
    return this.http.get<any>(`http://localhost:3000/api/lessons/${id}`);
  }

  back(){
     window.history.back();
  }
}
