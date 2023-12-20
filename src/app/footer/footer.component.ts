import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  contactInfo: any = [
    { icon: "fa-solid fa-phone", label: "+91 8009522111" },
    { icon: "fa-solid fa-clock", label: "10:00 AM to 6:00 PM" },
    { icon: "fa-solid fa-location-dot", label: "Mahalaxmi Temple, Dumas, Surat" }
  ];

  // mainInfo: any = ["Cultural Services", "Hinduism Facts", "Meetings", "Events", "Blog"];

  moreInfo: any = ["Photo Gallery", "Trust Members", "Help"];

  reserveIcon: any = ["fa-brands fa-facebook-f", "fa-brands fa-twitter", "fa-brands fa-instagram", "fa-brands fa-whatsapp"];

  constructor(@Inject(DOCUMENT) private dom: Document) { }

  scrollToTop() {
    this.dom.body.scrollTop = 0;
    this.dom.documentElement.scrollTop = 0;
  }
}
