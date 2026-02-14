import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TrainingSession {
  team: string;
  day: string;
  time: string;
  location: string;
}

@Component({
  selector: 'app-trainings',
  imports: [CommonModule],
  templateUrl: './trainings.html',
  styleUrl: './trainings.scss',
  standalone: true
})
export class Trainings {
  trainingSessions: TrainingSession[] = [
    { team: 'U13 Garçons', day: 'Lundi', time: '18h00 - 19h30', location: 'Gymnase Principal' },
    { team: 'U13 Filles', day: 'Mardi', time: '18h00 - 19h30', location: 'Gymnase Principal' },
    { team: 'U15 Garçons', day: 'Lundi', time: '19h30 - 21h00', location: 'Gymnase Principal' },
    { team: 'U15 Filles', day: 'Mardi', time: '19h30 - 21h00', location: 'Gymnase Principal' },
    { team: 'U18 Garçons', day: 'Mercredi', time: '18h00 - 20h00', location: 'Gymnase Secondaire' },
    { team: 'U18 Filles', day: 'Mercredi', time: '20h00 - 22h00', location: 'Gymnase Secondaire' },
    { team: 'U21 Garçons', day: 'Jeudi', time: '19h00 - 21h00', location: 'Gymnase Principal' },
    { team: 'U21 Filles', day: 'Jeudi', time: '21h00 - 22h30', location: 'Gymnase Principal' },
    { team: 'Senior Garçons', day: 'Vendredi', time: '20h00 - 22h00', location: 'Gymnase Secondaire' },
    { team: 'Senior Filles', day: 'Vendredi', time: '18h00 - 20h00', location: 'Gymnase Secondaire' },
    { team: 'Vétérans', day: 'Samedi', time: '10h00 - 12h00', location: 'Gymnase Principal' }
  ];

  getDayColor(day: string): string {
    const colors: { [key: string]: string } = {
      'Lundi': '#1e3a8a',
      'Mardi': '#7c2d12',
      'Mercredi': '#065f46',
      'Jeudi': '#7c2d12',
      'Vendredi': '#581c87',
      'Samedi': '#be123c'
    };
    return colors[day] || '#1e3a8a';
  }
}
