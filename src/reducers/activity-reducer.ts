import { TActivity } from "../types"

export type TActivityActions = 
    {type: 'save_activity', payload: {newActivity: TActivity}}


type TActivityState = {
    activities: TActivity[]
}

export const initialState : TActivityState = {
    activities: []
}

export const activityReducer = (
    state: TActivityState = initialState,
    action: TActivityActions
) => {
    if(action.type === 'save_activity') {
        return {
            ...state,
            activities: [...state.activities, action.payload.newActivity]
        }
    }

    return state
}