import type { Application } from "../interfaces/Application";

export type Action =
  | { type: 'ADD_APPLICATION'; payload: Application }
  | { type: 'SELECT_APPLICATION'; payload: string }
  | { type: 'DELETE_APPLICATION'; payload: string }
  | { type: 'EDIT_APPLICATION'; payload: Application}