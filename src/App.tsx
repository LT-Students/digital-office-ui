import React from "react";
import MuiButton from "@mui/material/Button";
import MuiCheckbox from "@mui/material/Checkbox";
import Stack from "@mui/material/Stack";
import DisabledByDefaultIcon from "@mui/icons-material/DisabledByDefaultRounded";
import {DisabledIcon as DIcon} from "./components/ui/checkbox";

import { Button, Checkbox, CheckboxError } from "components/ui";

const App: React.FC = () => {
  return (
    <Stack
      spacing={2}
      direction="row"
      sx={{
        mt: 2,
        justifyContent: "center",
      }}
    >
      <MuiButton>Default Button</MuiButton>
      <Button>Custom Button</Button>
      <MuiCheckbox />
      <Checkbox disableRipple disabled icon={<DIcon/>}/>
      <Checkbox disableRipple/>
      <CheckboxError disableRipple/>
      <Checkbox disableRipple icon={<DisabledByDefaultIcon/>} checkedIcon={<DisabledByDefaultIcon/>}/>
    </Stack>
  );
};

export default App;
