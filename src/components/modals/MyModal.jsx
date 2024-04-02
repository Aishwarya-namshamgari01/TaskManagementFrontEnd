import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Stack } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  // border: "2px solid #000",
  boxShadow: 24,
  borderRadius: "7px",
  p: 4,
};

export default function MyModal({
  open,
  handleClose,
  subTitle,
  actions,
  children,
  sx,
  title,
}) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          border: "0",
          boxShadow: "0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={[
            {
              ...style,
              overflow: "hidden",
            },
            sx,
          ]}
        >
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: "bold",
              textAlign: "center",
              // color: "#4f3cc975",
            }}
          >
            {title}
          </Typography>
          <Box
            sx={{
              height: "100%",
              overflowY: "scroll",
              msOverflowStyle: "none",
              scrollbarWidth: "none",
              "&::-webkit-scrollbar": {
                display: "none",
              },
            }}
          >
            {children}
          </Box>
          <Stack
            spacing={1}
            direction="row"
            justifyContent="right"
            alignItems="flex-end"
            sx={{ margin: "5px" }}
          >
            {actions?.map((action, i) => {
              return <Box key={i}>{action}</Box>;
            })}
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}
