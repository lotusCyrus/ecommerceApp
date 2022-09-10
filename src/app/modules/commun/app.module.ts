import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import {MyMaterialModule} from 'src/app/material-ui.module';

@NgModule({
 declarations: [
    HomeComponent,
    AboutComponent
  ],
  imports: [
    MyMaterialModule,
  ],

 exports:[HomeComponent, AboutComponent],
  providers: [],
  bootstrap: []
})
export class AppModuleCommun { }
