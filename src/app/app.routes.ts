import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Schedule } from './pages/schedule/schedule';
import { Players } from './pages/players/players';
import { Partners } from './pages/partners/partners';
import { Historique } from './pages/historique/historique';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'schedule', component: Schedule },
  { path: 'players', component: Players },
  { path: 'partners', component: Partners },
  { path: 'historique', component: Historique },
  { path: '**', redirectTo: '' }
];
