import {connect} from "react-redux";
import {setSearch} from "../actions";
import * as React from 'react';
import {Component, ReactElement} from "react";
    
const mapStateToProps = (state) => ({
    value: state.customersPage.search.value,
});

const mapDispatchToProps = {
    setSearch,
};

class Search extends React.Component {
    onChange = (e) => 
    {
        const t1 = performance.now();
        this.props.setSearch(e.target.value);
        console.log(performance.now() - t1);
    }

    render() {
        return (
            <input value={this.props.value} onChange={this.onChange} />
            // <Input
            //     autoComplete={"off"}
            //     theme={inputTheme.search}
            //     value={this.props.value}
            //     onChangeAction={this.props.setSearch}
            //     placeholder={ep.resources.commonClient.Search}
            // />
        );
    }
}

export const SearchContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);