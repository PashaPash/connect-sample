import { chain } from "lodash";
import { createSelector } from "reselect";
import { getCustomerState } from "../components/customersList/columnTemplates";
import { customerListItemSelector } from "./customerListItem";
import {customersFilteredByStatusSelector} from "./customersFilteredByStatus";
import { getCustomerListItem } from "./customerListItem";
import {getVisibleListFields} from "./index";

// export const filterCustomerListItem = (item, search) => {
//     let searchValue = search.toLocaleLowerCase().trim();
//     const result = Object.keys(item).find(key => {
//         switch (key) {
//             // we dont search by customerId field
//             case "CustomerId":
//                 return false;
//             case "Enabled":
//                 return getCustomerState(item).toLowerCase().includes(searchValue);
//             default:
//                 return (item[key] || "").toLowerCase().includes(searchValue);
//         }
//     });

//     return result ? true : false;
// };

export const filterCustomerListItems = (items, visibleFields) => {
    let listItems = chain(items).map(x => getCustomerListItem(x, visibleFields));
    
    // if (search && search !== '') {
    //     listItems = listItems.filter(item => filterCustomerListItem(item, search));
    // }

    return listItems.sortBy(x => (x.Name || "").toLowerCase())
                    .map(item => ({ id: item.CustomerId }))
                    .value();
};

export const filterCustomerListItemsSelector = createSelector(
    customersFilteredByStatusSelector,
    getVisibleListFields,
    filterCustomerListItems
);