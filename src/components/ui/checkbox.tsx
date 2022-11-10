import {
  Checkbox as MuiCheckbox,
  CheckboxProps,
} from "@mui/material";
import { styled } from "@mui/material/styles";
// import Checkbox, { CheckboxProps } from "@mui/material/Checkbox";
export const DigitalOfficeCheckbox = styled(MuiCheckbox)<CheckboxProps>(({ theme }) => ({
  color: theme.palette.secondary.main,
  "&:hover": {
    color: theme.palette.primary.main,
  },
}));

