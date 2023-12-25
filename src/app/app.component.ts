import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'website';
  displayDiv: boolean = false;

  constructor(@Inject(DOCUMENT) private dom: Document) { }
  ngOnInit(): void {

  }
  @HostListener("window:scroll", [])onWindowScroll() {
    let windowHeight = this.dom.documentElement.scrollTop;
    if(windowHeight > 500) {
      this.displayDiv = true;
    } else {
      this.displayDiv = false;
    }
 }
  scrollToTop() {
    this.dom.body.scrollTop = 0;
    this.dom.documentElement.scrollTop = 0;
  }
}
