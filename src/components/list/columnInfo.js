import * as React from "react";
import {CSSProperties} from "react";

export const getColumnStyle = (column) => {
    if (column.width) {
        return {
            width: column.width,
            minWidth: column.width,
        };
    }

    return null;
};

export const getListWidth = (columns) => {
    const padding = 20,
          defaultWidth = 180,
          firstColumnExtraPadding = 10;
    
    let result =  columns.map(c => c.width ? c.width : defaultWidth)
                         .reduce((a, width) => a + width + padding, 0);
    
    return result + firstColumnExtraPadding;
};