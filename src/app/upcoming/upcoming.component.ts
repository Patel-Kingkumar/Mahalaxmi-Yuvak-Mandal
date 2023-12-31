import { Component } from '@angular/core';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css']
})
export class UpcomingComponent {
  year: any = new Date().getFullYear();

  events: any = [
    { name: "સાલગીરી મહોત્સવ ", image: "assets/images/upcoming_event/salgiri_mahotsav.jpg", text: "સંવત ૨૦૮૦ ચૈત્ર - વૈશાખ સાતમ-આઠમ", date: "૩૦/૦૪/૨૦૨૪ - ૦૧/૦૫/૨૦૨૪" },
    { name: "ગણેશ મહોત્સવ", image: "assets/images/upcoming_event/ganesh_mahotsav.jpg", text: "સંવત ૨૦૮૦ શ્રાવણ - ભાદરવો સુદ ચોથ", date: "૦૭/૦૯/૨૦૨૪ - ૧૭/૦૯/૨૦૨૪" },
    { name: "નવરાત્રી મહોત્સવ", image: "assets/images/upcoming_event/navaratri_mahotsav.jpg", text: "સંવત ૨૦૮૦ ભાદરવો - આસો સુદ પડવો", date: "૦૩/૧૦/૨૦૨૪ - ૧૨/૧૦/૨૦૨૪" },
    { name: "દહાણુ  પદયાત્રા", image: "assets/images/upcoming_event/dahnu_padyatra.jpg", text: "સંવત ૨૦૮૧ કારતક", date: "૦૫/૧૧/૨૦૨૪ - ૦૯/૧૧/૨૦૨૪" },
  ]

}
