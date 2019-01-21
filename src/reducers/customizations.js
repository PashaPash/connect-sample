export const customizationReducer = (state = [], action) => {
    switch (action.type) {
        case "GET_CUSTOMIZATIONS_SUCCESS":
            return !action.payload ? null : action.payload.Columns;
        case "SET_CUSTOMIZATION":
            return action.value;
        default:
            return state;
    }
};