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
      name: 'Student',
      role: 'Medical Tourism Learner',
      text: 'This academy gave me real industry knowledge. I started my career in medical tourism within months!',
      rating: 5
    },
    {
      name: 'Healthcare Professional',
      role: 'Senior Practitioner',
      text: 'The sessions by senior doctors were extremely valuable and practical.',
      rating: 5
    },
    {
      name: 'Course Participant',
      role: 'Industry Enthusiast',
      text: 'Highly recommended for anyone looking to enter the healthcare industry.',
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
