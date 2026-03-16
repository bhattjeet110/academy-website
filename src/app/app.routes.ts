import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { PastSessions } from './pages/past-sessions/past-sessions';
import { Contact } from './pages/contact/contact';
import { Faqs } from './pages/faqs/faqs';
import { UpcomingSession } from './pages/upcoming-session/upcoming-session';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'past-sessions', component: PastSessions },
  { path: 'contact', component: Contact },
  { path: 'faqs', component: Faqs },
  { path: 'upcoming-session', component: UpcomingSession },
  { path: '**', redirectTo: '' }
];
