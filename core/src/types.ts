export type Gender = 'male' | 'female';

export interface BodyParts {
  longHair: number,
  lowerRightArm: number,
  rightHand: number,
  upperRightArm: number,
  rightShoulder: number,
  rightFoot: number,
  lowerRightLeg: number,
  upperRightLeg: number,
  leftFoot: number,
  lowerLeftLeg: number,
  pelvis: number,
  upperLeftLeg: number,
  tummy: number,
  torso: number,
  head: number,
  leftHand: number,
  upperLeftArm: number,
  lowerLeftArm: number,
  leftShoulder: number,
}

export interface BodyColors {
  skin: {
    color: `#${string}`;
    shade: `#${string}`;
  };
  hair: {
    color: `#${string}`;
    shade: `#${string}`;
  };
  primary: {
    color: `#${string}`;
    shade: `#${string}`;
  };
  secondary: {
    color: `#${string}`;
    shade: `#${string}`;
  };
  accent: {
    color: `#${string}`;
    shade: `#${string}`;
  };
}

export interface Pets {
  dog: 0 | 1 | 2 | 3;
  panther: 0 | 1;
  bear: 0 | 1;
}

export type WeaponName = 'fan' | 'keyboard' | 'knife'
  | 'leek' | 'mug' | 'sai'
  | 'racquet' | 'axe' | 'bumps'
  | 'flail' | 'fryingPan' | 'hatchet'
  | 'mammothBone' | 'morningStar'
  | 'trombone' | 'baton' | 'halbard'
  | 'lance' | 'trident' | 'whip'
  | 'noodleBowl' | 'piopio' | 'shuriken'
  | 'broadsword' | 'scimitar' | 'sword';

export type SkillName = 'herculeanStrength' | 'felineAgility' | 'lightningBolt'
  | 'vitality' | 'immortality' | 'weaponsMaster'
  | 'martialArts' | 'sixthSense' | 'hostility'
  | 'fistsOfFury' | 'shield' | 'armor'
  | 'toughenedSkin' | 'untouchable' | 'sabotage'
  | 'shock' | 'bodybuilder' | 'relentless'
  | 'survival' | 'thief' | 'fierceBrute'
  | 'tragicPotion' | 'net' | 'bomb'
  | 'hammer' | 'cryOfTheDamned' | 'hypnosis' | 'flashFlood';

export type PetName = 'dog' | 'panther' | 'bear';

export interface Stat {
  stat: number;
  modifier: number;
  value: number;
}

export interface Brute {
  name: string;
  rank: number;
  data: {
    user: string;
    level: number;
    xp: number;
    stats: {
      hp: number;
      endurance: Stat;
      strength: Stat;
      agility: Stat;
      speed: Stat;
    }
    ranking: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
    gender: Gender;
    body: BodyParts;
    colors: BodyColors;
    weapons: WeaponName[];
    skills: SkillName[];
    pets: Pets;
    master: string;
    victories: number;
    pupils: number;
    clan?: {
      id: number;
      name: string;
    },
    tournament?: string;
  };
}

export interface User {
  id: string;
  name: string;
  token: string;
  brutes?: Brute[];
}

export interface Log {
  id: number;
  currentBrute: number;
  type: 'win' | 'lose' | 'child' | 'childup'
  | 'up' | 'lvl' | 'survive';
  level?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  brute?: string;
  fight?: number;
  xp?: number;
}

export type Stats = 'endurance' | 'strength' | 'agility' | 'speed';

export interface LevelUpChoice {
  type: 'skill' | 'weapon' | 'pet' | 'stats';
  name: SkillName | WeaponName | PetName | Stats | [Stats, Stats];
  stats?: 3 | [2, 1];
  nextChoices?: [LevelUpChoice, LevelUpChoice];
  chosen: boolean;
}

export interface Destiny {
  id: number;
  brute: number;
  choices: [LevelUpChoice, LevelUpChoice];
}

export interface Fight {
  id: number;
  brute_1: string;
  brute_2: string;
  data: {
    steps: Record<string, unknown>[];
  }
}