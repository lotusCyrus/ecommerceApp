import { Component, OnInit } from '@angular/core';

import { Subscriber, Subscription } from "rxjs";

import { CategoryService } from "src/app/modules/commun/services/category.service";

import { CourseService } from "src/app/modules/courses/services/course.service";

import{ mergeMap,map} from "rxjs/operators";
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})

export class CoursesComponent implements OnInit {

  categories:any[] = [];
     courses:any[] = [];

  constructor(private serviceCategory:CategoryService, private courseService:CourseService ) { }

   ngOnInit(){
    this.serviceCategory.getAllCategories()
                        .pipe(
                          mergeMap(categories=>this.courseService.getAllCourses().pipe(
                            map(courses=>[categories,courses])
                          ))).subscribe(([categories,courses])=>{
                            this.categories=categories;
                            this.courses=courses;
                            console.log(courses);
                          })

}
}
