import React, { useState } from "react";
import { Button, Dialog, DialogContent, DialogTitle } from "@mui/material";
const UserForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDialog = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <Button variant="contained" onClick={toggleDialog}>
        Open Alert
      </Button>
      <Dialog
        open={isOpen}
        onClose={toggleDialog}
        fullWidth
        maxWidth="md"
        PaperProps={{
          style: {
            position: "fixed",
            bottom: 0,
            left: 0,
            margin: 0,
            borderRadius: 0,
          },
        }}
      >
        <DialogTitle>Alert Dialog</DialogTitle>
        <DialogContent>
          <p>This is an alert message.</p>
          <Button onClick={toggleDialog} variant="contained">
            Close
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UserForm;
