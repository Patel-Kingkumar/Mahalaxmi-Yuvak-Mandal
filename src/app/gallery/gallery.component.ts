import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit{

  years: any = ["All", "2023", "2022", "2021"];
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

  images_2023: any = [
    "assets/images/meeting_one.jpg",
    "assets/images/meeting_two.jpg",
    "assets/images/event_one.jpg",
    "assets/images/event_two.jpg"
  ];

  images_2022: any = [
    "assets/images/meeting_one.jpg",
    "assets/images/meeting_two.jpg"
  ];

  images_2021: any = [
    "assets/images/symbol_one.jpg",
    "assets/images/symbol_two.jpg"
  ];

  ngOnInit(): void {
    this.filterImages = this.allimages
  }




  onItemSelector(value: any) {
    this.select =  value;
    if (this.select == "2023") {
      this.filterImages = this.images_2023;
    } else if (this.select == "2022") {
      this.filterImages = this.images_2022;
    } else if (this.select == "2021") {
      this.filterImages = this.images_2021;
    } else {
      this.filterImages = this.allimages
    }
  }
}
