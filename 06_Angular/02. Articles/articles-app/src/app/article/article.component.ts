import { Component, Input } from '@angular/core';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  private symbols: number = 250;

  @Input() article!: Article;
  @Input() articleDesc!: string;

  descToShow!: string;
  articleDescLen!: number;

  showReadMoreBtn: boolean = true;
  showHideBtn: boolean = false;
  imageIsShown: boolean = false;

  imageButtonTitle: string = 'Show image';

  constructor() {
    this.articleDescLen = 0;
    this.descToShow = '';
  }

  readMore(): void {
    this.articleDescLen += this.symbols;
    if (this.articleDescLen >= this.articleDesc.length) {
      this.showReadMoreBtn = false;
      this.showHideBtn = true;
    }
    this.descToShow = this.articleDesc.slice(0, this.articleDescLen);
  }

  hideDesc(): void {
    this.showReadMoreBtn = true;
    this.showHideBtn = false;
    this.articleDescLen = 0;
    this.descToShow = '';
  }

  toggleImage() {
    this.imageIsShown = !this.imageIsShown;
    this.imageIsShown ? this.imageButtonTitle = 'Hide Image' : this.imageButtonTitle = 'Show Image';
  }
}
