import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AngularFireModule} from '@angular/fire/compat';
import {AngularFireDatabaseModule} from '@angular/fire/compat/database';
import {AuthModule} from '@angular/fire/auth';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {environment} from 'src/environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import MaterialModule} from './material-ui.module';
//import { AppModuleAdmin } from './modules/admin/app.module.ts';

@NgModule({
 declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AuthModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    MyMaterialModule,
    AppModuleAdmin,
    AppModuleAuth,
    AppModuleCommun,
    AppModuleCourses,
    AppModuleMenus
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
