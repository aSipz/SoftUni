import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { ApiService } from 'src/app/api.service';
import { ITheme } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent {

  @Input() username?: string;
  @Input() themeId?: string;

  @Output() newPostEvent = new EventEmitter<ITheme>();

  @ViewChild('form') form!: NgForm;

  constructor(private apiService: ApiService, private router: Router) { }

  handleSubmit(): void {

    if (this.form.invalid) {
      return;
    }

    const { postText } = this.form.value;

    this.apiService.addPost(postText, this.themeId!).subscribe({
      next: (res) => {
        this.newPostEvent.emit(res as ITheme);
        this.form.resetForm();
      },
      error: err => console.log(err)
    });

  }
}
