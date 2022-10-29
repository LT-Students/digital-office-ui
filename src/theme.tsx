import { createTheme } from "@mui/material/styles";

import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

declare module '@mui/material/styles' {
  interface Palette {
    blackColors: Palette['primary'];
  }
  interface PaletteOptions {
    blackColors: PaletteOptions['primary'];
  }
}

const Colors ={
  //BLACK/WHITE
  black_headerText: "#424242",
  black300: "#E0E0E0",
  //PRIMARY
  primary_mainDetails: "#5364FC",
  primary_mainDetails100: "#C9CEFA",
  primary_defaultText: "#7D8FF3",
  textInInput: "#B3BAE0",
  //BACKGROUND
  backgroundMenu: "#EAEFFB",
  backgroundBase: "#F6F8FD",
  backgroundBlocks: "#FDFEFF",
  backgroundInput: "#F2F4FC",
  //COMPLEMENTARY/YELLOW
  textPause: "#E5A02B",
  backgroundPause: "#F5EF9D",
  //TRIADIC/GREEN
  textInProgress: "#00AF1C",
  backgroundInProgress: "#D5FBCA",
  //RED
  textStop: "#A90513",
  backgroundStop: "#E79393",
};

export const theme = createTheme({
  palette: {
    primary: {
      main: Colors.primary_mainDetails,
      light: Colors.primary_mainDetails100,
      contrastText: Colors.primary_defaultText,
    }, 
    secondary: {
      main: Colors.primary_mainDetails100,
    },
    success: {
      main: Colors.textInProgress,
      contrastText: Colors.backgroundInProgress,
    },
    warning: {
      main: Colors.textPause,
      contrastText: Colors.backgroundPause,
    },
    error: {
      main: Colors.textStop,
      contrastText: Colors.backgroundStop,
    },
    blackColors: {
      main: Colors.black300,
      contrastText: Colors.black_headerText,
    }
  },
  components: {
    MuiButton: {
      defaultProps: {
        startIcon: <KeyboardArrowLeftIcon/>,
        endIcon: <KeyboardArrowRightIcon/>,
      }
    }
  },
});
