import { createContext, useReducer, useEffect } from "react";
import type { ApplicationConextType } from "../../interfaces/ApplicationContextType";
import reducer from "./applicationReducer";
import type { AppState } from "../../interfaces/AppState";

// creating the context, to be used in the Provider, to provide the state thru the reducer, which is the AppState (ApplicationContextType has 'state' defined as the AppState type)
// as well as the dispatch method, which allows for the state to be updated via a reducer method that gets passed to dispatch
const ApplicationContext = createContext<ApplicationConextType>({
    state: {
        applications: [],
        selectedId: null,
        activeView: 'empty'
    },
    dispatch: () => {} 
});

// creating the provider. its prop is 'children' as the provider wraps child components, allowing the children to have access to the context
const ApplicationProvider = ({ children }: { children: React.ReactNode }) => {
    // define the intial state (AppState) to pass to the reducer, since the reducer takes an initial state and then has actions to update it
    // the intial state follows what is definded in AppState, so it is of that type
    const initialState: AppState = {
        applications: [],
        selectedId: null,
        activeView: 'empty'
    }

    // method to attempt to get the stored data from local storage. 
    const getStoredData = (initialState: AppState): AppState => {
        // try to get the data and save it as a storedData var
        try {
            const storedData = localStorage.getItem("applicationTrackerData");
            // if there is a storedData from local storage, parse and return that data, otherwise use the passed in initial state
            return storedData ? JSON.parse(storedData) : initialState;
        } catch (error) {
            console.error("Error reading from local storage: ", error);
            return initialState;
        }
    }
    
    // setting up the reducer within the provider context. we get the state and a dispatch method from the reducer, which is defined via the useReducer hook
    // where we provide the reducer we made, and a initialState 
    const [state, dispatch] = useReducer(reducer, initialState, getStoredData);

    // useEffect to set the data in localstorage anytime the state data changes
    useEffect(() => {
        try {
            localStorage.setItem("applicationTrackerData", JSON.stringify(state));
        } catch (error) {
            console.error("Error saving to local storage: ", error);
        }
    }, [state]);

    return (
        // we set the value on the provider to the state from the reducer, as well as the dispatch method from the reducer so the children have access to the state 
        // which is managed via the reducer, as well as the dispatch methods in the reducer to update the state
        <ApplicationContext.Provider value={{ state, dispatch }}>
            {children}
        </ApplicationContext.Provider>
    );
}

export { ApplicationProvider };
export { ApplicationContext };
