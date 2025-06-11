import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterantService {

  constructor(private http: HttpClient) { }

  getAllRegisterants(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/api/registerant');
  }

  getRegisterantById(id: string): any {
    return this.http.get<any>(`http://localhost:3000/api/registerant/${id}`);
  }

 getAllRegisterantsOfLesson(lessonId: number): Observable<Array<any>> {
  return this.http.get<any[]>(`http://localhost:3000/api/registerant/lesson/${lessonId}`);
}

  back(): void {
    window.history.back();
  } 

}
