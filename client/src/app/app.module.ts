import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { LessonListComponent } from './components/lesson-list/lesson-list.component';
import { LessonDetailsComponent } from './components/lesson-details/lesson-details.component';
import { RegistrantListComponent } from './components/registrant-list/registrant-list.component';
import { RegistrantDetailsComponent } from './components/registrant-details/registrant-details.component';
import { ReactiveFormsModule } from '@angular/forms'; 
import { AuthGuard } from './auth.guard';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; 
import { AgGridModule } from 'ag-grid-angular';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'lessons', component: LessonListComponent, canActivate: [AuthGuard] },
  { path: 'registrations', component: RegistrantListComponent, canActivate: [AuthGuard] },
  {path: 'lessons/:id', component: LessonDetailsComponent, canActivate: [AuthGuard]},
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LessonListComponent,
    LessonDetailsComponent,
    RegistrantListComponent,
    RegistrantDetailsComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AgGridModule // הגדרת רכיבי ag-grid
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
