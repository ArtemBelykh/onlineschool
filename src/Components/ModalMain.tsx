import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {Button, FormControlLabel, Radio, RadioGroup, TextField} from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import CloseIcon from '@mui/icons-material/Close';
import {useForm} from 'react-hook-form';
import {MuiTelInput} from "mui-tel-input";


export interface IModalMain {
    styleBtn?: object | undefined,
    variantBtn?: "text" | "outlined" | "contained" | undefined,
    colorBtn?: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning" | undefined,
    titleBtn?: string | undefined
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: window.screen.width < 900 ? 350 : 400,
    bgcolor: 'white',
    boxShadow: 24,
    p: 2,
    borderRadius: "10px"
};

const ModalMain = ({styleBtn, variantBtn, colorBtn, titleBtn}: IModalMain) => {
    const [value, setValue] = React.useState('')
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const {register, handleSubmit, formState: {errors}, reset} = useForm();


    const [city, setCity] = React.useState('');
    const [formState, setFormState] = React.useState("");
    // const handleChange = (event: SelectChangeEvent) => {
    //     setCity(event.target.value);
    //     setFormState(event.target.value);
    // };

    async function onSubmit(data: any) {
        reset()

        if (!data.lastname && !data.dataCurrent && !data.email && !data.formsLearnClient && !data.phoneClient && !data.name) return alert("Заполните все данные, они обязательны!")

        handleClose()
        await fetch('https://test-6nq2.onrender.com/api/send', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    }


    const handleChangePhone = (newValue: any) => {
        setValue(newValue)
    }

    const handleChangeCity = (event: SelectChangeEvent) => {
        setCity(event.target.value);
    };

    const handleChangeFormState = (event: SelectChangeEvent) => {
        setFormState(event.target.value);
    };



    return (
        <>
            <Button onClick={handleOpen} sx={styleBtn} variant={variantBtn} color={colorBtn}>
                {titleBtn}
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                className="modalMenu__adaptive"
            >
                <Box sx={style}>
                    <CloseIcon sx={{float: "right", cursor: "pointer"}} onClick={handleClose}/>
                    <Typography variant="h5" component="h2" sx={{textAlign: "center"}}>
                        Оставить заявку

                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': {m: 1, width: '25ch'},
                            }}
                            noValidate
                            autoComplete="off"
                            style={{marginTop: "25px"}}
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            <TextField {...register("name")} id="standard-basic" label="Ваше имя"
                                       variant="standard"/>
                            <TextField {...register("lastname")} id="standard-basic" label="Ваша фамилия"
                                       variant="standard"/>
                            <TextField {...register("email")} type="email" id="standard-basic" label="Email"
                                       variant="standard"/>

                            {/*<InputLabel sx={{*/}
                            {/*    marginLeft: "-32px!important",*/}
                            {/*    marginTop: "5px!important",*/}
                            {/*    marginBottom: "0px!important"*/}
                            {/*}}>*/}
                            {/*    Дата записи*/}
                            {/*</InputLabel>*/}
                            {/*<TextField {...register("dataCurrent")}*/}
                            {/*           //inputProps={{min: "2023-05-16", max: "2025-05-31"}}*/}
                            {/*           id="standard-basic"*/}
                            {/*           type="date"*/}
                            {/*           variant="standard"/>*/}


                            <FormControl variant="standard" sx={{m: 1, minWidth: 120}}>
                                <InputLabel id="demo-simple-select-standard-label">Город обучения</InputLabel>
                                <Select
                                    {...register("dataCurrent")}
                                    labelId="demo-simple-select-standard-label"
                                    id="demo-simple-select-standard"
                                    value={city}
                                    onChange={handleChangeCity}
                                    label="learn"
                                    sx={{textAlign: "left"}}
                                >
                                    <MenuItem value="Ярославль">Ярославль</MenuItem>
                                    <MenuItem value="Кастрома">Кострома</MenuItem>
                                    <MenuItem value="Галич">Галич</MenuItem>
                                    <MenuItem value="Буй">Буй</MenuItem>
                                </Select>
                            </FormControl>



                            <MuiTelInput defaultCountry="RU" {...register("phoneClient", {
                                maxLength: {value: 16, message: "Введите корректный номер телефона"},
                                minLength: {value: 16, message: "Введите корректный номер телефона"},
                            })} value={value} onChange={handleChangePhone} id="standard-basic" label="Ваш телефон"
                                         variant="standard"/>

                            {errors?.phoneClient && <InputLabel sx={{width: "85%!important"}}>Введите корректный номер
                                телефона</InputLabel>}


                            <FormControl variant="standard" sx={{m: 1, minWidth: 120}}>
                                <InputLabel id="demo-simple-select-standard-label1">Форма обучения</InputLabel>
                                <Select
                                    {...register("formsLearnClient")}
                                    labelId="demo-simple-select-standard-label1"
                                    id="demo-simple-select-standard2"
                                    value={formState}
                                    onChange={handleChangeFormState}
                                    label="learn1"
                                    sx={{textAlign: "left"}}
                                >
                                    <MenuItem value="Дистанционное обучение">Дистанционное обучение</MenuItem>
                                    <MenuItem value="Дневное обучение">Дневное обучение</MenuItem>
                                </Select>
                            </FormControl>


                            <FormControl>
                                <RadioGroup
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                    sx={{
                                        textAlign: "left",
                                        fontFamily: 'Mulish',
                                        fontStyle: "normal",
                                        fontWeight: "50",
                                        fontSize: "30px",
                                    }}
                                >
                                    <FormControlLabel control={<Radio/>}
                                                      label="Я согласен(-на) с политикой конфиденциальности"/>
                                </RadioGroup>
                            </FormControl>

                            <Button type="submit" sx={{
                                background: "linear-gradient(180deg, #FF6B00 0%, #DB1C1C 100%)",
                                borderRadius: "20px",
                                color: "white",
                                width: "350px",
                                height: "59px"
                            }}>Отправить</Button>
                        </Box>
                    </Typography>
                </Box>
            </Modal>
        </>
    );
};

export default ModalMain;