import { Component } from "react";
import React from "react";
import "./CustomizationList.css";


class CustomizationItemCheckbox extends Component {
    handleInputChange = (newValue) => {
        this.props.updateCustomization(this.props.alias, newValue);
    }

    render() {
        let { checked, displayName } = this.props;
        return (
            <div>{displayName}</div>
            // <Checkbox
            //     checked={checked}
            //     theme={[checkboxTheme.max_width_220, checkboxTheme.nowrap]}
            //     onChange={this.handleInputChange}
            // >
            //     {displayName}
            // </Checkbox>
        );
    }
}

export class CustomizationList extends Component {
    
    updateCustomization = (alias, isSelected) => {
        this.props.updateCustomization({
            alias: alias,
            isSelected: isSelected,
            prev: this.props.customizations,
        });
    }

    renderCustomizations = (customizations) => {
        return customizations.map((customization, index) => {
            return(
                <div key={index}>
                    <CustomizationItemCheckbox {...customization} updateCustomization={this.updateCustomization} />
                </div>
            );
        });
    }

    render() {
        console.log("CustomizationList render");
        if (this.props.loading) {
            return <div>loading...</div>;
        }

        return (
             <div className="inner">
                 {this.renderCustomizations(this.props.customizations)}
             </div>
        );
    }
}