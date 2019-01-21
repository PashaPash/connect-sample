import { connect } from "react-redux";
import {loadCountries} from "../actions/details";
import {InlineEditSelect} from "../components/details/Controls";
import {NamedItem} from "../dtos";
import {CustomersState} from "../reducers";
import { countryStatesList} from "../selectors/";

type StateProps = {
    isLoading?: boolean;
    options?: NamedItem[];
};

type DispatchedProps = {
    loadOptions?: () => any;
};

type OwnProps = ComponentProps<typeof InlineEditSelect> & { country: string };
export const StatesInlineEditSelect = connect<StateProps, DispatchedProps, OwnProps>((state: CustomersState, props) => ({
    isLoading: !state.customersPage.pageState.isCountriesLoaded,
    options: countryStatesList(state, props.country),
}), {
    loadOptions: loadCountries,
})(InlineEditSelect);