const initState = {
    isLoadingCustomers: false,
    isLoadingCfsMetadata: false,
    isLoadingCustomizations: false,
    isLoadingListFilter: false,
    isCountriesLoaded: false,
};

export const createPageReducer = (state = initState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};