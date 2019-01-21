import * as React from 'react';
import {Component} from 'react';
import {ScrollSync} from "react-virtualized";
import "./List.css";
import {ListBody, ListItem, RowConnectorProps} from "./ListBody";
import {ListHeader} from "./ListHeader";

export class List extends Component {
    static defaultProps = {
        loading: false,
    };


    constructor(props, context) {
        super(props, context);
        this.state = {
            lastListWidth: null,
        };
    }

    setLastListWidth = (width) => this.setState({ lastListWidth: width });
    
    render() {
        let { columns, RowConnector, items, loading, emptyListTheme, onRowClick,
             emptyListDescription, search } = this.props;
        // set "empty list onboarding" width to last rendered list width to avoid 
        // ui jumpings when user types in search and view switches between no results and list items
        // but limit it by window width because we don't want render horizontal scroll on empty list view
        let emptyListWidth;
        if (this.state.lastListWidth) {
            emptyListWidth = Math.min(this.props.windowWidth, this.state.lastListWidth);
        }
        
        return (
                <div className="list_roll">
                    <ScrollSync>
                        {({onScroll, scrollLeft}) => (
                            <>
                                <ListHeader
                                    columns={columns}
                                    scrollLeft={scrollLeft}
                                />
                                
                                <ListBody
                                    items={items}
                                    columns={columns}
                                    RowConnector={RowConnector}
                                    onScroll={onScroll}
                                    search={search}
                                    onListWidthChanged={this.setLastListWidth}
                                    onRowClick={onRowClick}
                                />
                            </>
                        )}
                    </ScrollSync>
                </div>
        );
    }
}

