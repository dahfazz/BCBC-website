import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

interface ProjetSocial {
  id: number;
  title: string;
  description: string;
  icon: string;
  details: string[];
  image: string;
}

@Component({
  selector: 'app-projets-sociaux',
  imports: [NgClass],
  templateUrl: './projets-sociaux.html',
  styleUrl: './projets-sociaux.scss',
  standalone: true
})
export class ProjetsSociaux {
  projets: ProjetSocial[] = [
    {
      id: 1,
      title: 'Sorties en Famille aux Matchs Pros',
      description: 'Nous organisons des sorties pour accompagner les familles du quartier à assister à des matchs de basketball professionnel. Une expérience unique pour petits et grands !',
      icon: 'bi-people-fill',
      details: [
        'Accompagnement des familles du quartier',
        'Places offertes pour des matchs de Pro A et Pro B',
        'Transport organisé vers les salles',
        'Moments de partage et de convivialité'
      ],
      image: 'assets/images/projets/sorties-matchs.jpg'
    },
    {
      id: 2,
      title: 'Sport Santé en Maison de Retraite',
      description: 'Nos éducateurs et bénévoles animent des séances de sport adapté dans les maisons de retraite de Bois-Colombes. Le sport comme vecteur de bien-être et de lien social.',
      icon: 'bi-heart-pulse-fill',
      details: [
        'Séances de sport adapté aux seniors',
        'Encadrement par des éducateurs diplômés',
        'Exercices de mobilité et de coordination',
        'Échanges intergénérationnels avec nos jeunes joueurs'
      ],
      image: 'assets/images/projets/sport-sante.jpg'
    }
  ];
}
