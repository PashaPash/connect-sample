import * as React from 'react';
import {ColumnTemplate} from "../list/";
import "./columnTemplates.css";

export const getCustomerState = (item) => {
    return item.Enabled ? "enabled" : "disabled";
};

export const NameColumnTemplate = ({item, renderValue}) => (
    <div className="item_info">
        <div className="name">
            {renderValue(item.Name)}
        </div>
        <div>
            {renderValue(getCustomerState(item))}
        </div>
    </div>
);

export const HyperlinkColumnTemplate = ({columnValue, renderValue}) => {
    let href = columnValue;
    return (
        <a
            target={"_blank"}
            href={href}
            className="hyperlink"
        >
            {renderValue(columnValue)}
        </a>
    );
};
