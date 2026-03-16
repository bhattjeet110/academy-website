import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  imports: [],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss'
})
export class Testimonials {
  testimonials = [
    {
      name: 'Tom Hurley',
      role: 'Content Creator',
      text: 'Lorem ipsum dolor amet consetetur elit adicing elit sed mod tempor incid idunt enim minim veniam quis nosrud citation laboris nisiste aliquip comodo perspiatix.',
      rating: 5
    },
    {
      name: 'Robert Lane',
      role: 'Developer',
      text: 'Lorem ipsum dolor amet consetetur elit adicing elit sed mod tempor incid idunt enim minim veniam quis nosrud citation laboris nisiste aliquip comodo perspiatix.',
      rating: 5
    },
    {
      name: 'Sarah Chen',
      role: 'Designer',
      text: 'Lorem ipsum dolor amet consetetur elit adicing elit sed mod tempor incid idunt enim minim veniam quis nosrud citation laboris nisiste aliquip comodo perspiatix.',
      rating: 5
    }
  ];

  currentIndex = 0;

  getStars(rating: number): number[] {
    return Array(rating).fill(0);
  }

  prev() {
    this.currentIndex = this.currentIndex > 0 ? this.currentIndex - 1 : this.testimonials.length - 1;
  }

  next() {
    this.currentIndex = this.currentIndex < this.testimonials.length - 1 ? this.currentIndex + 1 : 0;
  }
}
