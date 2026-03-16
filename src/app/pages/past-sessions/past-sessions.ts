import { Component, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Breadcrumb } from '../../shared/breadcrumb/breadcrumb';

@Component({
  selector: 'app-past-sessions',
  imports: [Breadcrumb],
  templateUrl: './past-sessions.html',
  styleUrl: './past-sessions.scss'
})
export class PastSessions {
  private sanitizer = inject(DomSanitizer);
  playingIndex: number | null = null;
  sessions = [
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
    },
    {
      title: 'Unlock the World of Medical Value Travel! Delve into the essential aspects of medical tourism',
      speaker: 'Dr. Shyam Shrivastava',
      date: '3rd June, 2023',
      rating: 4,
      url: 'https://youtu.be/uLbdFDwJgIU',
      videoId: 'uLbdFDwJgIU'
    },
    {
      title: 'In Vitro Fertilization (IVF) Knowledge Session with Dr Arora',
      speaker: 'Dr. Arora',
      date: '22nd July, 2023',
      rating: 3,
      url: 'https://youtu.be/5UF56lqsnP0',
      videoId: '5UF56lqsnP0'
    }
  ];

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
