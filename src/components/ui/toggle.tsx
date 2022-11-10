import Switch, { SwitchProps } from "@mui/material/Switch";
import { styled } from "@mui/material/styles";
import primary from "../../colors/primary";
import black from "../../colors/black";

const Toggle = styled(Switch)(({ theme }) => ({
  width: 48,
  height: 24,
  borderRadius: 12,
  padding: 0,
  display: "flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 16,
    },
  },
  "& .MuiSwitch-switchBase": {
    padding: 4,
    "&.Mui-checked": {
      transform: "translateX(23px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: primary[500],
      },
    },
    "&.Mui-disabled": {
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: black[200],
      },
    },
  },
  "& .MuiSwitch-thumb": {
    width: 16,
    height: 16,
    borderRadius: 8,
    transition: theme.transitions.create(["width"], {
      duration: 400,
    }),
  },
  "& .MuiSwitch-track": {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: primary[200],
    boxSizing: "border-box",
  },
  "&:hover .MuiSwitch-switchBase": {
    "& + .MuiSwitch-track": {
      backgroundColor: primary[300],
    },
    "&.Mui-checked": {
      "& + .MuiSwitch-track": {
        backgroundColor: primary[300],
      },
    },
    "&.Mui-disabled": {
      "& + .MuiSwitch-track": {
        backgroundColor: black[200],
      },
    },
  },
  "&.error": {
    "& .MuiSwitch-switchBase": {
      "&.Mui-checked": {
        "& + .MuiSwitch-track": {
          backgroundColor: theme.palette.error.main,
        },
      },
    },
    "& .MuiSwitch-track": {
      backgroundColor: theme.palette.error.main,
    },
    "&:hover .MuiSwitch-switchBase": {
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.error.main,
      },
      "&.Mui-checked": {
        "& + .MuiSwitch-track": {
          backgroundColor: theme.palette.error.main,
        },
      },
    },
  },
}));

interface Props extends SwitchProps {
  error?: boolean;
}

export const DigitalOfficeToggle: React.FC<Props> = ({
  error,
  ...parentProps
}) => <Toggle className={error ? "error" : ""} {...parentProps} />;
