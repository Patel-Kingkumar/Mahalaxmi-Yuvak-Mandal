import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  heading: any = ["Identity", "Founders", "Missions"];
  text: any = "Mahalaxmi Yuvak Mandal is one of most popular group in Dumas. We educate people about sanatan dharma."
  description: any = [
    "We are one of the leading Hinduism websites on the Web offering you both essential and detailed information as well as news from the world of this religion.",
    "Our organization was established by some of the most prominent persons in the Hindu world. They were and still are the core people of our organization and the website itself.",
    "Our mission is to help everyone interested in Hinduism discover more about this religion and its community. We aim to make it clear for our every visitor what Hinduism is like."
  ]

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
