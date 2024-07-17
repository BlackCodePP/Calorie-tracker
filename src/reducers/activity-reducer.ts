import { TActivity } from "../types"

export type TActivityActions = 
    {type: 'save_activity', payload: {newActivity: TActivity}} |
    {type: 'set_active', payload: {id: TActivity['id']}} |
    {type: 'delete_activity', payload: {id: TActivity['id']}}


export type TActivityState = {
    activities: TActivity[]
    activeId: TActivity['id']
}

export const initialState : TActivityState = {
    activities: [],
    activeId: ''
}

export const activityReducer = (
    state: TActivityState = initialState,
    action: TActivityActions
) => {

    if(action.type === 'save_activity') {
        let updatedActivities : TActivity[] = []

        if(state.activeId) {
            updatedActivities = state.activities.map(activity => activity.id === state.activeId ? 
            action.payload.newActivity : activity)
        } else {
            updatedActivities = [...state.activities, action.payload.newActivity]
        }
        return {
            ...state,
            activities: updatedActivities,
            activeId: ''
        }
    }

    if(action.type === 'set_active') {
        return {
            ...state,
            activeId: action.payload.id
        }
    }

    if(action.type === 'delete_activity') {
        return {
            ...state,
            activities: state.activities.filter(activity => activity.id !== action.payload.id)
        }
    }

    return state
}