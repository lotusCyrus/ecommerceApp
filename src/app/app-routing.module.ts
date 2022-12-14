import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./modules/commun/components/home/home.component";
import { CoursesComponent } from "./modules/courses/components/courses/courses.component";
import { LoginComponent } from "./modules/authen/components/login/login.component";
import { AboutComponent } from "./modules/commun/components/about/about.component";
import { MyMaterialModule } from 'src/app/material-ui.module';

const routes: Routes =
 [{
    path:'',

    component:HomeComponent

},

{
  path:'Courses',
  component:CoursesComponent
},

{
  path:'Login',
  component:LoginComponent
},
{
  path:'About',
  component:AboutComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), MyMaterialModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
