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
  length = 3;
  hideBtn: boolean = true;

  allimages: any = [
    "assets/images/event_one.jpg",
    "assets/images/event_two.jpg",
    "assets/images/meeting_one.jpg",
    "assets/images/meeting_two.jpg",
    "assets/images/symbol_one.jpg",
    "assets/images/symbol_two.jpg"
  ];

  images_2023: any = [
    "assets/images/2023/salgiri_one.jpg",
    "assets/images/2023/salgiri_two.jpg",
    "assets/images/2023/salgiri_three.jpg",
    "assets/images/2023/ganeshchaturthi_one.jpg",
    "assets/images/2023/ganeshchaturthi_two.jpg",
    "assets/images/2023/ganeshchaturthi_three.jpg",
    "assets/images/2023/navaratri_one.jpg",
    "assets/images/2023/navaratri_two.jpg",
    "assets/images/2023/navaratri_three.jpg",


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

  loadMore(len: number) {
    this.length += 2;
    console.log('filterImages  : ', this.filterImages.length);
    console.log('len  : ', this.length);
    if (this.length == this.filterImages.length) {
      this.hideBtn = false;
    }
  }
}
