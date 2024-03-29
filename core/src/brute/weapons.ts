import { WeaponName } from '../types.js';

export interface Weapon {
  name: WeaponName;
  odds: number;
  types: ('fast' | 'sharp' | 'heavy' | 'long' | 'thrown' | 'blunt')[];
  interval: number;
  counterRate: number;
  evasion: number;
  evasionNullifier?: boolean;
  reversalRate: number;
  blockRate: number;
  accuracy: number;
  precision: number;
  disarmRate: number;
  damage: number;
}

const weapons: Weapon[] = [
  {
    name: 'axe',
    odds: 3213 / 480838,
    types: ['heavy', 'blunt'],
    interval: 2.3,
    counterRate: 0.1,
    evasion: -0.4,
    reversalRate: -0.2,
    blockRate: -0.5,
    accuracy: 0.5,
    precision: -0.3,
    disarmRate: 0.1,
    damage: 55,
  },
  {
    name: 'baton',
    odds: 73373 / 480838,
    types: ['long'],
    interval: 1,
    counterRate: 0.3,
    evasion: 0.05,
    reversalRate: 0.3,
    blockRate: 0.25,
    accuracy: 0,
    precision: 0,
    disarmRate: 0.25,
    damage: 6,
  },
  {
    name: 'broadsword',
    odds: 104757 / 480838,
    types: ['sharp'],
    interval: 1.2,
    counterRate: 0.1,
    evasion: 0,
    reversalRate: 0.1,
    blockRate: 0.15,
    accuracy: 0,
    precision: 0,
    disarmRate: 0.15,
    damage: 10,
  },
  {
    name: 'bumps',
    odds: 52353 / 480838,
    types: ['heavy', 'blunt'],
    interval: 2,
    counterRate: 0.1,
    evasion: -0.3,
    reversalRate: -0.3,
    blockRate: -0.3,
    accuracy: 0.3,
    precision: -0.35,
    disarmRate: 0.1,
    damage: 30,
  },
  {
    name: 'fan',
    odds: 2087 / 480838,
    types: ['fast'],
    interval: 0.28,
    counterRate: 0,
    evasion: 0.6,
    reversalRate: 0.5,
    blockRate: -0.5,
    accuracy: 0,
    precision: 0.5,
    disarmRate: -0.5,
    damage: 4,
  },
  {
    name: 'flail',
    odds: 4275 / 480838,
    types: ['heavy', 'blunt'],
    interval: 2.2,
    counterRate: 0.1,
    evasion: -0.3,
    reversalRate: 0,
    blockRate: -0.5,
    accuracy: 1.5,
    precision: -0.1,
    disarmRate: -0.2,
    damage: 36,
  },
  {
    name: 'fryingPan',
    odds: 604 / 480838,
    types: ['heavy', 'blunt'],
    interval: 1.2,
    counterRate: 0.1,
    evasion: 0,
    reversalRate: 0,
    blockRate: 0.4,
    accuracy: 0,
    precision: 0,
    disarmRate: 0,
    damage: 17,
  },
  {
    name: 'halbard',
    odds: 2200 / 480838,
    types: ['long', 'sharp'],
    interval: 1.8,
    counterRate: 0.4,
    evasion: 0,
    reversalRate: 0,
    blockRate: 0,
    accuracy: 0,
    precision: -0.4,
    disarmRate: 0.1,
    damage: 24,
  },
  {
    name: 'hatchet',
    odds: 41922 / 480838,
    types: ['heavy'],
    interval: 1.5,
    counterRate: 0.1,
    evasion: 0,
    reversalRate: 0,
    blockRate: -0.1,
    accuracy: 0,
    precision: 0,
    disarmRate: 0,
    damage: 17,
  },
  {
    name: 'keyboard',
    odds: 544 / 480838,
    types: ['fast', 'blunt'],
    interval: 1,
    counterRate: 0.1,
    evasion: 0.1,
    reversalRate: 0,
    blockRate: 0,
    accuracy: 0,
    precision: 0.2,
    disarmRate: 0,
    damage: 7,
  },
  {
    name: 'knife',
    odds: 84097 / 480838,
    types: ['fast', 'sharp'],
    interval: 0.6,
    counterRate: 0,
    evasion: 0.1,
    reversalRate: 0,
    blockRate: 0,
    accuracy: 0,
    precision: 0.5,
    disarmRate: 0,
    damage: 7,
  },
  {
    name: 'lance',
    odds: 41739 / 480838,
    types: ['long'],
    interval: 1.2,
    counterRate: 0.3,
    evasion: 0,
    reversalRate: -0.1,
    blockRate: 0,
    accuracy: 0,
    precision: 0,
    disarmRate: 0.1,
    damage: 12,
  },
  {
    name: 'leek',
    odds: 613 / 480838,
    types: ['fast', 'blunt'],
    interval: 1.1,
    counterRate: 0.1,
    evasion: 0,
    evasionNullifier: true,
    reversalRate: 1,
    blockRate: -0.5,
    accuracy: 2,
    precision: 1,
    disarmRate: 0,
    damage: 5,
  },
  {
    name: 'mammothBone',
    odds: 20831 / 480838,
    types: ['heavy', 'blunt'],
    interval: 1.6,
    counterRate: 0.1,
    evasion: 0,
    reversalRate: 0,
    blockRate: 0,
    accuracy: 0.5,
    precision: 0,
    disarmRate: 0.1,
    damage: 14,
  },
  {
    name: 'morningStar',
    odds: 6345 / 480838,
    types: ['heavy', 'blunt'],
    interval: 1.5,
    counterRate: 0.1,
    evasion: -0.1,
    reversalRate: 0,
    blockRate: 0,
    accuracy: 0.3,
    precision: -0.05,
    disarmRate: 0.1,
    damage: 20,
  },
  {
    name: 'mug',
    odds: 551 / 480838,
    types: ['fast'],
    interval: 0.9,
    counterRate: 0.1,
    evasion: 0.15,
    reversalRate: 0,
    blockRate: -0.1,
    accuracy: 0,
    precision: 0.3,
    disarmRate: 0,
    damage: 8,
  },
  {
    name: 'noodleBowl',
    odds: 601 / 480838,
    types: ['thrown'],
    interval: 0.45,
    counterRate: 0,
    evasion: 0.1,
    reversalRate: 0,
    blockRate: -0.1,
    accuracy: 0,
    precision: 0,
    disarmRate: 0,
    damage: 10,
  },
  {
    name: 'piopio',
    odds: 562 / 480838,
    types: ['thrown'],
    interval: 0.32,
    counterRate: 0,
    evasion: 0,
    reversalRate: 0,
    blockRate: -0.1,
    accuracy: 0,
    precision: 0,
    disarmRate: 0,
    damage: 5,
  },
  {
    name: 'racquet',
    odds: 572 / 480838,
    types: ['fast', 'blunt'],
    interval: 0.8,
    counterRate: 0.1,
    evasion: 0.1,
    reversalRate: 1,
    blockRate: 0.2,
    accuracy: 0,
    precision: 0,
    disarmRate: 0,
    damage: 6,
  },
  {
    name: 'sai',
    odds: 6645 / 480838,
    types: ['fast'],
    interval: 0.6,
    counterRate: 0,
    evasion: 0.1,
    reversalRate: 0,
    blockRate: 0.3,
    accuracy: 0,
    precision: 0.25,
    disarmRate: 1,
    damage: 8,
  },
  {
    name: 'scimitar',
    odds: 6277 / 480838,
    types: ['sharp'],
    interval: 0.8,
    counterRate: 0.1,
    evasion: 0,
    reversalRate: 0,
    blockRate: 0.1,
    accuracy: 0,
    precision: 0.2,
    disarmRate: 0,
    damage: 10,
  },
  {
    name: 'shuriken',
    odds: 8451 / 480838,
    types: ['thrown'],
    interval: 0.12,
    counterRate: 0,
    evasion: 0.15,
    reversalRate: 0,
    blockRate: -0.1,
    accuracy: 0,
    precision: 0,
    disarmRate: -0.5,
    damage: 3,
  },
  {
    name: 'sword',
    odds: 4125 / 480838,
    types: ['sharp'],
    interval: 1.8,
    counterRate: 0.2,
    evasion: -0.2,
    reversalRate: 0,
    blockRate: 0,
    accuracy: -0.2,
    precision: -0.1,
    disarmRate: 0.1,
    damage: 28,
  },
  {
    name: 'trident',
    odds: 10415 / 480838,
    types: ['long'],
    interval: 1.4,
    counterRate: 0.3,
    evasion: 0,
    reversalRate: 0.05,
    blockRate: 0,
    accuracy: 0,
    precision: 0,
    disarmRate: 0.2,
    damage: 14,
  },
  {
    name: 'trombone',
    odds: 557 / 480838,
    types: ['heavy', 'blunt'],
    interval: 250,
    counterRate: 0.2,
    evasion: 0,
    reversalRate: 0,
    blockRate: 0.2,
    accuracy: 0.2,
    precision: -0.1,
    disarmRate: 0.5,
    damage: 20,
  },
  {
    name: 'whip',
    odds: 3130 / 480838,
    types: ['long'],
    interval: 1.5,
    counterRate: 0.5,
    evasion: 0.3,
    reversalRate: -0.1,
    blockRate: -0.2,
    accuracy: -0.2,
    precision: 0.3,
    disarmRate: 0.3,
    damage: 10,
  },
];

export default weapons;
