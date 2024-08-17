import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  service: any = [
    {
      text: "॥ श्री महालक्ष्म्यष्टकम् ॥", decsription: [
        "श्री गणेशाय नमः ॥",
        "नमस्तेस्तू महामाये श्रीपिठे सूरपुजिते । शंख चक्र गदा हस्ते महालक्ष्मी नमोस्तूते ॥ १ ॥",
        "नमस्ते गरूडारूढे कोलासूर भयंकरी । सर्व पाप हरे देवी महालक्ष्मी नमोस्तूते ॥ २ ॥",
        "सर्वज्ञे सर्ववरदे सर्वदुष्ट भयंकरी । सर्व दुःख हरे देवी महालक्ष्मी नमोस्तूते ॥३ ॥"      ]
    },
    {
      text: "॥ श्री महालक्ष्म्यष्टकम् ॥", decsription: [
        "सिद्धीबुद्धूीप्रदे देवी भुक्तिमुक्ति प्रदायिनी । मंत्रमूर्ते सदा देवी महालक्ष्मी नमोस्तूते ॥ ४ ॥",
        "आद्यंतरहिते देवी आद्यशक्ती महेश्वरी । योगजे योगसंभूते महालक्ष्मी नमोस्तूते ॥ ५ ॥",
        "स्थूल सूक्ष्म महारौद्रे महाशक्ती महोदरे । महापाप हरे देवी महालक्ष्मी नमोस्तूते ॥ ६ ॥",
        "पद्मासनस्थिते देवी परब्रम्हस्वरूपिणी । परमेशि जगन्मातर्र महालक्ष्मी नमोस्तूते ॥ ७ ॥",
      ]
    },
    {
      text: "॥ श्री महालक्ष्म्यष्टकम् ॥", decsription: [
        "श्वेतांबरधरे देवी नानालंकार भूषिते । जगत्स्थिते जगन्मार्त महालक्ष्मी नमोस्तूते ॥ ८ ॥",
        "महालक्ष्म्यष्टकस्तोत्रं यः पठेत् भक्तिमान्नरः । सर्वसिद्धीमवाप्नोति राज्यं प्राप्नोति सर्वदा ॥ ९ ॥",
        "एककाले पठेन्नित्यं महापापविनाशनं । द्विकालं यः पठेन्नित्यं धनधान्य समन्वितः ॥१०॥",
        "त्रिकालं यः पठेन्नित्यं महाशत्रूविनाशनं । महालक्ष्मीर्भवेन्नित्यं प्रसन्ना वरदा शुभा ॥११॥"
      ]
    },
  ]
  carouselItems = [
    {
      videoSrc: '../../assets/videos/salgiri_2023.mp4',
      poster: '../../assets/videos/salgiri_2023.mp4',
      title: 'Hinduism',
      link: 'https://www.instagram.com/mahalaxmi_yuvak_mandal/'
    },
    {
      videoSrc: '../../assets/videos/ganeshchaturthi_2023.mp4',
      poster: '../../assets/videos/ganeshchaturthi_2023.mp4',
      title: 'Hinduism',
      link: 'https://www.instagram.com/mahalaxmi_yuvak_mandal/'
    }
    // Add more items as needed
  ];
}
