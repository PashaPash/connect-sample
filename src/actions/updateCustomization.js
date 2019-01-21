const api = 
{
    updateOperation: c => c
}

const saveCustomization = api.updateOperation(
    (newCustomization) => ({
        endpoint: "saveCustomization",
        body: {Columns: newCustomization},
        additionalParams: {
            postWithAuthToken: true,
        },
    })
)({uid: "SAVE_CUSTOMIZATION"});

export const setCustomization = (newCustomization) => ({
  type: "SET_CUSTOMIZATION",
  value: newCustomization,
});

export const updateCustomization = (customizationChange) => (dispatch) => {
    // build current customization based on prev state and actual state of clicked checkbox
    let current = customizationChange.prev
        .filter((x) => x.alias !== customizationChange.alias)
        .map((x) => ({alias: x.alias, checked: x.checked}));

    current.push({alias: customizationChange.alias, checked: customizationChange.isSelected});

    let currentAliases = current.filter((x) => x.checked).map((x) => ({Alias: x.alias}));

    dispatch(setCustomization(currentAliases));
    dispatch(saveCustomization(currentAliases));
};
