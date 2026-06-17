import type { Application } from "./Application";

export interface AppState {
    applications: Application[];
    selectedId: string | null;
    activeView: 'empty' | 'detail' | 'form'
}