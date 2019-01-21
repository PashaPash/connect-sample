import { detailsReducer } from './details'
import { combineReducers } from "redux";

const deleteEntity = (source, action, key) => {
    if (key !== action.entityName || !source) {
        return source;
    }

    let result = { ...source };
    delete result[action.entityId];
    return result;
};

const entries = {};

export const mergeEntity = (source, data) => {
    if (!data) {
        return source;
    }
    
    let result = { ...source };
    entries(data).forEach(([id, item]) => {
        result[id] = {
            ...(result[id] || {}),
            ...(item),
        };
    });
    
    return result;
};

export const createEntityReducer = (key) => (state, action) => {
    switch (action.type) {
        case "UPDATE_ENTITIES": {
            return mergeEntity(state, action.entities[key]);
        }
        case "DELETE_ENTITY": {
            return deleteEntity(state, action, key);
        }
        default:
            return state;
    }
};

export function mergeCusomers(customer, data) {
    let result = { ...customer };

    if (Object.keys(result).indexOf(data.Alias) >= 0) {
        result[data.Alias] = data.Value;
    } else {
        result.CustomFields[data.Alias] = data.Value;
    }

    return result;
}


export function updateCusomers(source, data) {
    let customer = source[data.CustomerId];
    let customerId = data.CustomerId;

    return {
        ...source,
        [customerId]: mergeCusomers(customer, data),
    };
    
}

export const createCustomerReducer = (key) =>  {
    return (state = {}, action) => {
        switch (action.type) {
            case "UPDATE_ENTITIES": {
                return mergeEntity(state, action.entities[key]);
            }
            case "SET_DETAILS_FIELD": {
                return updateCusomers(state, action.value);
            }
            default:
                return state;
        }
    };
};

const customersState = {
    "CustomerId": 2,
    "Name": "Customer Name",
    "Description": "Description Text",
    "Enabled": false,
    "Address1": "3000",
    "Address2": "",
    "City": "West",
    "Country": "",
    "State": "",
    "PostalCode": "4333",
    "Phone1": "7333-33-21",
    "Phone2": "",
    "Fax": "",
    "HourlyRate": 0,
    "LastModificationDate": "2019-01-02T14:13:59.167",
    "CustomFields": {
      "CustomerInt0": 42
    }
};

const lotOfCustomers = { ...(new Array(100).fill().map((item, index) => ({...customersState, CustomerId: index}))) };


const customers = (state = lotOfCustomers, action) => {
    return state
}

const cfsMetadataState = {
    10: {"AccountId":1393,"FieldID":10,"EntityID":"Customer","FieldName":"CustomerInt0","DisplayName":"Category","FieldDataTypeId":"List","FieldDataTypeName":"Int","Restrictions":[],"ShowForUnportfolioed":false,"IsRestricted":false,"Order":0,
    "Values" :[   {"AccountId":1393,"FieldValueID":10,"FieldID":10,"Value":"Press","Order":1},
        {"AccountId":1393,"FieldValueID":11,"FieldID":10,"Value":"Architect","Order":0}]}
}

const cfsMetadata = (state = cfsMetadataState, action) => {
    return state
}

export const createCustomersEntityReducer = combineReducers({
    detailsReducer,
    customers,
    cfsMetadata,
});