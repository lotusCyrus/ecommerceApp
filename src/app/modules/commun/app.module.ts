import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
 declarations: [
    HomeComponent,
    AboutComponent
  ],
  imports: [
    MyMaterialModule,
  ],

 exports:[HomeComponent],
  providers: [],
  bootstrap: []
})
export class AppModuleCommun { }
