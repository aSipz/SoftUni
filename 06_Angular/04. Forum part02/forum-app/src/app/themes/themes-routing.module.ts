import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThemesComponent } from './themes.component';
import { CreateThemeComponent } from './create-theme/create-theme.component';
import { ThemeDetailComponent } from './theme-detail/theme-detail.component';
import { themeResolver } from '../shared/resolvers/theme.resolver';

const routes: Routes = [
  {
    path: 'themes',
    component: ThemesComponent,
    data: {
      title: 'Themes'
    }
  },
  {
    path: 'themes/create',
    component: CreateThemeComponent,
    data: {
      title: 'New Theme'
    }
  },
  {
    path: 'themes/:id/details',
    resolve: {
      theme: themeResolver
    },
    component: ThemeDetailComponent,
    data: {
      title: 'Theme Details'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemesRoutingModule { }
