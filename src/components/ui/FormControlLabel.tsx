import {
  FormControlLabel as MuiFormControlLabel,
  FormControlLabelProps,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import black from "../../colors/black";

const FormControlLabel = styled(MuiFormControlLabel)<FormControlLabelProps>(
  ({ theme }) => ({
    color: black[900],
    "&.error": {
      ".MuiCheckbox-root, .MuiFormControlLabel-label": {
        color: theme.palette.error.main,
      },
      ".MuiSwitch-track": {
        backgroundColor: theme.palette.error.main,
      },
      "&.Mui-checked": {
        "& + .MuiSwitch-track": {
          backgroundColor: theme.palette.error.main,
        },
      },
    },
  })
);

interface Props extends FormControlLabelProps {
  error?: boolean;
}

const DigitalOfficeFormControlLabel: React.FC<Props> = ({
  error,
  ...parentProps
}) => <FormControlLabel className={error ? "error" : ""} {...parentProps} />;

export default DigitalOfficeFormControlLabel;
