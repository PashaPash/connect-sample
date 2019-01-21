import { connect } from "react-redux";
import {saveFilter} from "../actions/listFilter";
import {Filter} from "../components/Filter";
import { CustomersState } from "../reducers";

const mapStateToProps = (state) => {
    const a = 0;
    return {
    value: state.customersPage.filter,
    isLoading: state.customersPage.pageState.isLoadingListFilter,
}};

export const ConnectedFilter = connect(
    mapStateToProps,
    { onChange: saveFilter }
)(Filter);