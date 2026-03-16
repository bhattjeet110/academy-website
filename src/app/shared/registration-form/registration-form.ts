import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  imports: [FormsModule],
  templateUrl: './registration-form.html',
  styleUrl: './registration-form.scss'
})
export class RegistrationForm {
  @Input() title = 'Register For New Session';
  @Input() compact = false;

  formData = {
    name: '',
    companyName: '',
    country: '',
    contactNumber: '',
    email: ''
  };

  onSubmit() {
    console.log('Form submitted:', this.formData);
  }
}
