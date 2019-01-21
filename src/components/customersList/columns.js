import {HyperlinkColumnTemplate, NameColumnTemplate} from "./columnTemplates";

const nameColumn = {
    displayName: "name_title",
    key: "Name",
    width: 120,
    columnTemplate: NameColumnTemplate,
};

const descriptionColumn = {
    displayName: "description_title",
    key: "Description",
};



const CFWidth = {
    "numeric": 110,
    "date": 130,
    "boolean": 80,
};
const CFTemplates = {
    "hyperlink": HyperlinkColumnTemplate,
};

const createCustomFieldColumn = (customField) => {
    return {
        displayName: customField.DisplayName,
        key: customField.FieldName,
        width: CFWidth[customField.FieldDataTypeId],
        columnTemplate: CFTemplates[customField.FieldDataTypeId],
    };
};

export const customerColumns = {
    Name: nameColumn,
    Description: descriptionColumn,
    createCustomFieldColumn,
};
