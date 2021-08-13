import {UserType} from "../HW8";

export const homeWorkReducer = (state: UserType[], action: RootACType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'SORT': {
            console.log(action)
            if (action.payload === 'up') return [...state.sort( (a, b) => a.name > b.name ? 1 : -1)]
            if (action.payload === 'down') return [...state.sort( (a, b) => a.name < b.name ? 1 : -1)]
            return state
        }
        case "CHECK-AGE": {
            return state.filter( i => i.age > action.payload)
        }
        default: return state
    }
}

type RootACType = SortUpACType | CheckACType

type SortUpACType = ReturnType<typeof sortAC>
type CheckACType = ReturnType<typeof checkAC>

export const sortAC = (payload: 'up' | 'down') => { return {type: 'SORT', payload} as const }
export const checkAC = (payload: number) => { return {type: 'CHECK-AGE', payload} as const}

