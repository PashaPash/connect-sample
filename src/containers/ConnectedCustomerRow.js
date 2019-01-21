import { connect } from "react-redux";
import {customerListItemSelectorFactory} from "../selectors/customerListItem";

const customerRowMapStateToProps = () => {
    let customerListItemSelector = customerListItemSelectorFactory();
    return (state, ownProps) => ({
        customer: customerListItemSelector(state, ownProps.itemId),
    });
};

const CustomerRow = (props) => {
    let { renderRow, customer, ...renderProps} = props;
    return renderRow(customer, renderProps);
};

export const ConnectedCustomerRow = connect(customerRowMapStateToProps)(CustomerRow);

