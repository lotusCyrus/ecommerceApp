import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/compat/database';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
   export class AppComponent implements OnInit {

	constructor(private db:AngularFireDatabase)
	{
    
	}
  title = 'ecommerce';
  ngOnInit()
  {
  	this.db.list('/courses').valueChanges()
  	                 .subscribe(courses=>console.log(courses)); 
  }
}
