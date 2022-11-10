import { styled } from "@mui/material/styles";
import { InputBase, InputBaseProps } from "@material-ui/core";
import {InputLabel, InputLabelProps} from "@material-ui/core";
import {FormHelperText, FormHelperTextProps} from "@material-ui/core";
import backgroundColors from "colors/backgroundColors";
import primary from "colors/primary";
import red from "colors/red";

export const DigitalOfficeInputLabel = styled(InputLabel)<InputLabelProps>(
  ({theme}) => ({
    "&.MuiFormLabel-root": {
      fontSize: 16,
      color: primary[300],
      // fontFamily: "Lato",
      // fontStyle: "medium",
      fontWeight: 500,
    },
  })
);

export const DigitalOfficeHelperText = styled(FormHelperText)<FormHelperTextProps>(
  ({theme}) => ({
    marginLeft: 16,
    fontSize: 12,
    color: primary[300],
    fontWeight: 400,
    "&.Mui-error": {
      color: red[500],
    },
    "&.Mui-disabled": {
      color: primary[100],
    },
  })
);

export const DigitalOfficeInput = styled(InputBase)<InputBaseProps>(
  ({ theme }) => ({
    "label + &": {
      marginTop: theme.spacing(3),
    },
    "&.Mui-focused": {
      "&.MuiInputBase-root": {
        boxShadow: "0 0 2px 0.1rem #E8B733",
      },
    },
    "&.MuiInputBase-root": {
      borderRadius: 12,
      position: "relative",
      backgroundColor: backgroundColors[300],
      border: "1px solid #F2F4FC",
      color: "#B3BAE0",
      fontSize: 16,
      width: 224,
      height: 40,
      padding: "8px 16px",

      "&:hover": {
        border: "1px solid #7D8FF3",
      },
    },
    ".MuiInputAdornment-positionStart": {
      marginRight: 11,
    },
    "&.MuiInputBase-adornedStart": {
      color: "#B3BAE0",
    },
    "&.MuiInputBase-adornedEnd": {
      color: "#B3BAE0",
    },
    "&.Mui-disabled": {
      "&.MuiInputBase-root": {
        backgroundColor: "#F6F8FD",
        color: "#EAECFD",
      },
      "&.MuiInputBase-adornedStart": {
        color: "#EAECFD",
      },
      "&.MuiInputBase-adornedEnd": {
        color: "#EAECFD",
      },
    },
    "&.Mui-error": {
      "&.MuiInputBase-root": {
        border: "1px solid #E4342C",
      },
      ".MuiInputBase-input": {
        color: "#424242",
      },
      "&.MuiInputBase-adornedStart": {
        color: red[500],
      },
      "&.MuiInputBase-adornedEnd": {
        color: red[500],
      },
    },
  })
);
