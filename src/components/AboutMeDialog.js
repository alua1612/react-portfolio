import React from 'react';
import Dialog from '@mui/material/Dialog';

export interface SimpleDialogProps {
    open: boolean;
    selectedValue: string;
    onClose: (value: string) => void;
  }
  
export default function AboutMeDialog(props: SimpleDialogProps) {
    const { onClose, selectedValue, open } = props;

    const handleClose = () => {
        onClose(selectedValue);
      };

    return (
        <Dialog onClose={handleClose} open={open}>

        </Dialog>
    )
}