import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Schedule } from './pages/schedule/schedule';
import { Players } from './pages/players/players';
import { Teams } from './pages/teams/teams';
import { TeamDetail } from './pages/team-detail/team-detail';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'schedule', component: Schedule },
  { path: 'players', component: Players },
  { path: 'teams', component: Teams },
  { path: 'teams/:id', component: TeamDetail },
  { path: '**', redirectTo: '' },
];
