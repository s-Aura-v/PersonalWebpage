import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import {Button, styled} from "@mui/material";
import React, {useState} from "react";
import Dialog from "@mui/material/Dialog";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));



export function FamilyThreadGallery(isActive) {
    const [open, setOpen] = useState(isActive);


    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <BootstrapDialog
                onClose={handleClose}
                open={open}
                maxWidth='md'
                fullWidth
            >
                <DialogTitle className="search-title">
                    <p className="search-title">
                    </p>
                </DialogTitle>
                <DialogContent dividers>
                    womp
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        Close
                    </Button>
                </DialogActions>
            </BootstrapDialog>
        </>
    );
}
