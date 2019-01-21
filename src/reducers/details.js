export const detailsReducer = (state = {customerId: null}, action) => {

    switch (action.type) {
        case "DETAILS_OPENED": {
            return {customerId: action.value};
        }
        case "DETAILS_CLOSED": {
            return {customerId: null};
        }
        default:
            return state;
    }
};