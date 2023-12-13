import { Component } from '@angular/core';

@Component({
  selector: 'app-achieve',
  templateUrl: './achieve.component.html',
  styleUrls: ['./achieve.component.css']
})
export class AchieveComponent {

  reviews: any = [
    { name: "KAMRAN WOOD", image: "https://cdn-icons-png.flaticon.com/512/3001/3001764.png", decsription: "I would like to thank you for creating such a wonderful website where one can find everything about Hinduism. To my mind, more people should know about this religion in the US and abroad." },
    { name: "LEELA WILLIAMS", image: "https://cdn-icons-png.flaticon.com/512/4042/4042422.png", decsription: "A friend referred me to this website when I was looking for some facts about Hinduism for my course project. Now I am a regular visitor of your events including public meetings and discussions." },
    { name: "ALISHA PETERSON", image: "https://cdn-icons-png.flaticon.com/512/4042/4042422.png", decsription: "While some people tend to criticize Hinduism, you are providing accurate information and facts about it. I’m recommending this website to all hinduists and non-hinduists all over the world." }
  ]

  community: any = [
    { heading: "210", text: "MEETINGS HELD" },
    { heading: "19k", text: "REGULAR VISITORS" },
    { heading: "25", text: "TEAM MEMBERS" },
  ]
}
