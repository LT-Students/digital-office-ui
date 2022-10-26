import React from "react";
import MuiButton from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import FormControlLabel from "./components/ui/FormControlLabel"

import { Button, Checkbox, Toggle } from "components/ui";

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
      <Checkbox />
      <FormControlLabel error control={<Checkbox />} label="" />
      <FormControlLabel control={<Checkbox />} label="Label" />
      <FormControlLabel error control={<Checkbox />} label="Label" />
      <Toggle />
      <Toggle error />
      <Toggle disabled/>
      {/* <FormControlLabel error control={<Toggle />} label="" /> */}
    </Stack>
  );
};

export default App;
