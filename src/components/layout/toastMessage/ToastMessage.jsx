import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import { Slide } from "@mui/material";

function SlideTransition(props) {
  return <Slide {...props} direction="down" />;
}

export default function ToastMessage({
  state = { open: false, isAlert: false },
  handleClose,
  message,
}) {
  return (
    <Snackbar
      sx={{
        "& .MuiPaper-root": {
          background: !state.isAlert
            ? "linear-gradient(135deg, #1e90ff, #00bfff, #add8e6)"
            : "linear-gradient(135deg, #ff4500, #ff6347, #ed6a3b)", // Cor de fundo
          color: "#fff", // Cor do texto
          fontWeight: "bold",
          boxShadow: "none",
        },
      }}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      open={state?.open}
      TransitionComponent={SlideTransition}
      onClose={handleClose}
      message={message}
      autoHideDuration={!state.isAlert ? 1200 : 2500}
    />
  );
}
