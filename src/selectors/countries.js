import {createSelector} from "reselect";
import {CustomersState} from "../reducers";
import {EntitiesState, State} from "../reducers/entities";

const countries = (state) => state.customersPage.entities.countries;

/**
 *  Sorts countries list alphabetically but move "United States" as a first item and "Canada" as the second one 
 */
const countriesSortComparer = (a, b) => {
    let aName = a.name,
        bName = b.name;
    if (aName === bName) {
        return 0;
    }
    
    if (aName === "United States") {
        return -1;
    }
    
    if (bName === "United States") {
        return 1;
    }
    
    if (aName === "Canada") {
        return -1;
    }
    
    if (bName === "Canada") {
        return 1;
    }
    
    return aName < bName ? -1 : 1;
};

export const mapCountries = (countries) => {
    let result = Object.entries(countries || {}).map(([, country]) => ({
        name: country.Name,
        value: country.Name,
    }));
    
    result.sort(countriesSortComparer);
    
    // add empty item
    result.unshift({ value: "", name: "None_Combobox_Text" });
    
    return result;
};

export const countriesList = createSelector(
    countries,
    mapCountries
);

const stateCountryName = (state, countryName) => countryName;
const getCountryStates = (countries, countryName) => {
    countries = countries || {};
    let country = countries[countryName];
    return (country && country.States) || [];
};

const mapStates = (states) => {
    return [
        { value: "", name: "None_Combobox_Text" },
        ...(states.map(s => ({ value: s.Name, name: s.Name}))),
    ];
};

const countryStates = createSelector(
    countries,
    stateCountryName,
    getCountryStates
);

export const countryStatesList = createSelector(
    countryStates,
    mapStates
);