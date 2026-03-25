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
    { icon: 'fab fa-facebook-f', url: 'https://www.facebook.com/simplifymvt' },
    { icon: 'fab fa-linkedin-in', url: 'https://in.linkedin.com/company/simplifymvt' },
    { icon: 'fab fa-instagram', url: 'https://www.instagram.com/simplifymvt/' },
    { icon: 'fab fa-x-twitter', url: 'https://x.com/SimplifyMvt' },
    { icon: 'fab fa-youtube', url: 'https://www.youtube.com/@simplifymvt1518' }
  ];

  onSubmit() {
    console.log('Contact form submitted:', this.contactForm);
  }
}
