import schema from "./schema.json";
import { search } from "../AsyncTypeaheadAPI";

let uiSchema = {
  noActiveMeds: {
    classNames: "col-md-4",
    "ui:tabID": "medications",
  },
  medications: {
    classNames: "col-md-12",
    "ui:tabID": "medications",
    "ui:field": "compositeArray",
    inputField: "typeahead",
    arrayField: "table",
    typeahead: {
      url:
        "/EHRV8PatientEncounterAPIServices/ehrv8/encounter/SearchMedications",
      optionsMapping: "Drugs",
      responseSchemaMapping: {
        drugName: "DrugName",
      },
      labelKey: "DrugName",
      search,
    },
  },
};

export default Object.assign({}, schema, { uiSchema });
