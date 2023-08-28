import React from "react";
import {
  Box,
  FormControl,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";

function ComponentButtonSelect() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 208, maxWidth: 208 }}>
      <FormControl fullWidth>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          onChange={handleChange}
          sx={{
            background:
              "linear-gradient(90deg, rgba(75,210,202,1) 0%, rgba(54,156,150,1) 70%)",
            border: "none",
            color: "white",
            height: "42px",
          }}
        >
          <MenuItem value={1}>Cette année</MenuItem>
          <MenuItem value={2}>30 derniers jours</MenuItem>
          <MenuItem value={3}>Mois de juin</MenuItem>
          <MenuItem value={4}>6 derniers mois</MenuItem>
          <MenuItem value={5}>12 derniers mois</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default ComponentButtonSelect;
