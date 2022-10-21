import { styled } from "@mui/material/styles";
import Checkbox, {CheckboxProps} from "@mui/material/Checkbox";

export const DigitalOfficeCheckbox = styled(Checkbox)<CheckboxProps>(({ theme }) => ({
    color: theme.palette.secondary.main,
    "&:hover": {
        color: theme.palette.primary.main,
    },
}));

export const DigitalOfficeCheckboxError = styled(DigitalOfficeCheckbox)(({ theme }) => ({
    color: theme.palette.error.main,
    "&:hover": {
        color: theme.palette.error.main,
    },
}));

export const DisabledIcon = styled('span')(({ theme }) => ({
    borderRadius: 4,
    width: 24,
    height: 24,
    backgroundColor: theme.palette.blackColors.main,
    backgroundImage:'<rect width="24" height="24" rx="4" fill="#E0E0E0"/>',
  }));


  


  