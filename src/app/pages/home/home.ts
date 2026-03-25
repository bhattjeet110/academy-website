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
    about: 'SimplifyMVT Academy is a dedicated Medical Tourism Education Platform focused on empowering individuals and organizations with the knowledge and skills required to succeed in the global healthcare industry.<br><br>We bridge the gap between healthcare expertise and career opportunities by offering practical, industry-oriented training programs. Our sessions are conducted by senior doctors, healthcare professionals, and industry experts, ensuring real-world insights and hands-on learning.<br><br>We believe that education should be accessible, which is why we offer a mix of free knowledge sessions and premium career-focused programs.',
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
      question: 'What is Medical Tourism?',
      answer: 'Medical tourism involves traveling to another country for medical treatment and healthcare services.',
      open: true
    },
    {
      question: 'Who can join these courses?',
      answer: 'Anyone interested in healthcare, medical tourism, or career growth in this field.',
      open: false
    },
    {
      question: 'Are there free sessions available?',
      answer: 'Yes, we regularly conduct free knowledge sessions.',
      open: false
    },
    {
      question: 'Do I get a certificate?',
      answer: 'Yes, certificates are provided for completed programs.',
      open: false
    },
    {
      question: 'Are the courses online or offline?',
      answer: 'Most sessions are conducted online for global accessibility. But some courses are offline.',
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
