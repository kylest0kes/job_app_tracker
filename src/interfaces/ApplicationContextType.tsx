import React from "react";
import type { Action } from "../types/Action";
import type { AppState } from "./AppState";

export interface ApplicationConextType {
    state: AppState
    dispatch: React.Dispatch<Action>;
}