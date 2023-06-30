import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';
import { ProfileComponent } from './profile/profile.component';
import { authActivate } from '../shared/guards/auth.activate';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [authActivate],
    data: {
      title: 'Login',
      loginRequired: false
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [authActivate],
    data: {
      title: 'Register',
      loginRequired: false
    }
  },
  {
    path: 'logout',
    component: LogoutComponent,
    canActivate: [authActivate],
    data: {
      loginRequired: true
    }
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [authActivate],
    data: {
      title: 'Profile',
      loginRequired: true
    }
  },
  {
    path: 'profile/edit',
    component: EditProfileComponent,
    canActivate: [authActivate],
    data: {
      title: 'Edit Profile',
      loginRequired: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
