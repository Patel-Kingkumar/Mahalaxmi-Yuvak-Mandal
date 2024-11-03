import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'website';
  displayDiv: boolean = false;

  constructor(private toastr: ToastrService, @Inject(DOCUMENT) private dom: Document) { }
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
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}


toastVisible: boolean = false;
  toastPosition = { top: '0px', left: '0px' };

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (this.isTextElement(target)) {
      this.showWarningToast(event.clientX, event.clientY);
    }
  }

  private isTextElement(target: HTMLElement): boolean {
    const textElements = ['P', 'SPAN', 'DIV', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'A', 'LI'];
    return textElements.includes(target.tagName);
  }

  showWarningToast(x: number, y: number): void {
    this.toastPosition = {
      top: `${y}px`,
      left: `${x}px`
    };
    this.toastVisible = true;
    setTimeout(() => {
      this.toastVisible = false;
    }, 3000);
  }
  
}
