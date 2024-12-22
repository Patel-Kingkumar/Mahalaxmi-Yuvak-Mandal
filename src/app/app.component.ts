import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'website';
  displayDiv: boolean = false;

  constructor(
    private toastr: ToastrService,
    @Inject(DOCUMENT) private dom: Document
  ) {}
  ngOnInit(): void {}
  @HostListener('window:scroll', []) onWindowScroll() {
    let windowHeight = this.dom.documentElement.scrollTop;
    if (windowHeight > 500) {
      this.displayDiv = true;
    } else {
      this.displayDiv = false;
    }
  }
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
