import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useSpring, animated } from "@react-spring/web";

interface FadeProps {
    children: React.ReactElement;
    in?: boolean;
    onClick?: any;
    onEnter?: (node: HTMLElement, isAppearing: boolean) => void;
    onExited?: (node: HTMLElement, isAppearing: boolean) => void;
    ownerState?: any;
}

const Fade = React.forwardRef<HTMLDivElement, FadeProps>(function Fade(props, ref) {
    const {
        children,
        in: open,
        onClick,
        onEnter,
        onExited,
        ownerState,
        ...other
    } = props;
    const style = useSpring({
        from: { opacity: 0 },
        to: { opacity: open ? 1 : 0 },
        onStart: () => {
            if (open && onEnter) {
                onEnter(null as any, true);
            }
        },
        onRest: () => {
            if (!open && onExited) {
                onExited(null as any, true);
            }
        },
    });

    return (
        <animated.div ref={ref} style={style} {...other}>
            {React.cloneElement(children, { onClick })}
        </animated.div>
    );
});

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    boxShadow: 24
};

export default function ModalAssets({img, img2, isPdf}: any) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);



    return (
        <div className="modalAssets_Adapt">
            <img style={{width: "295px", height: "435px", filter: "drop-shadow(0px 0px 9px rgba(0, 0, 0, 0.25))"}} src={img} onClick={handleOpen}/>
            <Modal
                aria-labelledby="spring-modal-title"
                aria-describedby="spring-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        TransitionComponent: Fade,
                    },
                }}
                sx={!isPdf ? {overflow: "unset"} : {overflow: "scroll"}}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        {isPdf ? <img style={{width: "100%", marginTop: "150%"}} src={img} alt="img"/> : <img style={{width: "100%"}} src={img} alt="img"/>}
                        {isPdf ? <img style={{width: "100%"}} src={img2} alt="img"/> : ""}
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}