import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";
import primary from "../../colors/primary";
import black from "../../colors/black";
import background from "../../colors/backgroundColors";
import LoadingButton, { LoadingButtonProps } from "@mui/lab/LoadingButton";

export const CustomButton = styled(LoadingButton)<LoadingButtonProps>(
  ({ theme }) => ({
    color: black[50],
    backgroundColor: primary[500],
    fontSize: 16,
    borderRadius: 16,
    fontFamily: ["Lato"],
    display: "flex",
    justifyContent: "space-between",
    textTransform: "none",
    "&.MuiLoadingButton-root": {
      minWidth: 32,
    },
    ".MuiCircularProgress-circle": {
      strokeWidth: "7",
      r: 18.8,
    },

    //ICON BUTTON
    "&.icon": {
      padding: "8px",
      justifyContent: "center",
      ".MuiButton-startIcon": {
        margin: 0,
      },
      ".MuiButton-endIcon": {
        display: "none",
      },
    },
    //VARIANT=CONTAINED
    "&.MuiButton-contained": {
      "&.MuiLoadingButton-loading": {
        backgroundColor: primary[500],
        ".MuiLoadingButton-loadingIndicator": {
          color: black[50],
          width: 20,
          height: 20,
          marginTop: 3,
          marginLeft: 2,
        },
        ".MuiButton-startIcon": {
          display: "none",
        },
        ".MuiButton-endIcon": {
          display: "none",
        },
      },
    },

    //VARIANT=OUTLINED
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
          display: "none",
        },
        ".MuiButton-endIcon": {
          display: "none",
        },
      },
    },

    //VARIANT=TEXT
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
          display: "none",
        },
        ".MuiButton-endIcon": {
          display: "none",
        },
      },
    },

    //SIZE
    "&.MuiButton-sizeLarge": {
      width: 184,
      height: 48,
      padding: "12px 20px",
      "&.icon": {
        width: 48,
        height: 48,
        padding: "8px 8px",
        ".MuiSvgIcon-root": {
          width: 26.67,
          height: 26.67,
          top: 2.67,
          left: 2.67,
          margin: 0,
        },
      },
    },
    "&.MuiButton-sizeMedium": {
      width: 168,
      height: 40,
      padding: "8px 16px",

      "&.icon": {
        width: 40,
        height: 40,
        ".MuiSvgIcon-root": {
          width: 20,
          height: 20,
          top: 2,
          left: 2,
          margin: 0,
        },
      },
    },
    "&.MuiButton-sizeSmall": {
      width: 138,
      height: 32,
      fontSize: 14,
      padding: "6px 12px",
      "&.icon": {
        width: 32,
        height: 32,
        ".MuiSvgIcon-root": {
          width: 13.33,
          height: 13.33,
          top: 1.33,
          left: 1.33,
          margin: 0,
        },
      },
    },

    //BUTTON ICONS
    "&.MuiButton-iconSizeLarge": {
      "&.icon": {
        width: 26.67,
        height: 26.67,
        top: 2.67,
        left: 2.67,
      },
    },
    "&.MuiButton-iconSizeMedium": {
      "&.icon": {
        width: 20,
        height: 20,
      },
    },
    "&.MuiButton-iconSizeSmall": {
      width: 3.33,
      height: 6.67,
      "&.icon": {
        width: 13.33,
        height: 13.33,
      },
    },

    //HOVER
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

    //FOCUS
    "&:focus": {
      boxShadow: "0 0 2px 0.1rem #E8B733",
      "&.MuiButton-sizeLarge": {
        boxShadow: "0 0 3px 0.2rem #E8B733",
      },
    },

    //DISABLED
    "&.Mui-disabled": {
      color: black[400],
      backgroundColor: black[200],
      "&.MuiButton-outlined": {
        backgroundColor: background[50],
      },
      "&.MuiButton-text": {
        color: black[400],
        backgroundColor: "#fff",
        "&.icon": {
          color: black[300],
          backgroundColor: "#fff",
        },
      },
      "&.icon": {
        color: "#fff",
        backgroundColor: black[300],
      },
    },
  })
);

interface Props extends LoadingButtonProps {
  icon?: boolean;
}

export const DigitalOfficeButton: React.FC<Props> = ({
  icon,
  ...parentProps
}) => <CustomButton className={icon ? "icon" : ""} {...parentProps} />;
