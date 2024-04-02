import { Box, Input, InputLabel, Typography } from "@mui/material";

const TextField = ({
  required = false,
  id,
  label,
  error,
  sx,
  helperText,
  placeholder,
  ...rest
}) => {
  return (
    <Box>
      {label && <InputLabel required={required}> {label}</InputLabel>}
      <Input
        id={id}
        fullWidth
        placeholder={placeholder}
        {...rest}
        sx={[
          { border: "1px solid grey", borderRadius: "5px", margin: "2px 0" },
          sx,
        ]}
        disableUnderline={true}
      />
      {error && <Typography>{helperText}</Typography>}
    </Box>
  );
};
export default TextField;
