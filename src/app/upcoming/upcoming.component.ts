import { Component } from '@angular/core';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css']
})
export class UpcomingComponent {
  year: any = new Date().getFullYear();
  today: Date = new Date();
  leftDays: any;

  constructor() {
    this.calculateDaysUntilEvents();
  }
  events: any = [
    { name: "સાલગીરી મહોત્સવ ", image: "assets/images/upcoming_event/salgiri_mahotsav.jpg", text: "સંવત ૨૦૮૦ ચૈત્ર - વૈશાખ સાતમ-આઠમ", date: "30/04/2024 - 01/05/2024" },
    { name: "ગણેશ મહોત્સવ", image: "assets/images/upcoming_event/ganesh_mahotsav.jpg", text: "સંવત ૨૦૮૦ શ્રાવણ - ભાદરવો સુદ ચોથ", date: "07/09/2024 - 17/09/2024" },
    { name: "નવરાત્રી મહોત્સવ", image: "assets/images/upcoming_event/navaratri_mahotsav.jpg", text: "સંવત ૨૦૮૦ ભાદરવો - આસો સુદ પડવો", date: "03/10/2024 - 12/10/2024" },
    { name: "દહાણુ  પદયાત્રા", image: "assets/images/upcoming_event/dahnu_padyatra.jpg", text: "સંવત ૨૦૮૧ કારતક", date: "05/11/2024 - 09/11/2024" },
  ]

  calculateDaysUntilEvents() {
    this.events.forEach((event: any) => {
      const [startDateStr] = event.date.split(' - ');
      const [day, month, year] = startDateStr.split('/').map(Number);
      const eventDate = new Date(year, month - 1, day); 
      const timeDiff = eventDate.getTime() - this.today.getTime();
      const daysUntilEvent = Math.ceil(timeDiff / (1000 * 3600 * 24));
      event.daysUntilEvent = daysUntilEvent;
    });
  }
}
