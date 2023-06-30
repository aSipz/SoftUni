import { Component, Input } from '@angular/core';
import { IPost } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-theme-post',
  templateUrl: './theme-post.component.html',
  styleUrls: ['./theme-post.component.css']
})
export class ThemePostComponent {

  @Input() post?: IPost; 

}
