import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Schedule } from './pages/schedule/schedule';
import { Players } from './pages/players/players';
import { Partners } from './pages/partners/partners';
import { Historique } from './pages/historique/historique';
import { ProjetsSociaux } from './pages/projets-sociaux/projets-sociaux';
import { Trainings } from './pages/trainings/trainings';
import { Teams } from './pages/teams/teams';
import { TeamDetail } from './pages/team-detail/team-detail';
import { Facilities } from './pages/facilities/facilities';
import { JoinUs } from './pages/join-us/join-us';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'schedule', component: Schedule },
  { path: 'players', component: Players },
  { path: 'partners', component: Partners },
  { path: 'historique', component: Historique },
  { path: 'projets-sociaux', component: ProjetsSociaux },
  { path: 'trainings', component: Trainings },
  { path: 'teams', component: Teams },
  { path: 'teams/:id', component: TeamDetail },
  { path: 'facilities', component: Facilities },
  { path: 'join-us', component: JoinUs },
  { path: '**', redirectTo: '' }
];
