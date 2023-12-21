import { Component } from '@angular/core';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css']
})
export class UpcomingComponent {
  year: any = new Date().getFullYear();

  events: any = [
    { name: "Salgiri Mahotsav ", image: "https://livedemo00.template-help.com/wt_prod-19077/images/post-22-568x492.jpg", text: "this is a", date: "04/09/2023" },
    { name: "Ganesh Mahotsav", image: "https://livedemo00.template-help.com/wt_prod-19077/images/post-23-568x492.jpg", text: "this is b", date: "05/09/2023" },
    { name: "Navratri Mahotsav", image: "https://livedemo00.template-help.com/wt_prod-19077/images/post-25-568x492.jpg", text: "this is c", date: "06/09/2023" },
    { name: "Dahnu Padyatra", image: "https://livedemo00.template-help.com/wt_prod-19077/images/post-25-568x492.jpg", text: "this is d", date: "07/09/2023" },
  ]

}
