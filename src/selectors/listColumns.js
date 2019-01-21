import { createSelector } from "reselect";
import {customerColumns} from "../components/customersList/columns";
import {getVisibleListFields, ListField} from "./index";

export const getVisibleListColumns = (visibleFields) => {
    let result = visibleFields.map(
        field => field.cfMetadata ?
                 customerColumns.createCustomFieldColumn(field.cfMetadata) :
                 // @ts-ignore
                 customerColumns[field.alias]
    );
    
    result.unshift(customerColumns.Name);
    return result;
};

export const visibleListColumnsSelector = createSelector(
    getVisibleListFields,
    getVisibleListColumns
);