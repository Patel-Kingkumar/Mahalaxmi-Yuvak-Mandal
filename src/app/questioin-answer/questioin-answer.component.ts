import { Component } from '@angular/core';

@Component({
  selector: 'app-questioin-answer',
  templateUrl: './questioin-answer.component.html',
  styleUrls: ['./questioin-answer.component.css']
})
export class QuestioinAnswerComponent {


  allQuestionsAnswers: any = [
    { question: "What is the purpose of this website?", answer: "This website provides information about the temple’s history, services, and events. It also offers a platform for devotees to engage with the community and contribute." },
    { question: "How can I contribute or donate to the temple?", answer: "Donations can be made easily through our website to support temple maintenance, festivals, and charitable activities. Your generosity helps sustain the temple’s mission." },
    { question: "What services and rituals are offered at the temple?", answer: "We offer daily prayers, special rituals, and personalized ceremonies for birthdays, weddings, and other milestones. Join us for various spiritual and cultural activities." },
    { question: "How can I participate in temple events and festivals?", answer: "You can participate by checking our event calendar and registering online. All are welcome to join in celebrations and volunteer during festivals." },
    { question: "Are there any classes or spiritual programs available at the temple?", answer: "Yes, we offer classes on Hindu scriptures, along with yoga and meditation sessions. These programs aim to deepen your spiritual knowledge and practice." },
    { question: "Can I request a prayer for my family or loved ones?", answer: "Yes, you can submit prayer requests online or visit the temple to have prayers offered for your family and loved ones’ well-being." },
    { question: "What should I know before visiting the temple?", answer: "Please dress modestly, remove shoes before entering, and respect the silence during prayers. Feel free to ask volunteers if you need assistance or guidance." },
  ] 

  constructor() { }

  ngOnInit(): void { }
}
