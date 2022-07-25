import {createContext, useReducer} from 'react'

export const WorkoutsContext = createContext()

export const workoutsReducer = (state, action) => {
    // the state argument is the previous state before we make a chnage to it (reliable previous state value)
    // the action argument is the object we pass into the dispatch function 
    switch(action.type){
        case 'SET_WORKOUTS': 
            return {
                workouts: action.payload
            }
        case 'CREATE_WORKOUT':
            // all of this is just to keep the local state in sync with the database we are not interacting with the database
            return {
                workouts: [action.payload, ...state.workouts]
            }
        case 'DELETE_WORKOUT':
            return{
                workouts: state.workouts.filter((w) => w._id !== action.payload._id)
            }
        default: 
            return state
    }
}

export const WorkoutsContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(workoutsReducer, {
        workouts: null
    })
// the useReducer hook is similar to the useState hook because there is a state and a way to update the state 
// example  use dispatch({type: 'SET_WORKOUTS', payload: [{}, {}]}) the ype describes the state change the payload property represents any data we need to make the change so in our case it would be an array of workout objects
// when we call the dispatch function it calls our workoutsReducer function 
    return (
        <WorkoutsContext.Provider value={{...state, dispatch}}>
            {children}
        </WorkoutsContext.Provider>
    )
}

//the workoutContext Provider must wrap any of the context that it represents
// since we exported workoutsContextProvider and had it wrap around the root app component in index.js it means the children prop is the whole root app component
// since the WorkoutsContext.provider wraps the root app component and the app component wraps all other components in the application it means that all components will have access to our workouts context
