import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit{

  years: any = ["all", "a", "b", "c"];
  select: any = "all";
  filterImages: any = "";

  allimages: any = [
    "assets/images/event_one.jpg",
    "assets/images/event_two.jpg",
    "assets/images/meeting_one.jpg",
    "assets/images/meeting_two.jpg",
    "assets/images/symbol_one.jpg",
    "assets/images/symbol_two.jpg"
  ];

  aimages: any = [
    "assets/images/meeting_one.jpg",
    "assets/images/meeting_two.jpg",
    "assets/images/event_one.jpg",
    "assets/images/event_two.jpg"
  ];

  bimages: any = [
    "assets/images/meeting_one.jpg",
    "assets/images/meeting_two.jpg"
  ];

  cimages: any = [
    "assets/images/symbol_one.jpg",
    "assets/images/symbol_two.jpg"
  ];

  ngOnInit(): void {
    this.filterImages = this.allimages
  }




  onItemSelector(value: any) {
    this.select =  value;
    if (this.select == "a") {
      this.filterImages = this.aimages;
    } else if (this.select == "b") {
      this.filterImages = this.bimages;
    } else if (this.select == "c") {
      this.filterImages = this.cimages;
    } else {
      this.filterImages = this.allimages
    }
  }
}
