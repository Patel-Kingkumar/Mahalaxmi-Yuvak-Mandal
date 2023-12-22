import { Component } from '@angular/core';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css']
})
export class UpcomingComponent {
  year: any = new Date().getFullYear();

  events: any = [
    { name: "Salgiri Mahotsav ", image: "https://livedemo00.template-help.com/wt_prod-19077/images/post-22-568x492.jpg", text: "સંવત ૨૦૮૦ ચૈત્ર - વૈશાખ સાતમ-આઠમ", date: "30/04/2024 - 01/05/2024" },
    { name: "Ganesh Mahotsav", image: "https://livedemo00.template-help.com/wt_prod-19077/images/post-23-568x492.jpg", text: "સંવત ૨૦૮૦ શ્રાવણ - ભાદરવો સુદ ચોથ", date: "07/09/2024 - 17/09/2424" },
    { name: "Navratri Mahotsav", image: "https://livedemo00.template-help.com/wt_prod-19077/images/post-25-568x492.jpg", text: "સંવત ૨૦૮૦ ભાદરવો - આસો સુદ પડવો", date: "03/10/2024 - 12/10/2024" },
    { name: "Dahnu Padyatra", image: "https://content.jdmagicbox.com/comp/mumbai/n5/022pxx22.xx22.220130101244.r4n5/catalogue/mahalaxmi-mata-gad-mandir-vivalvedhe-palghar-temples-mm8u7o5e4m.jpg", text: "સંવત ૨૦૮૧ કારતક", date: "05/11/2023 - 09/11/2024" },
  ]

}
