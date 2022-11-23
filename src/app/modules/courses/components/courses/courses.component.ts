import { Component, OnInit } from '@angular/core';

import { Subscriber, Subscription } from "rxjs";

import { CategoryService } from "src/app/modules/commun/services/category.service";


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})

export class CoursesComponent implements OnInit {

  categories:any[] = [];

  constructor(private serviceCategory:CategoryService) { }

  ngOnInit(){
    this.serviceCategory.getAllCategories()
                         .subscribe(categories=>this.categories=categories );
  }

}
