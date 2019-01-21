import { chain } from "lodash";
import { createSelector } from "reselect";
import { CustomersState } from "../reducers";
import { CustomizationsState } from "../reducers/customizations";
import { PageState } from "../reducers/page";

export * from "./countries";

export const cfsMetadata = (state) => state.customersPage.entities.cfsMetadata;
const customizations = (state) => state.customersPage.customizations;
export const getLoading = (state) => state.isLoadingCustomers ||
                                                state.isLoadingCustomizations ||
                                                state.isLoadingCfsMetadata ||
                                                state.isLoadingListFilter;

export const mapVisibleListFields = (cfs, customizations) => {
    let listItems = mapAvailableListFields(cfs);

    if (!customizations) {
       return listItems;
     }

    return chain(listItems)
        .filter(x => customizations.some(t => t.Alias === x.alias))
        .value();
};

export const mapAvailableListFields = (cfs) => {
    let allCfs = chain(cfs)
        .filter(x => x.FieldDataTypeId !== "textAreaRich")
        .map(x => ({ alias: x.FieldName, cfMetadata: x }) )
        .orderBy(x => x.cfMetadata.Order)
        .value();

    allCfs.unshift({alias: "Description"});

    return allCfs;
};

export const mapCustomizationItems = (all, visible) => {
    return chain(all)
        .map(x => ({
            alias: x.alias,
            displayName: x.alias === "Description" ?
                "description_title" :
                x.cfMetadata.DisplayName,
            checked: visible.some(t => t.alias === x.alias)}))
        .value();
};

export const getVisibleListFields = createSelector(
    cfsMetadata,
    customizations,
    mapVisibleListFields
);

export const getAvailableListFields = createSelector(
    cfsMetadata,
    mapAvailableListFields
);

export const getCustomizationItems = createSelector(
    getAvailableListFields,
    getVisibleListFields,
    mapCustomizationItems
);