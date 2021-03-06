import React from "react";
import { FieldProps } from "@rjsf-koszti/core";

export interface DescriptionFieldProps extends Partial<FieldProps> {
  description?: string;
}

const DescriptionField = ({ description }: Partial<FieldProps>) => {
  if (description) {
    return <div><div className="mb-5">{description}</div></div>;
  }

  return null;
};

export default DescriptionField;
