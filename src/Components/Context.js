import { createContext, useReducer } from "react";

export const themeContext = createContext();

const initialState = {visible: "user", cardflipFront: "mas", cardflipBack: "mas", cardflipOther: "mas"};

// const themeReducer = (state, action) => {
//     switch(action.type){
//         case 'User':
//             state = {visible: "user", cardflip: state.cardFlip};
//             return state;
//         case 'FileCheck':
//             state = {visible: "fileCheck", cardflip: state.cardFlip};
//             return state
//         case 'Mas':
//             state = {visible: state.visible, cardflip: "volver"};
//             return state;
//         case 'Volver':
//             state = {visible: state.visible, cardflip: "mas"};
//             return state;
//         default:
//             return state;
//     }
// }

const themeReducer = (state, action) => {
    switch(action.type){
        case 'User':
            state = {...state, visible: "user"};
            return state;
        case 'FileCheck':
            state = {state, visible: "fileCheck"};
            return state
        case 'MasFront':
            state = {...state, cardflipFront: "volver"};
            return state;
        case 'VolverFront':
            state = {...state, cardflipFront: "mas"};
            return state;
        case 'MasBack':
            state = {...state, cardflipBack: "volver"};
            return state;
        case 'VolverBack':
            state = {...state, cardflipBack: "mas"};
            return state;
        case 'MasOther':
            state = {...state, cardflipOther: "volver"};
            return state;
        case 'VolverOther':
            state = {...state, cardflipOther: "mas"};
            return state;
        default:
            return state;
    }
}

export const ThemeProvider = (props) => {
    const [state, dispatch] = useReducer(themeReducer, initialState);
    return (
        <themeContext.Provider value={{state, dispatch}}>
            {props.children}
        </themeContext.Provider>
    )
} ;

