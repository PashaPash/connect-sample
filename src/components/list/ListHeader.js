import * as React from "react";
import {Component, RefObject} from "react";
import { getColumnStyle} from "./columnInfo";
import "./Row.css";

export class ListHeader extends Component {

    headerRef = React.createRef();
    
    render() {
        return (
            <div className="list_header_wrapper">
                <div
                    className="list_header"
                    ref={this.headerRef}
                >
                    <div className="list_header_inner list_row">
                        {this.props.columns.map(c => (
                            <div className="field" style={getColumnStyle(c)} key={c.key}>
                                <span title={c.displayName}>{c.displayName}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }


    componentDidUpdate(prevProps) {
        if (prevProps.scrollLeft !== this.props.scrollLeft && this.headerRef.current) {
            this.headerRef.current.scrollLeft = this.props.scrollLeft;
        }
    }
}