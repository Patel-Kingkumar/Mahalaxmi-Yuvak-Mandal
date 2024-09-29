import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

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
    { name: "સાલગીરી મહોત્સવ ", image: "assets/images/upcoming_event/salgiri_mahotsav.jpg", text: "સંવત ૨૦૮૦ ચૈત્ર - વૈશાખ સાતમ-આઠમ", startDate: "30/04/2024", endDate: "01/05/2024" },
    { name: "જન્માષ્ટમી મહોત્સવ", image: "assets/images/upcoming_event/janmashtmi_mahotsav.jpeg", text: "સંવત ૨૦૮૦ શ્રાવણ વદ આઠમ", startDate: "26/08/2024" },
    { name: "ગણેશ મહોત્સવ", image: "assets/images/upcoming_event/ganesh_mahotsav.jpg", text: "સંવત ૨૦૮૦ શ્રાવણ - ભાદરવો સુદ ચોથ", startDate: "07/09/2024", endDate: "17/09/2024" },
    { name: "નવરાત્રી મહોત્સવ", image: "assets/images/upcoming_event/navaratri_mahotsav.jpg", text: "સંવત ૨૦૮૦ ભાદરવો - આસો સુદ પડવો", startDate: "03/10/2024", endDate: "12/10/2024" },
    { name: "દહાણુ પદયાત્રા", image: "assets/images/upcoming_event/dahnu_padyatra.jpg", text: "સંવત ૨૦૮૧ કારતક", startDate: "05/11/2024", endDate: "09/11/2024" },
  ]

  calculateDaysUntilEvents() {
    this.events.forEach((event: any) => {
      const [startDateStr] = event.startDate.split(' - ');
      const [day, month, year] = startDateStr.split('/').map(Number);
      const eventDate = new Date(year, month - 1, day); 
      const timeDiff = eventDate.getTime() - this.today.getTime();
      const daysUntilEvent = Math.ceil(timeDiff / (1000 * 3600 * 24));
      event.daysUntilEvent = daysUntilEvent;
    });
  }

  isTodayBetween(startDate: string, endDate?: string): boolean {
    const today = new Date();
    const start = this.parseDate(startDate);
    const end = endDate ? this.parseDate(endDate) : start;

    return today >= start && today <= end;
  }

  isEventOver(startDate: string, endDate?: string): boolean {
    const today = new Date();
    const start = this.parseDate(startDate);
    const end = endDate ? this.parseDate(endDate) : start; // If no endDate, treat as ongoing till start

    return today > end; // Event is over if today is after end date
  }


  parseDate(dateStr: string): Date {
    const [day, month, year] = dateStr.split('/').map(Number);
    return new Date(year, month - 1, day); // Month is 0-indexed
  }

}
