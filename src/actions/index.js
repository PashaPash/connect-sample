import { Dispatch } from "redux";
import {loadFilter} from "./listFilter";


export const setSearch = (value) => ({
    type: "SET_SEARCH",
    value,
});

export const loadCustomerPageData = () => (dispatch) => {
    dispatch(loadFilter());
};

export { loadFilter } from "./listFilter";

export const openDetails = (customerId) => ({
    type: "DETAILS_OPENED",
    value: customerId,
});

export const detailsClosed = () => ({
    type: "DETAILS_CLOSED",
});

