import {ListFilterActions} from "../actions/";

export const listFilterReducer = (state = "all", action) => {
    switch (action.type) {
        case "GET_CUSTOMERLIST_FILTER_SUCCESS":
            // use default state (filter.all) if there is no saved filter on server
            return action.payload.Filter || state;
        case "SET_CUSTOMERLIST_FILTER":
            return action.value;
        default:
            return state;
    }
};