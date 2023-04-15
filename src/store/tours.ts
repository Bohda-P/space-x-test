import { atom } from 'recoil';

export interface Tours {
  rockets: Rocket[];
}

export interface Rocket {
  id: string;
  description: string;
  name: string;
  __typename: string;
}

export const toursState = atom({
  key: 'allTours',
  default: {} as Tours,
});

export const favoritesToursState = atom({
  key: 'favoritesTours',
  default: [] as Rocket[],
});

