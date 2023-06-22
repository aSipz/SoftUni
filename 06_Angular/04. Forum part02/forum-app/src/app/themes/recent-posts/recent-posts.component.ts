import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { IPost } from '../../shared/interfaces';

@Component({
  selector: 'app-recent-posts',
  templateUrl: './recent-posts.component.html',
  styleUrls: ['./recent-posts.component.css']
})
export class RecentPostsComponent {

  posts: IPost[] | null = null;
  errorFetchingData = false;

  constructor(private apiService: ApiService) {
    apiService.getPosts(5).subscribe({
      next: value => this.posts = value,
      error: err => {
        this.errorFetchingData = true;
        console.log(err);
      }
    });
  }
}
