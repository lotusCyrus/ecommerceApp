import { NgModule} from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { MyMaterialModule  } from "src/app/material-ui.module";
@NgModule({
 declarations: [
    LoginComponent
  ],
  imports: [ MyMaterialModule ],
  exports:[LoginComponent] ,
  providers: [] ,
  bootstrap: []
})
export class AppModuleAuth { }
