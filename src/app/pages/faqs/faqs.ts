import { Component } from '@angular/core';
import { Breadcrumb } from '../../shared/breadcrumb/breadcrumb';

@Component({
  selector: 'app-faqs',
  imports: [Breadcrumb],
  templateUrl: './faqs.html',
  styleUrl: './faqs.scss'
})
export class Faqs {
  faqs = [
    { question: 'What is SimplifyMVT Academy?', answer: 'SimplifyMVT Academy is an educational platform that provides free, high-quality resources and courses on medical tourism. We aim to empower professionals and businesses with the knowledge needed to excel in the medical tourism industry.', open: false },
    { question: 'Who can join SimplifyMVT Academy?', answer: 'Anyone interested in medical tourism can join, including healthcare professionals, medical tourism facilitators, travel agents, students, business owners, and anyone seeking to learn more about this field.', open: false },
    { question: 'How much does it cost to access the courses?', answer: 'All courses and resources on SimplifyMVT Academy are completely free of charge.', open: false },
    { question: 'How do I enroll in a Session?', answer: 'To enroll in a session, simply visit the Session page on our website, and click on the "Enroll Now" button. Follow the prompts to register and attend the session as per given date and time.', open: false },
    { question: 'Do I need any prior experience to take the courses?', answer: 'No prior experience is required. Our courses are designed to cater to both beginners and professionals looking to enhance their knowledge in medical tourism.', open: false },
    { question: 'Can I access the Session on mobile devices?', answer: 'Yes, our website and Sessions are optimized for mobile devices, allowing you to learn on the go.', open: false },
    { question: 'How long do I have access to the courses?', answer: 'Once you enroll in a course, you have lifetime access to the course materials and resources.', open: false },
    { question: 'Will I receive a certificate upon completing a course?', answer: 'Yes, upon successful completion of a course, you will receive a certificate that can be added to your resume or professional profile.', open: false },
    { question: 'How often are new courses added?', answer: 'We regularly update and add new Session to our Upcoming event section. Be sure to check the website home page frequently for the latest offerings.', open: false },
    { question: 'How can I contact SimplifyMVT Academy for support or inquiries?', answer: 'You can contact us through the Contact Us page on our website. Fill out the contact form, or use the provided email address or phone number to reach out to our support team.', open: false },
    { question: 'Are there any live webinars or events?', answer: 'Yes, we host live webinars and events on various topics related to medical tourism. Check the Events page for upcoming sessions.', open: false },
    { question: 'How can I stay updated with the latest news and updates from SimplifyMVT Academy?', answer: 'You can subscribe to our newsletter via the sign-up form on our homepage. Additionally, follow us on social media for the latest updates and announcements.', open: false },
    { question: 'Can I suggest a topic for a new course?', answer: 'Absolutely! We welcome suggestions for new course topics. Please send your ideas through the contact form on our website.', open: false },
    { question: 'How do I provide feedback about a course?', answer: 'After completing a Session, you can provide feedback on the online Session or evaluation form. Your input helps us improve and offer better learning experiences.', open: false },
    { question: 'What if I have technical issues accessing the courses?', answer: 'If you encounter any technical issues, please contact us directly for assistance.', open: false }
  ];

  toggleFaq(index: number) {
    this.faqs[index].open = !this.faqs[index].open;
  }
}
