import { NgModule } from '@angular/core';
import { MenuTopComponent } from './components/menu-top/menu-top.component';
import { MyMaterialModule } from 'src/app/material-ui.module';
@NgModule({
 declarations: [
    MenuTopComponent
  ],
  imports: [
  MyMaterialModule,
  ],


  exports:[MenuTopComponent],
  providers: [],
  bootstrap: []
})

export class AppModuleMenus { }
