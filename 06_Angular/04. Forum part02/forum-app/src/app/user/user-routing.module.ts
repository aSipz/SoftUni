import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthActivate } from '../shared/guards/auth.activate';

const routes: Routes = [
  {
    path: 'user/login',
    canActivate: [AuthActivate],
    component: LoginComponent,
    data: {
      title: 'Login',
      loginRequired: false
    }
  },
  {
    path: 'user/register',
    canActivate: [AuthActivate],
    component: RegisterComponent,
    data: {
      title: 'Register',
      loginRequired: false
    }
  },
  {
    path: 'user/logout',
    component: LogoutComponent,
    canActivate: [AuthActivate],
    data: {
      loginRequired: true
    }
  },
  {
    path: 'user/:id/profile',
    component: ProfileComponent,
    canActivate: [AuthActivate],
    data: {
      title: 'Profile',
      loginRequired: true
    }
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
