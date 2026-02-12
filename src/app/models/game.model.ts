export enum GameLocation {
  HOME = 'Domicile',
  AWAY = 'Extérieur'
}

export enum GameLeague {
  FSGT = 'FSGT',
  FFBB = 'FFBB'
}

export interface Game {
  league: GameLeague;
  date: string;
  opponent: string;
  location: GameLocation;
  scoreBCBC?: number;
  scoreOpponent?: number;
}
