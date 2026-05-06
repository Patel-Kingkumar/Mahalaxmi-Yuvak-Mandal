import { Component } from '@angular/core';

@Component({
  selector: 'app-achieve',
  templateUrl: './achieve.component.html',
  styleUrls: ['./achieve.component.css']
})
export class AchieveComponent {

  reviews: any = [
    { name: "Narendra Modi", image: "https://cdn-icons-png.flaticon.com/512/3001/3001764.png", decsription: "The practical knowledge of breathing techniques gives you balance and wisdom." },
    { name: "Amit Shah", image: "https://cdn-icons-png.flaticon.com/512/4042/4042422.png", decsription: "The state of samadhi will help you experience deep inner peace as well as increase self-awareness." },
    { name: "Yogi Aditynath", image: "https://cdn-icons-png.flaticon.com/512/4042/4042422.png", decsription: "For an extraordinary sense of peace, you have to go beyond your habitual active mind." }
  ]

  community: any = [
    { heading: "10", text: "MEETINGS HELD" },
    { heading: "20k", text: "REGULAR VISITORS" },
    { heading: "30", text: "TEAM MEMBERS" },
  ]
}
