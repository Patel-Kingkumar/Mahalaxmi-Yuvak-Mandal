import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  service: any = [
    {
      text: "Typology", decsription: [
        "Folk Beliefs",
        "Vedic Hinduism",
        "Vedantic Hinduism",
        "Dharmic Hinduism"
      ]
    },
    {
      text: "Traditions", decsription: [
        "Vaishnavism",
        "Shaivism",
        "Smartism",
        "Shaktism"
      ]
    },
    {
      text: "The main beliefs", decsription: [
        "Reincarnation of Souls",
        "The Law of Retribution",
        "Exit the Chain of Rebirths",
        "Ataman-Jan"
      ]
    }    
  ]
}
