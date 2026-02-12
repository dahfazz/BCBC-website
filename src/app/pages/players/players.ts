import { Component, OnInit } from '@angular/core';
import { PlayerCard } from '../../components/player-card/player-card';
import { PlayersService } from '../../services/players.service';
import { Player } from '../../models/player.model';

@Component({
  selector: 'app-players',
  imports: [PlayerCard],
  templateUrl: './players.html',
  styleUrl: './players.scss',
  standalone: true
})
export class Players implements OnInit {
  players: Player[] = [];

  constructor(private playersService: PlayersService) {}

  ngOnInit(): void {
    this.players = this.playersService.getPlayers();
  }
}
