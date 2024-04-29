import { ReactNode } from 'react';

export interface Item {
  id: number;
  title: string;
  path: string;
}
export interface ItemProps {
  items: Item[];
}
export interface ProviderProps {
  children: ReactNode;
}
export interface IPost {
  id: number;
  title: string;
  body: string;
}
