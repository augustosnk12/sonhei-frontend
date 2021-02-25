export interface ModalProps {
    /**
     * State of the dialog, if its opened or closed
     */  
    open: boolean;
    /**
     * 
     * setState function to open or close the dialog
     */
    setOpen(value): any;
    /**
     * Message displayed in the body of the dialog
     */
    message: string;
    /**
     * Label of the confirm button
     */
    confirmButtonText: string;
    /**
     * onClick of confirm button
     */
    confirmButtonClick?(): any;    
  }