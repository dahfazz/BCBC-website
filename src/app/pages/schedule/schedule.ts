import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesService } from '../../services/games.service';
import { Game, GameLocation } from '../../models/game.model';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

interface GameData {
  opponent: string;
  date: string;
}

@Component({
  selector: 'app-schedule',
  imports: [CommonModule],
  templateUrl: './schedule.html',
  styleUrl: './schedule.scss',
  standalone: true,
})
export class Schedule implements OnInit {
  firestore = inject(Firestore);

  public readonly $games: Observable<GameData[]>;

  constructor() {
    const itemCollection = collection(this.firestore, 'schedule');
    this.$games = collectionData(itemCollection) as Observable<GameData[]>;
  }

  //
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
