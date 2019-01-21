import { connect } from "react-redux";
import { updateCustomization } from "../actions/updateCustomization";
import { CustomizationList, CustomizationsPopupProps } from "../components/CustomizationList";
import { CustomersState } from "../reducers";
import { getCustomizationItems, getLoading } from "../selectors";

const mapDispatchToProps = {
    updateCustomization,
};


const mapStateToProps = (state) => ({
    customizations: getCustomizationItems(state),
    loading: getLoading(state.customersPage.pageState),
});

export const CustomizationListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CustomizationList);