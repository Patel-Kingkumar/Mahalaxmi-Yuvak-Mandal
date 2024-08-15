import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() selectedLanguage: string = 'English'; // Default language

  onToggle(event: Event) {
    const checkbox = event.target as HTMLInputElement;
    this.selectedLanguage = checkbox.checked ? 'Hindi' : 'English';
  }
}
