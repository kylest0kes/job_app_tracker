import type { AppState } from "../../interfaces/AppState";
import type { Action } from "../../types/Action";

export default function reducer(state: AppState, action: Action): AppState {
    switch (action.type) {
        case 'ADD_APPLICATION': {
            return {
                ...state,
                applications: [...state.applications, action.payload]
            }
        }
        case 'SELECT_APPLICATION': {
            return {
                ...state,
                selectedId: action.payload,
                activeView: 'detail'
            }
        }
        case 'DELETE_APPLICATION': {
            return {
                ...state,
                applications: state.applications.filter((app) => app.id !== action.payload),
                activeView: 'empty',
                selectedId: null
            }
        }
        case 'EDIT_APPLICATION': {
            return {
                ...state,
                applications: state.applications.map((app) => app.id === action.payload.id ? action.payload : app)
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}