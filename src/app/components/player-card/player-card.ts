import { Component, Input } from '@angular/core';
import { Player } from '../../models/player.model';

@Component({
  selector: 'app-player-card',
  imports: [],
  templateUrl: './player-card.html',
  styleUrl: './player-card.scss',
  standalone: true
})
export class PlayerCard {
  @Input() player!: Player;
}
