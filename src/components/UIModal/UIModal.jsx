"use client";
import { Box, Modal } from "@mui/material";
import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import UITypography from "../UITypography/UITypography";

const UIModal = (props) => {
  const [open, setOpen] = useState(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "60%",
    height: "500px",
    // bgcolor: "background.paper",
    border: "0px solid #000",
    borderRadius: "10px",
    background: "rgba(255, 255, 255, 0.4)",
    // boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(5px)",
    boxShadow: "10px 10px 112px 0px rgba(0,0,0,0.45)",

    // boxShadow: 24,
    // p: 4,
  };

  useEffect(() => {
    setOpen(true);
  }, []);
  const handleClose = () => setOpen(false);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      //   aria-labelledby="modal-modal-title"
      disableAutoFocus
      //   aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Box sx={{ position: "relative", width: "100%" }}>
          <Box
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: 10,
              right: 13,
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            <CloseIcon />
          </Box>
        </Box>
        {props.children}
        
      </Box>
    </Modal>
  );
};

export default UIModal;
