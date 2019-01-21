import { createSelector } from "reselect";
import {getVisibleListFields, ListField} from "./index";

function formatCFValue(customer, cfMetadata) {
    let value = customer.CustomFields[cfMetadata.FieldName];
    
    switch (cfMetadata.FieldDataTypeId) {
        
        case "boolean":
            return value;
            
        case "numeric":
            return value;
            
        case "date":
            return value;
            
        case "list":
            let fieldValue = cfMetadata.Values.find(x => x.FieldValueID === value);
            return fieldValue ? fieldValue.Value : "";
            
        default:
            return value || "";
    }
}

export const getCustomerListItem = (customer, visibleFields) => {
    let result = {
        CustomerId: customer.CustomerId,
        Name: customer.Name,
        Enabled: customer.Enabled,
    };

    visibleFields.forEach(x => {
        if (x.cfMetadata) {
            result[x.alias] = formatCFValue(customer, x.cfMetadata);
        } else {
            result[x.alias] = customer[x.alias];
        }
    });

    return result;
};


export const customerListItemSelectorFactory = () => createSelector(
    (state, id) => state.customersPage.entities.customers[id],
    getVisibleListFields,
    getCustomerListItem
);