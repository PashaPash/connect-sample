import {noop} from 'lodash';
import * as React from 'react';
import {CustomizationListContainer} from "../containers/CustomizationListContainer";
import {ConnectedFilter} from "../containers/ListFilterContainer";
import {SearchContainer} from "../containers/SearchContainer";
import "./Header.css";

export const Header = () => (
    <div className="header">
        <Title/>
        <div className="middle_bar">
            <ConnectedFilter />
        </div>
        <div className="bottom_bar">
            <SearchContainer/>
            <ListCustomization />
        </div>
    </div>
);

const Title = () => (
    <div className="tob_bar">
        <div className="left-part">
            <div>Button</div>
            <h4 className="page-title">page_title</h4>
        </div>
        <div className="right-part">
            <div>...</div>
        </div>
    </div>
);

const ListCustomization = () => (
    <div>
        <CustomizationListContainer />
    </div>
);