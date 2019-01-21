import {SetSearch} from "../actions";

export const searchReducer = (state = {value: ""}, action) => {
    switch (action.type) {
        case "SET_SEARCH":
            return {value: action.value};
        default:
            return state;
    }
};
