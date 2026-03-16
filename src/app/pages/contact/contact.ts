import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Breadcrumb } from '../../shared/breadcrumb/breadcrumb';

@Component({
  selector: 'app-contact',
  imports: [Breadcrumb, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  contactForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  socialLinks = [
    { icon: 'fab fa-facebook-f', url: '#' },
    { icon: 'fab fa-linkedin-in', url: '#' },
    { icon: 'fab fa-instagram', url: '#' },
    { icon: 'fab fa-x-twitter', url: '#' },
    { icon: 'fab fa-youtube', url: '#' }
  ];

  onSubmit() {
    console.log('Contact form submitted:', this.contactForm);
  }
}
