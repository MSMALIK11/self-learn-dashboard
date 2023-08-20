import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import MobilePhoneUI from './MobilePhoneUI';
import MarkDownText from './MarkDownText';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 450,
    bgcolor: 'transparent',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
interface modalProp {
    open: boolean,
    event: () => any,
    modalValue: any
}

function ModalView(props: modalProp) {
    const [, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => props.event();

    return (
        <div>

            <Modal
                open={props.open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <MobilePhoneUI modalValue={props.modalValue} />


                </Box>
            </Modal>
        </div>
    );
}


export default ModalView
