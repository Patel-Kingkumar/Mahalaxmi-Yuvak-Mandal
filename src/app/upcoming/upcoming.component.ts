import { Component } from '@angular/core';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css']
})
export class UpcomingComponent {
  year: any = new Date().getFullYear();

  events: any = [
    { name: "Salgiri Mahotsav ", image: "assets/images/upcoming_event/salgiri_mahotsav.jpg", text: "સંવત ૨૦૮૦ ચૈત્ર - વૈશાખ સાતમ-આઠમ", date: "30/04/2024 - 01/05/2024" },
    { name: "Ganesh Mahotsav", image: "assets/images/upcoming_event/ganesh_mahotsav.jpg", text: "સંવત ૨૦૮૦ શ્રાવણ - ભાદરવો સુદ ચોથ", date: "07/09/2024 - 17/09/2424" },
    { name: "Navratri Mahotsav", image: "assets/images/upcoming_event/navaratri_mahotsav.jpg", text: "સંવત ૨૦૮૦ ભાદરવો - આસો સુદ પડવો", date: "03/10/2024 - 12/10/2024" },
    { name: "Dahnu Padyatra", image: "assets/images/upcoming_event/dahnu_padyatra.jpg", text: "સંવત ૨૦૮૧ કારતક", date: "05/11/2023 - 09/11/2024" },
  ]

}
