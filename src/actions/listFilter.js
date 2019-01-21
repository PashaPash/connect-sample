import { Dispatch } from "redux";
import {FilterState} from "../reducers/listFilter";

const api = {
    getAction: s => s,
    updateOperation: s => s,
}

export const loadFilter = api.getAction(() => ({
    endpoint: "getFilter",
    types: {
        requestType: "GET_CUSTOMERLIST_FILTER",
        successType: "GET_CUSTOMERLIST_FILTER_SUCCESS",
    },
    additionalParams: {postWithAuthToken: true},
}));

const saveFilterServerRequest = api.updateOperation(
    (filter) => ({
        endpoint: "saveFilter",
        body: { filter },
        additionalParams: {postWithAuthToken: true},
    })
)({uid: "SAVE_CUSTOMERLIST_FILTER"});

const setFilter = (filter) => ({
    type: "SET_CUSTOMERLIST_FILTER",
    value: filter,
});

export const saveFilter = (filter) => (dispatch) => {
    dispatch(setFilter(filter));
    dispatch(saveFilterServerRequest(filter));
};

