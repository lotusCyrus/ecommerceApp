import { NgModule} from '@angular/core';
import { CoursesComponent } from './components/courses/courses.component';

import { MyMaterialModule } from 'src/app/material-ui.module';

@NgModule({
 declarations: [
    CoursesComponent
  ],
  imports: [MyMaterialModule],

  providers: [],
  bootstrap: []
})
export class AppModuleCourses { }
