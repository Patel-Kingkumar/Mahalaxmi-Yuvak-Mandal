import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  heading: any = ["Identity", "Founders", "Missions"];
  description: any = [
    "We're a top Hinduism website, offering essential information and news from the world of this religion. Explore detailed insights and stay updated on all things Hinduism with us. Join our community for a deeper understanding of this ancient tradition.",
    "Established by prominent figures in the Hindu community, our organization thrives under their leadership. They remain integral to our core values and operations, shaping our website's offerings and direction. Join us as we continue their legacy and share the richness of Hinduism with the world.",
    "Explore essential information and news on Hinduism through our premier website. Stay updated and delve into detailed insights about this ancient tradition. Join our community for a deeper understanding of Hinduism's richness."
  ]
  text: any = "Discover Hinduism's essentials and latest news under esteemed guidance, fostering a deeper connection within our vibrant community. Join us to delve into this ancient tradition and stay informed with our premier resources.";

  constructor() { }

  onItemSelector(value: any) {
    if (value == "Identity") {
      this.text = this.description[0];
    } else if (value == "Founders") {
      this.text = this.description[1];
    } else if (value == "Missions") {
      this.text = this.description[2];
    }
  }
}
