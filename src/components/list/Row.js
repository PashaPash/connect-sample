import * as React from 'react';
import {Component} from "react";
import {getColumnStyle} from "./columnInfo";
import "./Row.css";

export class Row extends Component {

    constructor(props) {
        super(props);

        this.renderValue = this.renderValue.bind(this);
        this.renderColumn = this.renderColumn.bind(this);
    }

    renderColumn(column, item) {
        let value = item[column.key];
        let TemplateComponent = column.columnTemplate;
        if (TemplateComponent) {
            return (
                <TemplateComponent
                    item={item}
                    columnValue={value}
                    renderValue={this.renderValue}
                />);
        }
        
        return this.renderValue(value);
    }
    
    renderValue(value, classes) {
        let className = "field_value";
        if (classes) {
            className = `${className} ${classes}`;
        }
        
        return (
            <div className={className}>{value}</div>
        );
    }

    render() {
        let {item, columns} = this.props;
        
        return columns.map(c => (
            <div
                className="field"
                style={getColumnStyle(c)}
                key={c.key}
            >
                {this.renderColumn(c, item)}
            </div>
        ));
    }
}