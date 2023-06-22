import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeListComponent } from './theme-list/theme-list.component';
import { RecentPostsComponent } from './recent-posts/recent-posts.component';
import { SharedModule } from '../shared/shared.module';
import { ThemesComponent } from './themes.component';
import { CreateThemeComponent } from './create-theme/create-theme.component';
import { ThemesRoutingModule } from './themes-routing.module';
import { ThemeDetailComponent } from './theme-detail/theme-detail.component';
import { HomeComponent } from '../home/home.component';



@NgModule({
  declarations: [
    ThemeListComponent,
    RecentPostsComponent,
    ThemesComponent,
    CreateThemeComponent,
    ThemeDetailComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ThemesRoutingModule
  ]
})
export class ThemesModule { }
