import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesService } from '../../services/games.service';
import { Game, GameLocation } from '../../models/game.model';

@Component({
  selector: 'app-schedule',
  imports: [CommonModule],
  templateUrl: './schedule.html',
  styleUrl: './schedule.scss',
  standalone: true
})
export class Schedule implements OnInit {
  allGames: Game[] = [];

  GameLocation = GameLocation;

  private gamesService = inject(GamesService);

  ngOnInit(): void {
    this.allGames = this.gamesService.getGames();
  }

  getStatusClass(game: Game): string {
    return game.scoreBCBC! > game.scoreOpponent! ? 'status-win' : 'status-loss';
  }
}
