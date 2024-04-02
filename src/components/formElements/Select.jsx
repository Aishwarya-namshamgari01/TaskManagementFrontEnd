import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { IconButton, InputAdornment, Select, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function MySelect({
  label,
  name,
  options,
  value,
  handleChange,
  setFormikValue,
}) {
  return (
    <Box sx={{ minWidth: 120, margin: "5px 0", width: "100%" }}>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <FormControl fullWidth>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          name={name}
          onChange={(event) => {
            setFormikValue(name, event.target.value);
          }}
          sx={{
            height: "35px",
            width: "100%",
          }}
          endAdornment={(() => {
            if (value !== "") {
              return (
                <InputAdornment position="end" sx={{ margin: "15px" }}>
                  <IconButton
                    aria-label="clear selection"
                    onClick={() => setFormikValue(name, "")}
                    edge="end"
                  >
                    <CloseIcon sx={{ opacity: "0.5" }} />
                  </IconButton>
                </InputAdornment>
              );
            }
          })()}
        >
          {options?.map((option) => {
            return <MenuItem value={option?.value}>{option.label}</MenuItem>;
          })}
        </Select>
      </FormControl>
    </Box>
  );
}
