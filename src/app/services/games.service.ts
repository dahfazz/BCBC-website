import { Injectable } from '@angular/core';
import { Game, GameLeague, GameLocation } from '../models/game.model';

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  private mockGames: Game[] = [
    {
      league: GameLeague.FSGT,
      date: '11/5/2025',
      opponent: 'Leviathan',
      location: GameLocation.AWAY,
      scoreBCBC: 63,
      scoreOpponent: 62,
    },
    {
      league: GameLeague.FSGT,
      date: '11/20/2025',
      opponent: 'ASDP 93',
      location: GameLocation.HOME,
      scoreBCBC: 76,
      scoreOpponent: 73,
    },
    {
      league: GameLeague.FSGT,
      date: '11/27/2025',
      opponent: 'Red Star 2',
      location: GameLocation.HOME,
      scoreBCBC: 84,
      scoreOpponent: 86,
    },
    {
      league: GameLeague.FSGT,
      date: '1/27/2026',
      opponent: 'RCS Montreuil',
      location: GameLocation.HOME,
      scoreBCBC: 72,
      scoreOpponent: 66,
    },
    {
      league: GameLeague.FSGT,
      date: '1/27/2026',
      opponent: 'Phil France',
      location: GameLocation.HOME,
      scoreBCBC: 77,
      scoreOpponent: 45,
    },
    {
      league: GameLeague.FSGT,
      date: '1/16/2026',
      opponent: 'AS Code Basket',
      location: GameLocation.AWAY,
      scoreBCBC: 82,
      scoreOpponent: 39,
    },
    {
      league: GameLeague.FSGT,
      date: '1/27/2026',
      opponent: 'Red Star 1',
      location: GameLocation.AWAY,
      scoreBCBC: 97,
      scoreOpponent: 37,
    },

    // POULE HAUTE
    {
      league: GameLeague.FSGT,
      date: '2/13/2026 20:00',
      opponent: 'ES Renault',
      location: GameLocation.AWAY,
      scoreBCBC: undefined,
      scoreOpponent: undefined,
    },
    {
      league: GameLeague.FSGT,
      date: '2/19/2026 20:00',
      opponent: 'Red Star 2',
      location: GameLocation.AWAY,
      scoreBCBC: undefined,
      scoreOpponent: undefined,
    },
    {
      league: GameLeague.FSGT,
      date: '3/10/2026 20:30',
      opponent: 'Safran CBL',
      location: GameLocation.AWAY,
      scoreBCBC: undefined,
      scoreOpponent: undefined,
    },
    {
      league: GameLeague.FSGT,
      date: '3/20/2026 21:00',
      opponent: 'AS Malgache',
      location: GameLocation.AWAY,
      scoreBCBC: undefined,
      scoreOpponent: undefined,
    },
    {
      league: GameLeague.FSGT,
      date: '3/27/2026 20:00',
      opponent: 'Bouygues Sports',
      location: GameLocation.AWAY,
      scoreBCBC: undefined,
      scoreOpponent: undefined,
    },
    {
      league: GameLeague.FSGT,
      date: '3/31/2026 20:00',
      opponent: 'RCS Montreuil',
      location: GameLocation.AWAY,
      scoreBCBC: undefined,
      scoreOpponent: undefined,
    },
    {
      league: GameLeague.FSGT,
      date: '4/16/2026 20:00',
      opponent: 'ASDP 93',
      location: GameLocation.AWAY,
      scoreBCBC: undefined,
      scoreOpponent: undefined,
    },

    // CORPO

    {
      league: GameLeague.FFBB,
      date: '12/13/2025 13:30',
      opponent: 'AS BNP Paribas',
      location: GameLocation.HOME,
      scoreBCBC: 20,
      scoreOpponent: 0,
    },

    {
      league: GameLeague.FFBB,
      date: '11/8/2025 13:30',
      opponent: 'CSMF Paris',
      location: GameLocation.AWAY,
      scoreOpponent: 47,
      scoreBCBC: 88,
    },

    {
      league: GameLeague.FFBB,
      date: '11/15/2025 13:30',
      opponent: 'APSAP - 2',
      location: GameLocation.HOME,
      scoreBCBC: 111,
      scoreOpponent: 48,
    },

    {
      league: GameLeague.FFBB,
      date: '12/20/2025 16:00',
      opponent: 'France Télévision',
      location: GameLocation.AWAY,
      scoreOpponent: 64,
      scoreBCBC: 79,
    },

    {
      league: GameLeague.FFBB,
      date: '11/29/2025 14:00',
      opponent: 'KPMG Sports',
      location: GameLocation.HOME,
      scoreBCBC: 102,
      scoreOpponent: 43,
    },

    {
      league: GameLeague.FFBB,
      date: '12/6/2025 13:30',
      opponent: 'Barreau de Paris',
      location: GameLocation.AWAY,
      scoreOpponent: 49,
      scoreBCBC: 107,
    },

    {
      league: GameLeague.FFBB,
      date: '1/17/2026 13:30',
      opponent: 'AS BNP Paribas',
      location: GameLocation.AWAY,
      scoreOpponent: 0,
      scoreBCBC: 20,
    },

    {
      league: GameLeague.FFBB,
      date: '1/24/2026 14:00',
      opponent: 'CSMF Paris',
      location: GameLocation.HOME,
      scoreBCBC: 91,
      scoreOpponent: 49,
    },

    {
      league: GameLeague.FFBB,
      date: '1/31/2026 13:30',
      opponent: 'APSAP - 2',
      location: GameLocation.AWAY,
      scoreOpponent: 22,
      scoreBCBC: 108,
    },

    {
      league: GameLeague.FFBB,
      date: '2/07/2026 13:30',
      opponent: 'France Télévision',
      location: GameLocation.HOME,
      scoreBCBC: 94,
      scoreOpponent: 49,
    },

    {
      league: GameLeague.FFBB,
      date: '2/14/2026 13:30',
      opponent: 'KPMG Sports',
      location: GameLocation.HOME,
      scoreOpponent: 0,
      scoreBCBC: 0,
    },

    {
      league: GameLeague.FFBB,
      date: '3/14/2026 13:30',
      opponent: 'Barreau de Paris',
      location: GameLocation.HOME,
      scoreBCBC: 0,
      scoreOpponent: 0,
    },
  ];

  getGames(): Game[] {
    return this.mockGames.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  }
}
