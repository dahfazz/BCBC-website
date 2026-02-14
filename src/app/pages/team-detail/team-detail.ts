import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

interface TeamInfo {
  id: string;
  name: string;
  category: string;
  ageGroup: string;
  gender: string;
  description: string;
  coach?: string;
  assistantCoach?: string;
  trainingDay: string;
  trainingTime: string;
  location: string;
  objectives: string[];
  achievements: string[];
}

@Component({
  selector: 'app-team-detail',
  imports: [CommonModule, RouterModule],
  templateUrl: './team-detail.html',
  styleUrl: './team-detail.scss',
  standalone: true
})
export class TeamDetail implements OnInit {
  teamId: string | null = null;
  team: TeamInfo | null = null;

  private teamsData: { [key: string]: TeamInfo } = {
    'u13-garcons': {
      id: 'u13-garcons',
      name: 'U13 Garçons',
      category: 'Jeunes',
      ageGroup: 'U13',
      gender: 'Garçons',
      description: 'Notre équipe U13 Garçons est composée de jeunes talents motivés et passionnés par le basketball.',
      coach: 'À définir',
      assistantCoach: 'À définir',
      trainingDay: 'Lundi',
      trainingTime: '18h00 - 19h30',
      location: 'Gymnase Principal',
      objectives: [
        'Développer les fondamentaux du basketball',
        'Favoriser l\'esprit d\'équipe',
        'Participer aux compétitions départementales'
      ],
      achievements: []
    },
    'u13-filles': {
      id: 'u13-filles',
      name: 'U13 Filles',
      category: 'Jeunes',
      ageGroup: 'U13',
      gender: 'Filles',
      description: 'Notre équipe U13 Filles est composée de jeunes joueuses talentueuses et déterminées.',
      coach: 'À définir',
      assistantCoach: 'À définir',
      trainingDay: 'Mardi',
      trainingTime: '18h00 - 19h30',
      location: 'Gymnase Principal',
      objectives: [
        'Développer les fondamentaux du basketball',
        'Favoriser l\'esprit d\'équipe',
        'Participer aux compétitions départementales'
      ],
      achievements: []
    },
    'u15-garcons': {
      id: 'u15-garcons',
      name: 'U15 Garçons',
      category: 'Jeunes',
      ageGroup: 'U15',
      gender: 'Garçons',
      description: 'L\'équipe U15 Garçons poursuit son développement technique et tactique.',
      coach: 'À définir',
      assistantCoach: 'À définir',
      trainingDay: 'Lundi',
      trainingTime: '19h30 - 21h00',
      location: 'Gymnase Principal',
      objectives: [
        'Perfectionnement technique',
        'Développement tactique',
        'Compétition régionale'
      ],
      achievements: []
    },
    'u15-filles': {
      id: 'u15-filles',
      name: 'U15 Filles',
      category: 'Jeunes',
      ageGroup: 'U15',
      gender: 'Filles',
      description: 'L\'équipe U15 Filles allie technique et détermination.',
      coach: 'À définir',
      assistantCoach: 'À définir',
      trainingDay: 'Mardi',
      trainingTime: '19h30 - 21h00',
      location: 'Gymnase Principal',
      objectives: [
        'Perfectionnement technique',
        'Développement tactique',
        'Compétition régionale'
      ],
      achievements: []
    },
    'u18-garcons': {
      id: 'u18-garcons',
      name: 'U18 Garçons',
      category: 'Cadets',
      ageGroup: 'U18',
      gender: 'Garçons',
      description: 'Nos cadets garçons évoluent à un niveau compétitif élevé.',
      coach: 'À définir',
      assistantCoach: 'À définir',
      trainingDay: 'Mercredi',
      trainingTime: '18h00 - 20h00',
      location: 'Gymnase Secondaire',
      objectives: [
        'Excellence sportive',
        'Préparation au haut niveau',
        'Compétition inter-régionale'
      ],
      achievements: []
    },
    'u18-filles': {
      id: 'u18-filles',
      name: 'U18 Filles',
      category: 'Cadets',
      ageGroup: 'U18',
      gender: 'Filles',
      description: 'Nos cadettes allient performance et esprit d\'équipe.',
      coach: 'À définir',
      assistantCoach: 'À définir',
      trainingDay: 'Mercredi',
      trainingTime: '20h00 - 22h00',
      location: 'Gymnase Secondaire',
      objectives: [
        'Excellence sportive',
        'Préparation au haut niveau',
        'Compétition inter-régionale'
      ],
      achievements: []
    },
    'u21-garcons': {
      id: 'u21-garcons',
      name: 'U21 Garçons',
      category: 'Juniors',
      ageGroup: 'U21',
      gender: 'Garçons',
      description: 'L\'équipe U21 Garçons représente l\'avenir du club.',
      coach: 'À définir',
      assistantCoach: 'À définir',
      trainingDay: 'Jeudi',
      trainingTime: '19h00 - 21h00',
      location: 'Gymnase Principal',
      objectives: [
        'Transition vers le niveau senior',
        'Développement du leadership',
        'Compétition nationale'
      ],
      achievements: []
    },
    'u21-filles': {
      id: 'u21-filles',
      name: 'U21 Filles',
      category: 'Juniors',
      ageGroup: 'U21',
      gender: 'Filles',
      description: 'L\'équipe U21 Filles se prépare au niveau senior.',
      coach: 'À définir',
      assistantCoach: 'À définir',
      trainingDay: 'Jeudi',
      trainingTime: '21h00 - 22h30',
      location: 'Gymnase Principal',
      objectives: [
        'Transition vers le niveau senior',
        'Développement du leadership',
        'Compétition nationale'
      ],
      achievements: []
    },
    'senior-garcons': {
      id: 'senior-garcons',
      name: 'Senior Garçons',
      category: 'Seniors',
      ageGroup: 'Senior',
      gender: 'Garçons',
      description: 'L\'équipe phare du club, évoluant au plus haut niveau.',
      coach: 'À définir',
      assistantCoach: 'À définir',
      trainingDay: 'Vendredi',
      trainingTime: '20h00 - 22h00',
      location: 'Gymnase Secondaire',
      objectives: [
        'Maintien en division supérieure',
        'Développement du jeu collectif',
        'Formation de jeunes talents'
      ],
      achievements: []
    },
    'senior-filles': {
      id: 'senior-filles',
      name: 'Senior Filles',
      category: 'Seniors',
      ageGroup: 'Senior',
      gender: 'Filles',
      description: 'L\'équipe senior féminine allie expérience et jeunesse.',
      coach: 'À définir',
      assistantCoach: 'À définir',
      trainingDay: 'Vendredi',
      trainingTime: '18h00 - 20h00',
      location: 'Gymnase Secondaire',
      objectives: [
        'Maintien en division supérieure',
        'Développement du jeu collectif',
        'Formation de jeunes talents'
      ],
      achievements: []
    },
    'veterans': {
      id: 'veterans',
      name: 'Vétérans',
      category: 'Vétérans',
      ageGroup: 'Vétéran',
      gender: 'Mixte',
      description: 'Nos vétérans continuent à pratiquer leur passion dans la bonne humeur.',
      coach: 'À définir',
      trainingDay: 'Samedi',
      trainingTime: '10h00 - 12h00',
      location: 'Gymnase Principal',
      objectives: [
        'Maintien de la forme physique',
        'Plaisir de jouer',
        'Convivialité'
      ],
      achievements: []
    }
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.teamId = params.get('id');
      if (this.teamId && this.teamsData[this.teamId]) {
        this.team = this.teamsData[this.teamId];
      }
    });
  }
}
