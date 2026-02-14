import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Facility {
  name: string;
  address: string;
  description: string;
  features: string[];
  capacity: string;
  parking: string;
  accessibility: string;
}

@Component({
  selector: 'app-facilities',
  imports: [CommonModule],
  templateUrl: './facilities.html',
  styleUrl: './facilities.scss',
  standalone: true
})
export class Facilities {
  facilities: Facility[] = [
    {
      name: 'Gymnase Principal',
      address: '123 Rue du Sport, 92270 Bois-Colombes',
      description: 'Notre gymnase principal est une installation moderne et spacieuse qui accueille la majorité de nos entraînements et matchs à domicile. Entièrement rénové en 2020, il dispose d\'équipements de qualité professionnelle.',
      features: [
        'Terrain de basketball aux normes FIBA',
        'Vestiaires modernes et spacieux',
        'Gradins pour 300 spectateurs',
        'Éclairage LED haute performance',
        'Tableau d\'affichage électronique',
        'Salle de musculation équipée'
      ],
      capacity: '300 personnes',
      parking: 'Parking gratuit de 50 places',
      accessibility: 'Accès PMR complet'
    },
    {
      name: 'Gymnase Secondaire',
      address: '456 Avenue des Champions, 92270 Bois-Colombes',
      description: 'Notre gymnase secondaire complète parfaitement nos installations. Plus compact mais tout aussi bien équipé, il est idéal pour les entraînements et les matchs des équipes jeunes.',
      features: [
        'Terrain de basketball homologué',
        'Vestiaires équipés',
        'Gradins pour 150 spectateurs',
        'Éclairage LED',
        'Système de sonorisation',
        'Espace détente'
      ],
      capacity: '150 personnes',
      parking: 'Parking gratuit de 30 places',
      accessibility: 'Accès PMR'
    }
  ];
}
