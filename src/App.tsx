import React from "react";
import MuiButton from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import FormControlLabel from "./components/ui/FormControlLabel";

import { Button, Checkbox, Toggle } from "components/ui";

const App: React.FC = () => {
  return (
    <Stack
      spacing={2}
      direction="column"
      sx={{
        mt: 2,
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      <Stack
        spacing={2}
        direction="row"
        sx={{
          mt: 2,
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <Checkbox />
        <FormControlLabel error control={<Checkbox />} label="" />
        <FormControlLabel control={<Checkbox />} label="Label" />
        <FormControlLabel error control={<Checkbox />} label="Label" />
      </Stack>
      <Stack
        spacing={2}
        direction="row"
        sx={{
          mt: 2,
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <Toggle />
        <Toggle error />
        <Toggle disabled />
      </Stack>

      <Stack
        spacing={2}
        direction="column"
        sx={{
          mt: 2,
          alignItems: "center",
        }}
      >
        <Button size="large" variant="contained">Button</Button>
        <Button size="medium" variant="contained" disabled>Button</Button>
        <Button size="small" variant="contained">Button</Button>
      </Stack>
      <Stack
        spacing={2}
        direction="column"
        sx={{
          mt: 2,
          alignItems: "center",
        }}
      >
        <Button size="large" variant="contained" loading> </Button>
        <Button size="medium" variant="outlined" loading> </Button>
        <Button size="small" variant="text" loading> </Button>
      </Stack>
      <Stack
        spacing={2}
        direction="column"
        sx={{
          mt: 2,
          alignItems: "center",
        }}
      >
        <Button size="large" variant="outlined" disabled>Button</Button>
        <Button size="medium" variant="outlined">Button</Button>
        <Button size="small" variant="outlined">Button</Button>
      </Stack>
      <Stack
        spacing={2}
        direction="column"
        sx={{
          mt: 2,
          alignItems: "center",
        }}
      >
        <Button size="large" variant="text">Button</Button>
        <Button size="medium" variant="text" disabled>Button</Button>
        <Button size="small" variant="text">Button</Button>
      </Stack>
    </Stack>
  );
};

export default App;
