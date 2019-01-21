import * as React from 'react';
import {Component} from 'react';
import {CustomerListContainer} from "../containers/CustomersListContainer";
import "./CustomersPage.css";
import {Header} from "./Header";


export class CustomersPage extends Component {
    static defaultProps = {
        detailsCustomerId: null,
    };
    
    render() {
        let {detailsCustomerId} = this.props;
        
        return (
            <div className="inner_container">
                <div className="list">
                    <Header />
                    <CustomerListContainer />
                </div>
            </div>
        );
    }
}


