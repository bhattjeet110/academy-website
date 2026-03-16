import { Component } from '@angular/core';

@Component({
  selector: 'app-supporters',
  imports: [],
  templateUrl: './supporters.html',
  styleUrl: './supporters.scss'
})
export class Supporters {
  supporters = [
    { name: 'CreativeBook', initials: 'CB' },
    { name: 'OwlBook', initials: 'OB' },
    { name: 'University', initials: 'U' },
    { name: 'EduHouse', initials: 'EH' },
    { name: 'State University', initials: 'SU' },
    { name: 'Global University', initials: 'GU' }
  ];
}
