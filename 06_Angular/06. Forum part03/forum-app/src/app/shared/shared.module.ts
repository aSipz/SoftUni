import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LoaderComponent } from './loader/loader.component';
import { WelcomeMsgComponent } from './welcome-msg/welcome-msg.component';
import { AppEmailDirective } from './validators/app-email.directive';



@NgModule({
  declarations: [
    LoaderComponent,
    WelcomeMsgComponent,
    AppEmailDirective
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    LoaderComponent,
    WelcomeMsgComponent,
    AppEmailDirective
  ]
})
export class SharedModule { }
