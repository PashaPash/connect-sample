import { connect } from "react-redux";
import { CustomersPage, CustomersPageProps } from "../components/CustomersPage";
import { CustomersState } from "../reducers";

const mapStateToProps = (state) => ({
    //detailsCustomerId: state.customersPage.details.customerId,
});

export const CustomersPageContainer = connect(
    mapStateToProps,
    null
)(CustomersPage);
