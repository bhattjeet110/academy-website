import { Component, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { Benefits } from '../../shared/benefits/benefits';
import { Testimonials } from '../../shared/testimonials/testimonials';
import { Supporters } from '../../shared/supporters/supporters';
import { RegistrationForm } from '../../shared/registration-form/registration-form';

@Component({
  selector: 'app-home',
  imports: [RouterLink, Benefits, Testimonials, Supporters, RegistrationForm],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  private sanitizer = inject(DomSanitizer);
  playingIndex: number | null = null;
  activeTab = 'about';

  aboutTabs: Record<string, string> = {
    about: 'At SimplifyMVT Academy, we believe that knowledge is power. Our expertly curated courses cover a wide range of topics, including Treatment Knowledge, patient management, international healthcare standards, legal considerations, and marketing strategies tailored to the medical tourism industry. By providing accessible and up-to-date information, we aim to foster a well-informed community that can drive innovation and excellence in medical tourism.',
    mission: 'To provide high-quality education in medical tourism, empowering professionals and businesses with the skills and knowledge to excel in this dynamic field.',
    vision: 'To be the leading global platform for medical tourism education, fostering innovation and excellence, and enhancing patient care worldwide.'
  };

  setTab(tab: string) {
    this.activeTab = tab;
  }

  pastSessions = [
    {
      title: 'Online Knowledge Session on CyberKnife',
      speaker: 'Dr. Shyam Shrivastava',
      date: '3rd June, 2023',
      rating: 5,
      url: 'https://youtu.be/DFQC__MAaZQ',
      videoId: 'DFQC__MAaZQ'
    },
    {
      title: 'Bone Marrow Transplant (BMT) Advance Knowledge Session',
      speaker: 'Dr. Reetu Jain',
      date: '22nd July, 2023',
      rating: 3,
      url: 'https://youtu.be/5UF56lqsnP0',
      videoId: '5UF56lqsnP0'
    },
    {
      title: 'Cyber Crime Unmasked - Understanding and Preventing Cyber Attacks',
      speaker: 'Mr. Parth Vaswani',
      date: '29th June, 2024',
      rating: 5,
      url: 'https://youtu.be/m9hKGfufek4',
      videoId: 'm9hKGfufek4'
    }
  ];

  faqs = [
    {
      question: 'What is SimplifyMVT Academy?',
      answer: 'SimplifyMVT Academy is an educational platform that provides free, high-quality resources and courses on medical tourism. We aim to empower professionals and businesses with the knowledge needed to excel in the medical tourism industry.',
      open: true
    },
    {
      question: 'Who can join SimplifyMVT Academy?',
      answer: 'Anyone interested in medical tourism can join, including healthcare professionals, medical tourism facilitators, travel agents, students, business owners, and anyone seeking to learn more about this field.',
      open: false
    },
    {
      question: 'How much does it cost to access the Sessions?',
      answer: 'All courses and resources on SimplifyMVT Academy are completely free of charge.',
      open: false
    }
  ];

  toggleFaq(index: number) {
    this.faqs[index].open = !this.faqs[index].open;
  }

  playVideo(index: number) {
    this.playingIndex = index;
  }

  getEmbedUrl(videoId: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${videoId}?autoplay=1`
    );
  }

  getStars(rating: number): number[] {
    return Array(5).fill(0).map((_, i) => i < rating ? 1 : 0);
  }
}
