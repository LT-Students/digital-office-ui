import React from "react";
import MuiButton from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import { Button } from "components/ui";

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
    </Stack>
  );
};

export default App;
