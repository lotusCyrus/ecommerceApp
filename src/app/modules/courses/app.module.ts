import { NgModule} from '@angular/core';
import { CoursesComponent } from './components/courses/courses.component';
import { MyMaterialModule } from 'src/app/material-ui.module';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
 declarations: [
    CoursesComponent
  ],
imports:[BrowserModule, CommonModule,MyMaterialModule],
exports:[CoursesComponent],

  providers: [],
  bootstrap: []
})
export class AppModuleCourses { }
