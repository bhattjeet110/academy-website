import { Component } from '@angular/core';

@Component({
  selector: 'app-benefits',
  imports: [],
  templateUrl: './benefits.html',
  styleUrl: './benefits.scss'
})
export class Benefits {
  benefits = [
    {
      icon: 'fas fa-laptop-code',
      title: 'Advance your career',
      description: 'Start a career or enhance your role in medical tourism with our sessions.'
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Grow Your Business',
      description: 'Gain the skills, Grow your business and knowledge to succeed and seize new opportunities.'
    },
    {
      icon: 'fas fa-chalkboard-teacher',
      title: 'Expert-Led Content',
      description: 'Learn from industry experts and gain practical, actionable insights into medical tourism.'
    },
    {
      icon: 'fas fa-globe',
      title: 'Online Session',
      description: 'Our knowledge sessions are accessible worldwide, no matter where you are.'
    },
    {
      icon: 'fas fa-certificate',
      title: 'Certification',
      description: 'Earn a certification upon course completion to boost your resume and industry credibility.'
    },
    {
      icon: 'fas fa-users',
      title: 'Interactive Learning',
      description: 'Our interactive courses use real-world case studies to help you apply knowledge and build valuable skills.'
    }
  ];
}
