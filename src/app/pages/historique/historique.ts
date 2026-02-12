import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineComponent } from '../../components/timeline/timeline.component';

export interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  imageUrl?: string;
}

@Component({
  selector: 'app-historique',
  imports: [CommonModule, TimelineComponent],
  templateUrl: './historique.html',
  styleUrl: './historique.scss',
  standalone: true
})
export class Historique {
  events: TimelineEvent[] = [
    {
      date: '2020',
      title: 'Fondation du club',
      description: 'Le Basketball Club de Beaumont Communay (BCBC) est créé avec une équipe de passionnés.',
      imageUrl: 'assets/images/history/founding.jpg'
    },
    {
      date: '2021',
      title: 'Première saison',
      description: 'Lancement de la première saison officielle avec 3 équipes.',
      imageUrl: 'assets/images/history/first-season.jpg'
    },
    {
      date: '2022',
      title: 'Expansion',
      description: 'Le club accueille de nouvelles équipes jeunes.',
      imageUrl: 'assets/images/history/expansion.jpg'
    },
    {
      date: '2023',
      title: 'Premier titre',
      description: 'Victoire au championnat régional.',
      imageUrl: 'assets/images/history/championship.jpg'
    }
  ];
}
