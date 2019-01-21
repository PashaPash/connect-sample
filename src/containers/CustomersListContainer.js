import React from "react";
import { connect } from "react-redux";
import { loadCustomerPageData, openDetails } from "../actions";
import { ColumnInfo, List, ListItem } from "../components/list";
import { CustomersState } from "../reducers";
import { getLoading } from "../selectors";
import { visibleListColumnsSelector } from "../selectors/listColumns";
import { filterCustomerListItemsSelector } from "../selectors/search";
import { ConnectedCustomerRow } from "./ConnectedCustomerRow";

const mapStateToProps = (state) => {
    const mapped = 
     ({
    columns: visibleListColumnsSelector(state),
    items: filterCustomerListItemsSelector(state),
    loading: getLoading(state.customersPage.pageState),
    });
    return mapped;
}

const mapDispatchToProps = {
    //initState: loadCustomerPageData,
    ///onRowClick: openDetails,
};

class CustomersList extends React.Component {
    
    componentDidMount() {
    }

    render() {
        console.log("CustomersList render")
        return (
            <List
                {...this.props}
                RowConnector={ConnectedCustomerRow}
                emptyListTheme={"customers"}
                emptyListDescription="empty_list"
            />
        );
    }
}

export const CustomerListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CustomersList);
