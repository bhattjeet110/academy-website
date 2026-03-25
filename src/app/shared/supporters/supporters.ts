import { Component } from '@angular/core';

@Component({
  selector: 'app-supporters',
  imports: [],
  templateUrl: './supporters.html',
  styleUrl: './supporters.scss'
})
export class Supporters {
  supporters = [
    { name: 'Jupiter Hospital', image: 'assets/images/key-supporters/jupiter.png' },
    { name: 'Magnus Hospital', image: 'assets/images/key-supporters/magnus.png' },
    { name: 'Ambani Hospital', image: 'assets/images/key-supporters/Ambani.png' },
    { name: 'NCI', image: 'assets/images/key-supporters/NCI.png' },
    { name: 'HCG Cancer Centre', image: 'assets/images/key-supporters/hcg.png' },
    { name: 'Jaslok Hospital', image: 'assets/images/key-supporters/jaslok.png' }
  ];
}
