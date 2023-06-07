export type Character = {
  regnalYears: number;
  weapon: string;
  skill: number;
  characterToAdvise: string;
  brownNose: number;
  id: number;
  name: string;
  family: string;
  age: number;
  isAlive: boolean;
  speech: string;
  image: string;
};

export interface King extends Character {
  regnalYears: number;
}

export interface Squire extends Character {
  characterToServe: string;
  brownNose: number;
}

export interface Adviser extends Character {
  characterToAdvise: string;
}

export interface Warrior extends Character {
  weapon: string;
  skill: number;
}

export interface King extends Character {
  regnalYears: number;
}
