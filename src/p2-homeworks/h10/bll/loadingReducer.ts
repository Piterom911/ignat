type InitStateType = {
    isLoading: boolean
}

const initState: InitStateType = {
    isLoading: false
}

export const loadingReducer = (state: InitStateType = initState, action: RootActionType): InitStateType => {
    switch (action.type) {
        case 'TOGGLE-IS-LOADING': {
            return {...state, isLoading: action.isLoading}
        }
        default: return state
    }
}

type RootActionType = ReturnType<typeof loadingAC>

type LoadingACType = { type: 'TOGGLE-IS-LOADING'; isLoading: boolean }

export const loadingAC = (isLoading: boolean): LoadingACType => {
    return {type: 'TOGGLE-IS-LOADING', isLoading}
}