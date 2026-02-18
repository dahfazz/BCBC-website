import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Game } from '../../models/game.model';
import { GamesService } from '../../services/games.service';

@Component({
  selector: 'app-home',
  imports: [RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  standalone: true,
})
export class Home {
  private allGames: Game[] = [];
  private gamesService = inject(GamesService);
  constructor() {
    this.allGames = this.gamesService.getGames();
  }
  public getBilan(): string {
    let w = 0;
    let l = 0;

    this.allGames.forEach((g) => {
      if (g.scoreBCBC && g.scoreOpponent) {
        if (g.scoreBCBC > g.scoreOpponent) {
          w++;
        } else {
          l++;
        }
      }
    });

    return `${w}-${l}`;
  }

  public getAverage(forUs = true): number {
    const sum = this.allGames.reduce((acc, game) => {
      if (game.scoreBCBC && forUs) {
        return acc + game.scoreBCBC;
      } else {
        return acc + (game.scoreOpponent ?? 0);
      }
      return acc;
    }, 0);
    return Math.round(sum / this.allGames.filter((g) => g.scoreBCBC !== undefined).length);
  }

  public getNextGame(nb: number): Game[] | null {
    const now = new Date();
    const upcomingGames = this.allGames.filter((g) => new Date(g.date) > now);
    return upcomingGames.length > 0 ? upcomingGames.slice(0, nb) : null;
  }
}
