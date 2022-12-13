import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";
import {AngularFireModule} from '@angular/fire/compat';
import {AngularFireDatabaseModule} from '@angular/fire/compat/database';
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
//import { provideAuth } from "@angular/fire/auth";

import {AuthModule} from '@angular/fire/auth';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {environment} from 'src/environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MyMaterialModule} from './material-ui.module';
import { MenuTopComponent } from "./modules/menus/components/menu-top/menu-top.component";

import {AppModuleCourses} from './modules/courses/app.module';
import { AppModuleCommun } from './modules/commun/app.module';
import { AppModuleAuth } from './modules/authen/app.module';


@NgModule({
 declarations: [AppComponent, MenuTopComponent],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AuthModule,
    BrowserAnimationsModule,
    MyMaterialModule,
    AppModuleCourses,
    AppModuleCommun,
    AppModuleAuth,

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
