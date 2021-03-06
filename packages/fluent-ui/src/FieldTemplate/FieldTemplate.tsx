import React from "react";
import { FieldTemplateProps } from "@rjsf-koszti/core";
import { Text, Label } from "@fluentui/react";
import { List } from "@fluentui/react";

const styles = {
  root: [
    {
      fontSize: 24,
    },
  ],
};

const FieldTemplate = ({
  id,
  children,
  displayLabel,
  rawErrors = [],
  rawHelp,
  rawDescription,
  classNames,
  label,
  required
}: FieldTemplateProps) => {
  // TODO: do this better by not returning the form-group class from master.
  classNames = "ms-Grid-col ms-sm12 " + classNames.replace("form-group", "");
  return (
    <div className={classNames} style={{marginBottom: 15}}>
      {children}
      {/* {displayLabel && <Label>
        {label}
        {required && <span style={{color: "rgb(164, 38, 44)", fontSize: "12px", fontWeight: "normal"}}>*</span>}
      </Label>} */}
      {rawDescription && <Text>{rawDescription}</Text>}
      {rawErrors.length > 0 && <List items={rawErrors}>})}</List>}
      {rawHelp && <Text id={id}>{rawHelp}</Text>}
    </div>
  );
};

export default FieldTemplate;
