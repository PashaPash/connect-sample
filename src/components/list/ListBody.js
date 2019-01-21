import * as React from 'react';
import {Component, ReactElement} from "react";
import {AutoSizer, Grid, ListRowProps, OnScrollParams} from "react-virtualized";
import { getListWidth} from "./columnInfo";
import "./ListBody.css";
import {Row} from "./Row";
import "./Row.css";


const renderRow = (item, props) => {
    return (
        <Row
            {...props}
            item={item}
        />
    );
};


export class ListBody extends Component {
    
    scrollSize = 100;
    
    onRowClick = (e) => {
        let { onRowClick } = this.props;
        if (onRowClick) {
            let id = parseInt(e.currentTarget.dataset.id, 10);
            onRowClick(id);
        }
    }
    
    getCurrentListWidth() {
        return getListWidth(this.props.columns);
    }
    
    render() {
        let { items, onScroll, RowConnector, columns, search } = this.props;
        let listWidth = this.getCurrentListWidth();
        
        return (
            <div className="list_body" style={{width: listWidth + this.scrollSize}}>
            {items.map((i, index) => (
            <div
                className={"list_row"}
                key={index}
                onClick={this.onRowClick}
            >
                <RowConnector
                    columns={columns}
                    itemId={i.id}
                    search={search}
                    renderRow={renderRow}
                />
            </div>))
            }
            </div>
        );
    }
    
    onListWidthChanged() {
        if (this.props.onListWidthChanged) {
            this.props.onListWidthChanged(this.getCurrentListWidth());
        }
    }

    componentDidMount() {
        this.onListWidthChanged();
    }


    componentDidUpdate(prevProps) {
        if (prevProps.columns !== this.props.columns) {
            this.onListWidthChanged();
        }
    }
}