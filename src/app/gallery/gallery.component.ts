import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit{

  years: any = ["All", "2024", "2023", "2022", "2021"];
  select: any = "all";
  filterImages: any = "";
  length = 3;
  hideBtn: boolean = true;
  visibleImages: any = "";

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

  images_2024: any = [
    "assets/images/2024/salgiri_one.jpeg",
    "assets/images/2024/ganeshchaturthi_one.jpeg",
    "assets/images/2024/navaratri_one.jpeg",
    "assets/images/2024/salgiri_one.jpeg",
    "assets/images/2024/ganeshchaturthi_one.jpeg",
    "assets/images/2024/navaratri_one.jpeg",
    "assets/images/2024/salgiri_one.jpeg",
    "assets/images/2024/ganeshchaturthi_one.jpeg",
    "assets/images/2024/navaratri_one.jpeg",
    "assets/images/2024/navaratri_three.jpeg"
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
    this.visibleImages = this.filterImages.slice(0, 3);
  }




  onItemSelector(event: any) {
    const selectElement = event.target as HTMLSelectElement;
    this.select = selectElement.value;
    this.hideBtn = true;
  
    if (this.select === "2024") {
      this.visibleImages = this.images_2024;
      this.visibleImages.length = 3;
    } else if (this.select === "2023") {
      this.visibleImages = this.images_2023;
      this.visibleImages.length = 3;
    } else if (this.select === "2022") {
      this.visibleImages = this.images_2022;
      this.visibleImages.length = 3;
    } else if (this.select === "2021") {
      this.visibleImages = this.images_2021;
      this.visibleImages.length = 3;
    } else {
      this.visibleImages = this.allimages;
      this.visibleImages.length = 3;
    }
  }
  

  loadMore() {
    const nextImages = this.allimages.slice(this.visibleImages.length, this.visibleImages.length + this.length);
    this.visibleImages = [...this.visibleImages, ...nextImages];
    if (this.visibleImages.length == this.filterImages.length) {
      this.hideBtn = false;
    }
  }
}
