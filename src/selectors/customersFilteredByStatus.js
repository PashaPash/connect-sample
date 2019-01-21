import {createSelector} from "reselect";
import {CustomersFilter} from "../const";
import {CustomersState} from "../reducers";
import {Customer, Customers} from "../reducers/entities";

const customers = (state) => state.customersPage.entities.customers;
export const getCustomersList = (entities) => {
    let customers = entities || {};
    return Object.entries(customers).map(([, customer]) => customer);
};

const customersListSelector = createSelector(
    customers,
    getCustomersList
);

const predicates = {
    ["enabled"]: c => c.Enabled,
    ["disabled"]: c => !c.Enabled,
};

export const getCustomersFilteredByStatus = (customers, filter) => {
    let predicate = predicates[filter];
    return predicate ? customers.filter(predicate) : customers;
};

export const customersFilteredByStatusSelector = createSelector(
    customersListSelector,
    s => s.customersPage.filter,
    getCustomersFilteredByStatus
);