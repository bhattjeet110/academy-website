import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
  currentYear = new Date().getFullYear();

  menuLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Past Sessions', path: '/past-sessions' },
    { label: 'Upcoming Session', path: '/upcoming-session' },
    { label: 'Contact Us', path: '/contact' }
  ];

  quickLinks = [
    { label: "FAQ's", path: '/faqs' },
    { label: 'Terms and Conditions', path: '#' },
    { label: 'Privacy Policy', path: '#' },
    { label: 'Medical Tourism Newsletter', path: '#' }
  ];

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
