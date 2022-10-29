import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";
import primary from "../../colors/primary";
import black from "../../colors/black";
import background from "../../colors/backgroundColors";
import LoadingButton, { LoadingButtonProps } from "@mui/lab/LoadingButton";

export const DigitalOfficeButton = styled(LoadingButton)<LoadingButtonProps>(
  ({ theme }) => ({
    color: black[50],
    backgroundColor: primary[500],
    fontSize: 16,
    padding: "12px 20px",
    borderRadius: 16,
    fontFamily: ["Lato"],
    display: "flex",
    justifyContent: "space-between",
    textTransform: "none",
    "&.MuiButton-contained": {
      "&.MuiLoadingButton-loading": {
        backgroundColor: primary[500],
        ".MuiLoadingButton-loadingIndicator": {
          color: black[50],
          width: 20,
          height: 20,
        },
        ".MuiButton-startIcon": {
          display:"none",
        },
        ".MuiButton-endIcon": {
          display:"none",
        },
      },
    },
    "&.MuiButton-outlined": {
      backgroundColor: background[50],
      color: primary[500],
      border: "1px solid",
      "&.MuiLoadingButton-loading": {
        backgroundColor: background[50],
        color: primary[500],
        border: "1px solid primary[500]",
        ".MuiLoadingButton-loadingIndicator": {
          color: primary[500],
          width: 20,
          height: 20,
        },
        ".MuiButton-startIcon": {
          display:"none",
        },
        ".MuiButton-endIcon": {
          display:"none",
        },
      },
    },
    "&.MuiButton-text": {
      backgroundColor: "#fff",
      color: primary[500],
      border: "0px solid",
      "&.MuiLoadingButton-loading": {
        backgroundColor: "#fff",
        color: "#fff",
        border: "0px solid",
        ".MuiLoadingButton-loadingIndicator": {
          color: primary[500],
          width: 20,
          height: 20,
        },
        ".MuiButton-startIcon": {
          display:"none",
        },
        ".MuiButton-endIcon": {
          display:"none",
        },
      },
    },
    "&.MuiButton-sizeLarge": {
      width: 184,
      height: 48,
    },
    "&.MuiButton-sizeMedium": {
      width: 168,
      height: 40,
    },
    "&.MuiButton-sizeSmall": {
      width: 138,
      height: 32,
      fontSize: 14,
    },
    "&.MuiButton-iconSizeSmall": {
      width: 3.33,
      height: 6.67,
    },
    "&:hover": {
      backgroundColor: primary[300],
      "&.MuiButton-outlined": {
        backgroundColor: background[100],
      },
      "&.MuiButton-text": {
        color: primary[200],
        backgroundColor: "#fff",
      },
    },
    "&:focus": {
      boxShadow: "0 0 2px 0.1rem #E8B733",
      "&.MuiButton-sizeLarge": {
        boxShadow: "0 0 3px 0.2rem #E8B733",
      },
    },
    "&.Mui-disabled": {
      color: black[400],
      backgroundColor: black[200],
      "&.MuiButton-outlined": {
        backgroundColor: background[50],
      },
      "&.MuiButton-text": {
        color: black[400],
        backgroundColor: "#fff",
      },
    },
  })
);

// interface Props extends ButtonProps {
//   loading?: boolean;
// }

// export const DigitalOfficeButton: React.FC<Props> = ({
//   loading,
//   ...parentProps
// }) => <CustomButton className={loading ? "loading" : ""} {...parentProps} />;
