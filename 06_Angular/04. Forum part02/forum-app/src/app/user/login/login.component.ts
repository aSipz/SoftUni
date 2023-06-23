import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private router: Router,
    private userService: UserService,
    private activatedRoute: ActivatedRoute
  ) { }

  loginHandler(): void {
    this.userService.user = {
      themes: [],
      posts: [],
      _id: '1',
      tel: '0883475039',
      email: 'gaaa@ga.ga',
      username: 'gaga',
      password: '123',
      created_at: '1',
      updatedAt: '1',
      __v: 0,
    };

    const returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || '/';

    this.router.navigate([returnUrl]);
  }

}
