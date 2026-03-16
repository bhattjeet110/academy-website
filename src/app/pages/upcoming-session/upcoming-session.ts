import { Component, OnInit, OnDestroy } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { Breadcrumb } from '../../shared/breadcrumb/breadcrumb';
import { RegistrationForm } from '../../shared/registration-form/registration-form';

@Component({
  selector: 'app-upcoming-session',
  imports: [Breadcrumb, RegistrationForm, DecimalPipe],
  templateUrl: './upcoming-session.html',
  styleUrl: './upcoming-session.scss'
})
export class UpcomingSession implements OnInit, OnDestroy {
  eventDetails = {
    topic: 'Developing Your Intelligence',
    date: 'Thursday, December 26, 2024',
    time: '12:56 AM',
    location: 'India',
    duration: '30 minutes',
    language: 'English / Hindi',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam.',
    whatYouLearn: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  };

  speaker = {
    name: 'Speaker Name',
    role: 'Motivation Speaker',
    bio: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s.'
  };

  countdown = { days: 0, hours: 0, minutes: 0, seconds: 0 };
  private intervalId: ReturnType<typeof setInterval> | null = null;

  ngOnInit() {
    this.updateCountdown();
    this.intervalId = setInterval(() => this.updateCountdown(), 1000);
  }

  ngOnDestroy() {
    if (this.intervalId) clearInterval(this.intervalId);
  }

  private updateCountdown() {
    const target = new Date('2024-12-26T00:56:00').getTime();
    const now = new Date().getTime();
    const diff = Math.max(0, target - now);

    this.countdown = {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((diff % (1000 * 60)) / 1000)
    };
  }
}
