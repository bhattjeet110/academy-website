import { Component } from '@angular/core';
import { Breadcrumb } from '../../shared/breadcrumb/breadcrumb';
import { Benefits } from '../../shared/benefits/benefits';
import { Testimonials } from '../../shared/testimonials/testimonials';
import { Supporters } from '../../shared/supporters/supporters';
import { RegistrationForm } from '../../shared/registration-form/registration-form';

@Component({
  selector: 'app-about',
  imports: [Breadcrumb, Benefits, Testimonials, Supporters, RegistrationForm],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {
  activeTab = 'mission';
}
