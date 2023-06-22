import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivationStart, Router } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'forum-app';

  constructor(
    private router: Router,
    private pageTitle: Title
  ) {
    this.router.events.pipe(
      filter((e): e is ActivationStart => e instanceof ActivationStart),
      map(e => e.snapshot.data['title'])
    ).subscribe((routeTitle) => {
      let title = 'SoftUni Forum';
      if (routeTitle) {
        title = `${title} - ${routeTitle}`;
      }
      this.pageTitle.setTitle(title);
    });
  }
}
