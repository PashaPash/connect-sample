import { combineReducers, ReducersMapObject } from "redux";
import { customizationReducer, CustomizationsState } from "./customizations";
import { detailsReducer, DetailsState } from "./details";
import { createCustomersEntityReducer, EntitiesState } from "./entities";
import { FilterState, listFilterReducer } from "./listFilter";
import { createPageReducer, PageState } from "./page";
import { searchReducer, SearchState } from "./search";

const reducersMapObj = {
    entities: createCustomersEntityReducer,
    pageState: createPageReducer,
    customizations: customizationReducer,
    filter: listFilterReducer,
    search: searchReducer,
};

export const CustomersReducer = () => combineReducers({
    customersPage: combineReducers(reducersMapObj),
});