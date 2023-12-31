import { Component } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent {

  service: any = [
    { text: "CULTURAL", decsription: "We offer lots of information on culture of Hinduism to help you better understand it."},
    { text: "RELIGIOUS", decsription: "Our website is a perfect place for hinduists as it offers religious information and news."},
    { text: "SOCIAL", decsription: "We also provide great social services for Hinduists through public events and meetings."},
    { text: "EDUCATIONAL", decsription: "If you are looking for educational resources on Hinduism, we will be glad to help you."}
  ]
}
