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
    "assets/images/all/salgiri_one.jpg",
    "assets/images/all/salgiri_two.jpg",
    "assets/images/all/salgiri_three.jpg",
    "assets/images/all/ganeshchaturthi_one.jpg",
    "assets/images/all/ganeshchaturthi_two.jpg",
    "assets/images/all/ganeshchaturthi_three.jpg",
    "assets/images/all/navaratri_one.jpg",
    "assets/images/all/navaratri_two.jpg",
    "assets/images/all/navaratri_three.jpg"
  ];

  images_2023: any = [
    "assets/images/2023/salgiri_one.jpg",
    "assets/images/2023/ganeshchaturthi_one.jpg",
    "assets/images/2023/navaratri_one.jpg",
    "assets/images/2022/salgiri_one.jpg",
    "assets/images/2022/ganeshchaturthi_one.jpg",
    "assets/images/2022/navaratri_one.jpg",
    "assets/images/2021/salgiri_one.jpg",
    "assets/images/2021/ganeshchaturthi_one.jpg",
    "assets/images/2021/navaratri_one.jpg",
    "assets/images/2021/navaratri_three.jpg"
  ];

  images_2022: any = [
    "assets/images/2022/salgiri_one.jpg",
    "assets/images/2022/salgiri_two.jpg",
    "assets/images/2022/salgiri_three.jpg",
    "assets/images/2022/ganeshchaturthi_one.jpg",
    "assets/images/2022/ganeshchaturthi_two.jpg",
    "assets/images/2022/ganeshchaturthi_three.jpg",
    "assets/images/2022/navaratri_one.jpg",
    "assets/images/2022/navaratri_two.jpg",
    "assets/images/2022/navaratri_three.jpg"
  ];

  images_2021: any = [
    "assets/images/2021/salgiri_one.jpg",
    "assets/images/2021/salgiri_two.jpg",
    "assets/images/2021/salgiri_three.jpg",
    "assets/images/2021/ganeshchaturthi_one.jpg",
    "assets/images/2021/ganeshchaturthi_two.jpg",
    "assets/images/2021/ganeshchaturthi_three.jpg",
    "assets/images/2021/navaratri_one.jpg",
    "assets/images/2021/navaratri_two.jpg",
    "assets/images/2021/navaratri_three.jpg"
  ];

  ngOnInit(): void {
    this.filterImages = this.allimages
  }




  onItemSelector(value: any) {
    this.length = 3;
    this.select =  value;
    this.hideBtn = true;
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
