import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LoaderComponent } from './loader/loader.component';
import { WelcomeMsgComponent } from './welcome-msg/welcome-msg.component';



@NgModule({
  declarations: [
    LoaderComponent,
    WelcomeMsgComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    LoaderComponent,
    WelcomeMsgComponent
  ]
})
export class SharedModule { }
