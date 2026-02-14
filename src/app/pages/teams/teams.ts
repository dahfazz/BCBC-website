import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Team {
  id: string;
  name: string;
  category: string;
  ageGroup: string;
  gender: string;
  description: string;
  image?: string;
}

@Component({
  selector: 'app-teams',
  imports: [CommonModule, RouterModule],
  templateUrl: './teams.html',
  styleUrl: './teams.scss',
  standalone: true
})
export class Teams {
  teams: Team[] = [
    {
      id: 'u13-garcons',
      name: 'U13 Garçons',
      category: 'Jeunes',
      ageGroup: 'U13',
      gender: 'Garçons',
      description: 'Équipe des garçons de moins de 13 ans'
    },
    {
      id: 'u13-filles',
      name: 'U13 Filles',
      category: 'Jeunes',
      ageGroup: 'U13',
      gender: 'Filles',
      description: 'Équipe des filles de moins de 13 ans'
    },
    {
      id: 'u15-garcons',
      name: 'U15 Garçons',
      category: 'Jeunes',
      ageGroup: 'U15',
      gender: 'Garçons',
      description: 'Équipe des garçons de moins de 15 ans'
    },
    {
      id: 'u15-filles',
      name: 'U15 Filles',
      category: 'Jeunes',
      ageGroup: 'U15',
      gender: 'Filles',
      description: 'Équipe des filles de moins de 15 ans'
    },
    {
      id: 'u18-garcons',
      name: 'U18 Garçons',
      category: 'Cadets',
      ageGroup: 'U18',
      gender: 'Garçons',
      description: 'Équipe des garçons de moins de 18 ans'
    },
    {
      id: 'u18-filles',
      name: 'U18 Filles',
      category: 'Cadets',
      ageGroup: 'U18',
      gender: 'Filles',
      description: 'Équipe des filles de moins de 18 ans'
    },
    {
      id: 'u21-garcons',
      name: 'U21 Garçons',
      category: 'Juniors',
      ageGroup: 'U21',
      gender: 'Garçons',
      description: 'Équipe des garçons de moins de 21 ans'
    },
    {
      id: 'u21-filles',
      name: 'U21 Filles',
      category: 'Juniors',
      ageGroup: 'U21',
      gender: 'Filles',
      description: 'Équipe des filles de moins de 21 ans'
    },
    {
      id: 'senior-garcons',
      name: 'Senior Garçons',
      category: 'Seniors',
      ageGroup: 'Senior',
      gender: 'Garçons',
      description: 'Équipe senior masculine'
    },
    {
      id: 'senior-filles',
      name: 'Senior Filles',
      category: 'Seniors',
      ageGroup: 'Senior',
      gender: 'Filles',
      description: 'Équipe senior féminine'
    },
    {
      id: 'veterans',
      name: 'Vétérans',
      category: 'Vétérans',
      ageGroup: 'Vétéran',
      gender: 'Mixte',
      description: 'Équipe des vétérans'
    }
  ];

  getTeamsByCategory(category: string): Team[] {
    return this.teams.filter(team => team.category === category);
  }

  get categories(): string[] {
    return Array.from(new Set(this.teams.map(team => team.category)));
  }
}
