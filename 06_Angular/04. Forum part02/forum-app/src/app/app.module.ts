import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ThemeListComponent } from './theme-list/theme-list.component';
import { RecentPostsComponent } from './recent-posts/recent-posts.component';
import { ThemesComponent } from './themes/themes.component';
import { SharedModule } from './shared/shared.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [
    AppComponent,
    ThemeListComponent,
    RecentPostsComponent,
    ThemesComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
