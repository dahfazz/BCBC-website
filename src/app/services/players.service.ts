import { Injectable } from '@angular/core';
import { Player } from '../models/player.model';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  private mockPlayers: Player[] = [
    {
      name: 'Amadou',
      jerseyNumber: 8,
      position: 'Ailier Fort',
      height: '1m95',
      photo: 'amadou.jpg',
      bio: 'Président'
    },
    {
      name: 'Benji',
      jerseyNumber: 22,
      position: 'Meneur',
      height: '1m90',
      photo: 'benji.jpg',
      bio: 'Sniper intenable'
    },
    {
      name: 'Diomay',
      jerseyNumber: 92,
      position: 'Meneur',
      height: '1m90',
      photo: 'diomay.jpg',
      bio: 'Tchikio'
    },
    {
      name: 'Elias',
      jerseyNumber: 9,
      position: 'Ailier',
      height: '1m90',
      photo: 'elias.jpg',
      bio: 'Thon harisa'
    },
    {
      name: 'Marius',
      jerseyNumber: 13,
      position: 'Pivot',
      height: '2m50',
      photo: 'marius.jpg',
      bio: 'Jokic'
    },
    {
      name: 'Nathan',
      jerseyNumber: 12,
      position: 'Ailier',
      height: '2m00',
      photo: 'nathan.jpg',
      bio: 'Unstoppable'
    },
  ];

  getPlayers(): Player[] {
    return this.mockPlayers;
  }
}
