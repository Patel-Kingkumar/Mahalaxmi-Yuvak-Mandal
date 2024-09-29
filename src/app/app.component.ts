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
    this.dom.body.scrollTop = 0;
    this.dom.documentElement.scrollTop = 0;
  }

  // @HostListener('document:click', ['$event'])
  // onDocumentClick(event: MouseEvent): void {
  //   const target = event.target as HTMLElement;
  //   if (this.isTextElement(target)) {
  //     this.showWarningToast();
  //   }
  // }

  // private isTextElement(target: HTMLElement): boolean {
  //   const textElements = ['P', 'SPAN', 'DIV', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'A', 'LI'];
  //   return textElements.includes(target.tagName);
  // }

  // showWarningToast(): void {
  //   this.toastr.info('Content is protected!', 'Info', {
  //     progressBar: true,
  //   });
  // }
  
}
