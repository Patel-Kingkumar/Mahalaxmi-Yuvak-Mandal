import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { scan, takeWhile, tap } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'website';

  constructor(@Inject(DOCUMENT) private dom: Document) { }

  scrollToTop() {
    this.dom.body.scrollTop = 0;
    this.dom.documentElement.scrollTop = 0;
  }
}
