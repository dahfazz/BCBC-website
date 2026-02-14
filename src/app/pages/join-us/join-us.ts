import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Advantage {
  icon: string;
  title: string;
  description: string;
}

interface ContactMethod {
  icon: string;
  title: string;
  value: string;
  link?: string;
}

@Component({
  selector: 'app-join-us',
  imports: [CommonModule, RouterModule],
  templateUrl: './join-us.html',
  styleUrl: './join-us.scss',
  standalone: true
})
export class JoinUs {
  advantages: Advantage[] = [
    {
      icon: 'bi-trophy-fill',
      title: 'Excellence sportive',
      description: 'Rejoignez un club avec une tradition de victoires et un engagement envers l\'excellence.'
    },
    {
      icon: 'bi-people-fill',
      title: 'Esprit d\'équipe',
      description: 'Intégrez une famille de basketteurs passionnés et solidaires.'
    },
    {
      icon: 'bi-star-fill',
      title: 'Encadrement qualifié',
      description: 'Bénéficiez de l\'expertise d\'entraîneurs diplômés et expérimentés.'
    },
    {
      icon: 'bi-building',
      title: 'Installations modernes',
      description: 'Entraînez-vous dans des gymnases récemment rénovés avec du matériel de qualité.'
    },
    {
      icon: 'bi-calendar3',
      title: 'Horaires flexibles',
      description: 'Des créneaux d\'entraînement adaptés à tous les niveaux et tous les âges.'
    },
    {
      icon: 'bi-heart-fill',
      title: 'Ambiance conviviale',
      description: 'Évoluez dans un environnement familial et encourageant.'
    }
  ];

  contactMethods: ContactMethod[] = [
    {
      icon: 'bi-envelope-fill',
      title: 'Email',
      value: 'contact@bcbc-basket.fr',
      link: 'mailto:contact@bcbc-basket.fr'
    },
    {
      icon: 'bi-telephone-fill',
      title: 'Téléphone',
      value: '01 XX XX XX XX',
      link: 'tel:+33XXXXXXXXX'
    },
    {
      icon: 'bi-facebook',
      title: 'Facebook',
      value: 'BCBC Basket',
      link: 'https://facebook.com/bcbc-basket'
    },
    {
      icon: 'bi-instagram',
      title: 'Instagram',
      value: '@bcbc_basket',
      link: 'https://instagram.com/bcbc_basket'
    }
  ];

  steps = [
    {
      number: 1,
      title: 'Contactez-nous',
      description: 'Prenez contact avec nous par email, téléphone ou réseaux sociaux.'
    },
    {
      number: 2,
      title: 'Venez essayer',
      description: 'Participez à une séance d\'entraînement gratuite pour découvrir le club.'
    },
    {
      number: 3,
      title: 'Inscrivez-vous',
      description: 'Remplissez votre dossier d\'inscription et rejoignez votre équipe !'
    }
  ];
}
