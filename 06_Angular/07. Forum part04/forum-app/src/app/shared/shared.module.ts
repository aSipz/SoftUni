import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LoaderComponent } from './loader/loader.component';
import { WelcomeMsgComponent } from './welcome-msg/welcome-msg.component';
import { AppEmailDirective } from './validators/app-email.directive';
import { ShortenPipe } from './pipes/shorten.pipe';
import { ElapsedTimePipe } from './pipes/elapsed-time.pipe';



@NgModule({
  declarations: [
    LoaderComponent,
    WelcomeMsgComponent,
    AppEmailDirective,
    ShortenPipe,
    ElapsedTimePipe
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    LoaderComponent,
    WelcomeMsgComponent,
    AppEmailDirective,
    ShortenPipe,
    ElapsedTimePipe
  ]
})
export class SharedModule { }
