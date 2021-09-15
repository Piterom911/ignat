const initState = {
    themeName: 'Royal'
};

type InitialStateType = {
    themeName: string
}

export const themeReducer = (state = initState, action: RootActionType): InitialStateType => {
    switch (action.type) {
        case "CHANGE-THEME": {
            return { themeName: action.themeName};
        }
        default:
            return state;
    }
};

type RootActionType = ChangeThemeType

type ChangeThemeType = { type: 'CHANGE-THEME', themeName: string }

export const changeThemeAC = (themeName: string): ChangeThemeType => {
    return { type: 'CHANGE-THEME', themeName }
};