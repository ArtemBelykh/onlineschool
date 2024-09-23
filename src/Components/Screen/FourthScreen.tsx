import React from 'react';
import {Container, Typography} from "@mui/material";
import Slider from "react-slick";
import Box from "@mui/material/Box";
import {LoadImages} from "../LoadImages";


const styleSliderItems = {
    width: "266px !important",
    height: "470px",
    border: "1px solid rgba(0, 0, 0, 0.5)",
    borderRadius: "20px",
    cursor: "poiner"

}

function SampleNextArrow(props: any) {
    const {className, style, onClick} = props;
    return (
        <div
            className={className}
            style={{...style}}
            onClick={onClick}
        >
            <img style={{width: "56px", height: "16px"}} src="/Arrow%201.png" alt="arrow"/>
        </div>
    );
}

function SamplePrevArrow(props: any) {
    const {className, style, onClick} = props;
    return (
        <div
            className={className}
            style={{...style, position: "absolute !important", bottom: "0"}}
            onClick={onClick}
        >
            <img style={{transform: "scaleX(-1)", transformOrigin: "center", transformBox: "fill-box", width: "56px", height: "16px"}}
                 src="/Arrow%201.png" alt="arrow"/>
        </div>
    );
}

const FourthScreen = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>,
        responsive: [
            {
                breakpoint: 1336,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true

                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 690,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]

    };
    return (
        <Container id="articles"
                   sx={{width: "65%", marginTop: "70px", height: window.screen.width < 900 ? "700px" : "650px"}}>

            <div className="adaptPuz" style={{position: "absolute", left: "0", marginTop: "300px", zIndex: "-1"}}>
                <img style={{width: "100%", height: "100%"}} src="/puz/puz2.png" alt="Кружочки"/>
            </div>
            <Typography sx={{
                fontFamily: "Mulish",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "15px",
                lineHeight: "30px",
                textTransform: "uppercase",
                color: "rgba(0, 0, 0, 0.5)",
                marginBottom: "20px"
            }} variant="h6" component="h2">
                Статьи
            </Typography>


            <Slider {...settings} className="sliderSlider">
                <Box sx={styleSliderItems}>
                    <LoadImages style={{width: "100%", height: "236px"}} src="/post1.jpg" alt="Как выбрать автошколу"/>


                    <div style={{display: "flex", justifyContent: "end", marginRight: "20px"}}>
                        <div style={{
                            background: "linear-gradient(180deg, #FF6B00 0%, #DB1C1C 100%)",
                            borderRadius: "50%",
                            width: "53px",
                            height: "53px",
                            position: "absolute",
                            top: "45%"
                        }}>
                            <Typography sx={{
                                fontFamily: "Mulish",
                                fontStyle: "normal",
                                fontWeight: "700",
                                fontSize: "20px",
                                lineHeight: "20px",
                                textAlign: "center",
                                color: "#FFFFFF"
                            }} variant="h6" component="h2">
                                18 <br/>апр
                            </Typography>
                        </div>
                    </div>

                    <div style={{padding: "30px"}}>
                        <Typography sx={{
                            fontFamily: "Mulish",
                            fontStyle: "normal",
                            fontWeight: "700",
                            fontSize: "20px",
                            lineHeight: "23px",
                            marginBottom: "10px"
                        }} variant="h4" component="h2">
                            Как выбрать автошколу
                        </Typography>

                        <Typography sx={{
                            fontFamily: "Mulish",
                            fontStyle: "normal",
                            fontWeight: "400",
                            fontSize: "16px",
                            lineHeight: "20px"
                        }} variant="h6" component="h2">
                            Прежде чем начать писать эту статью, хочу Вам представиться, меня зовут Андрей Крючков...
                        </Typography>


                        <div style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginTop: "40px"
                        }}>
                            <div><a style={{color: "#DB241C", textDecoration: "none"}}
                                    href="/article/How-To-Choose-a-driving-school-for-a-beginner">Читать далее</a></div>
                            <div><img style={{width: "56px", height: "16px"}} src="/Arrow%201.png" alt="arrow"/></div>
                        </div>
                    </div>
                </Box>
                <Box sx={styleSliderItems}>
                    <LoadImages style={{width: "100%", height: "236px"}} src="/post2.jpg" alt="Почему именно мы"/>

                    <div style={{display: "flex", justifyContent: "end", marginRight: "20px"}}>
                        <div style={{
                            background: "linear-gradient(180deg, #FF6B00 0%, #DB1C1C 100%)",
                            borderRadius: "50%",
                            width: "53px",
                            height: "53px",
                            position: "absolute",
                            top: "45%"
                        }}>
                            <Typography sx={{
                                fontFamily: "Mulish",
                                fontStyle: "normal",
                                fontWeight: "700",
                                fontSize: "20px",
                                lineHeight: "20px",
                                textAlign: "center",
                                color: "#FFFFFF"
                            }} variant="h6" component="h2">
                                20 <br/>апр
                            </Typography>
                        </div>
                    </div>
                    <div style={{padding: "30px"}}>
                        <Typography sx={{
                            fontFamily: "Mulish",
                            fontStyle: "normal",
                            fontWeight: "700",
                            fontSize: "20px",
                            lineHeight: "23px",
                            marginBottom: "10px"
                        }} variant="h4" component="h2">
                            Почему именно мы
                        </Typography>

                        <Typography sx={{
                            fontFamily: "Mulish",
                            fontStyle: "normal",
                            fontWeight: "400",
                            fontSize: "16px",
                            lineHeight: "20px"
                        }} variant="h6" component="h2">
                            Давайте быть честными перед собой, никто и никогда не разбирался во всех нюансах, которые
                            Вам...
                        </Typography>

                        <div style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginTop: "60px"
                        }}>
                            <div><a style={{color: "#DB241C", textDecoration: "none"}} href="/article/How-Me">Читать
                                далее</a></div>
                            <div><img style={{width: "56px", height: "16px"}} src="/Arrow%201.png" alt="arrow"/></div>
                        </div>
                    </div>
                </Box>
                <Box sx={styleSliderItems}>
                    <LoadImages style={{width: "100%", height: "236px", borderRadius: "20px 20px 0px 0px"}}
                         src="/articles/no-money.jpg" alt="Как сэкономить на обучении в автошколе"/>

                    <div style={{display: "flex", justifyContent: "end", marginRight: "20px"}}>
                        <div style={{
                            background: "linear-gradient(180deg, #FF6B00 0%, #DB1C1C 100%)",
                            borderRadius: "50%",
                            width: "53px",
                            height: "53px",
                            position: "absolute",
                            top: "45%"
                        }}>
                            <Typography sx={{
                                fontFamily: "Mulish",
                                fontStyle: "normal",
                                fontWeight: "700",
                                fontSize: "20px",
                                lineHeight: "20px",
                                textAlign: "center",
                                color: "#FFFFFF"
                            }} variant="h6" component="h2">
                                30 <br/>апр
                            </Typography>
                        </div>
                    </div>
                    <div style={{padding: "30px"}}>
                        <Typography sx={{
                            fontFamily: "Mulish",
                            fontStyle: "normal",
                            fontWeight: "700",
                            fontSize: "20px",
                            lineHeight: "23px",
                            marginBottom: "10px"
                        }} variant="h4" component="h2">
                            Как сэкономить на обучении в автошколе
                        </Typography>

                        <Typography sx={{
                            fontFamily: "Mulish",
                            fontStyle: "normal",
                            fontWeight: "400",
                            fontSize: "16px",
                            lineHeight: "20px"
                        }} variant="h6" component="h2">
                            Сразу хочу Вас поблагодарить за просмотры и отзывы по предыдущей моей статье.
                        </Typography>

                        <div style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginTop: "40px"
                        }}>
                            <div><a style={{color: "#DB241C", textDecoration: "none"}}
                                    href="/article/How-to-save-money">Читать далее</a></div>
                            <div><img style={{width: "56px", height: "16px"}} src="/Arrow%201.png" alt="arrow"/></div>
                        </div>
                    </div>


                </Box>
                <Box sx={styleSliderItems}>
                    <LoadImages style={{width: "100%", height: "236px", borderRadius: "20px 20px 0px 0px"}}
                         src="/articles/test-on-med.jpg" alt="Медицинский тест на дороге"/>

                    <div style={{display: "flex", justifyContent: "end", marginRight: "20px"}}>
                        <div style={{
                            background: "linear-gradient(180deg, #FF6B00 0%, #DB1C1C 100%)",
                            borderRadius: "50%",
                            width: "53px",
                            height: "53px",
                            position: "absolute",
                            top: "45%"
                        }}>
                            <Typography sx={{
                                fontFamily: "Mulish",
                                fontStyle: "normal",
                                fontWeight: "700",
                                fontSize: "20px",
                                lineHeight: "20px",
                                textAlign: "center",
                                color: "#FFFFFF"
                            }} variant="h6" component="h2">
                                5 <br/>мая
                            </Typography>
                        </div>
                    </div>
                    <div style={{padding: "30px"}}>
                        <Typography sx={{
                            fontFamily: "Mulish",
                            fontStyle: "normal",
                            fontWeight: "700",
                            fontSize: "20px",
                            lineHeight: "23px",
                            marginBottom: "10px"
                        }} variant="h4" component="h2">
                            Медицинский тест на дороге
                        </Typography>

                        <Typography sx={{
                            fontFamily: "Mulish",
                            fontStyle: "normal",
                            fontWeight: "400",
                            fontSize: "16px",
                            lineHeight: "20px"
                        }} variant="h6" component="h2">
                            Каждый водитель хоть раз был остановлен сотрудниками ГИБДД для проверки документов и...
                        </Typography>

                        <div style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginTop: "40px"
                        }}>
                            <div><a style={{color: "#DB241C", textDecoration: "none"}}
                                    href="/article/Medical-Test-On-The-Road">Читать далее</a></div>
                            <div><img style={{width: "56px", height: "16px"}} src="/Arrow%201.png" alt="arrow"/></div>
                        </div>
                    </div>


                </Box>
                <Box sx={styleSliderItems}>
                    <LoadImages style={{width: "100%", height: "236px", borderRadius: "20px 20px 0px 0px"}}
                         src="/articles/clock.jpg" alt="Честные часы в автошколе"/>

                    <div style={{display: "flex", justifyContent: "end", marginRight: "20px"}}>
                        <div style={{
                            background: "linear-gradient(180deg, #FF6B00 0%, #DB1C1C 100%)",
                            borderRadius: "50%",
                            width: "53px",
                            height: "53px",
                            position: "absolute",
                            top: "45%"
                        }}>
                            <Typography sx={{
                                fontFamily: "Mulish",
                                fontStyle: "normal",
                                fontWeight: "700",
                                fontSize: "20px",
                                lineHeight: "20px",
                                textAlign: "center",
                                color: "#FFFFFF"
                            }} variant="h6" component="h2">
                                6 <br/>мая
                            </Typography>
                        </div>
                    </div>
                    <div style={{padding: "30px"}}>
                        <Typography sx={{
                            fontFamily: "Mulish",
                            fontStyle: "normal",
                            fontWeight: "700",
                            fontSize: "20px",
                            lineHeight: "23px",
                            marginBottom: "10px"
                        }} variant="h4" component="h2">
                            ЧЕСТНЫЕ ЧАСЫ В АВТОШКОЛЕ
                        </Typography>

                        <Typography sx={{
                            fontFamily: "Mulish",
                            fontStyle: "normal",
                            fontWeight: "400",
                            fontSize: "16px",
                            lineHeight: "20px"
                        }} variant="h6" component="h2">
                            Сразу хочу Вас поблагодарить за просмотры и отзывы по предыдущей моей статье...
                        </Typography>

                        <div style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginTop: "40px"
                        }}>
                            <div><a style={{color: "#DB241C", textDecoration: "none"}}
                                    href="/article/Honest-Hours-In-Driving-School">Читать далее</a></div>
                            <div><img style={{width: "56px", height: "16px"}} src="/Arrow%201.png" alt="arrow"/></div>
                        </div>
                    </div>


                </Box>
                <Box sx={styleSliderItems}>
                    <LoadImages style={{width: "100%", height: "236px", borderRadius: "20px 20px 0px 0px"}}
                         src="/articles/out-cars.jpg" alt="Выйти из машины или нет"/>

                    <div style={{display: "flex", justifyContent: "end", marginRight: "20px"}}>
                        <div style={{
                            background: "linear-gradient(180deg, #FF6B00 0%, #DB1C1C 100%)",
                            borderRadius: "50%",
                            width: "53px",
                            height: "53px",
                            position: "absolute",
                            top: "45%"
                        }}>
                            <Typography sx={{
                                fontFamily: "Mulish",
                                fontStyle: "normal",
                                fontWeight: "700",
                                fontSize: "20px",
                                lineHeight: "20px",
                                textAlign: "center",
                                color: "#FFFFFF"
                            }} variant="h6" component="h2">
                                7 <br/>мая
                            </Typography>
                        </div>
                    </div>
                    <div style={{padding: "30px"}}>
                        <Typography sx={{
                            fontFamily: "Mulish",
                            fontStyle: "normal",
                            fontWeight: "700",
                            fontSize: "20px",
                            lineHeight: "23px",
                            marginBottom: "10px"
                        }} variant="h4" component="h2">
                            Выйти из машины или нет
                        </Typography>

                        <Typography sx={{
                            fontFamily: "Mulish",
                            fontStyle: "normal",
                            fontWeight: "400",
                            fontSize: "16px",
                            lineHeight: "20px"
                        }} variant="h6" component="h2">
                            Каждый автомобилист знает, что когда тебя останавливает сотрудник ГИБДД, нужно
                            подчиняться...
                        </Typography>

                        <div style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginTop: "40px"
                        }}>
                            <div><a style={{color: "#DB241C", textDecoration: "none"}} href="/article/Get-a-car">Читать
                                далее</a></div>
                            <div><img style={{width: "56px", height: "16px"}} src="/Arrow%201.png" alt="arrow"/></div>
                        </div>
                    </div>


                </Box>
                <Box sx={styleSliderItems}>
                    <LoadImages style={{width: "100%", height: "236px", borderRadius: "20px 20px 0px 0px"}}
                         src="/articles/buy-avto.jpg" alt="Как купить поддержанный автомобиль?"/>

                    <div style={{display: "flex", justifyContent: "end", marginRight: "20px"}}>
                        <div style={{
                            background: "linear-gradient(180deg, #FF6B00 0%, #DB1C1C 100%)",
                            borderRadius: "50%",
                            width: "53px",
                            height: "53px",
                            position: "absolute",
                            top: "45%"
                        }}>
                            <Typography sx={{
                                fontFamily: "Mulish",
                                fontStyle: "normal",
                                fontWeight: "700",
                                fontSize: "20px",
                                lineHeight: "20px",
                                textAlign: "center",
                                color: "#FFFFFF"
                            }} variant="h6" component="h2">
                                9 <br/> мая
                            </Typography>
                        </div>
                    </div>
                    <div style={{padding: "30px"}}>
                        <Typography sx={{
                            fontFamily: "Mulish",
                            fontStyle: "normal",
                            fontWeight: "700",
                            fontSize: "20px",
                            lineHeight: "23px",
                            marginBottom: "10px"
                        }} variant="h4" component="h2">
                            Как купить поддержанный автомобиль?
                        </Typography>

                        <Typography sx={{
                            fontFamily: "Mulish",
                            fontStyle: "normal",
                            fontWeight: "400",
                            fontSize: "16px",
                            lineHeight: "20px"
                        }} variant="h6" component="h2">
                            Я являюсь практикующим юристом и часто сталкиваюсь с различными ситуациями, в которые...
                        </Typography>

                        <div style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginTop: "20px"
                        }}>
                            <div><a style={{color: "#DB241C", textDecoration: "none"}} href="/article/Buy-Car">Читать
                                далее</a></div>
                            <div><img style={{width: "56px", height: "16px"}} src="/Arrow%201.png" alt="arrow"/></div>
                        </div>
                    </div>


                </Box>
                <Box sx={styleSliderItems}>
                    <LoadImages style={{width: "100%", height: "236px", borderRadius: "20px 20px 0px 0px"}}
                         src="/articles/kat-vy.jpg" alt="Категории водительского удостоверения"/>

                    <div style={{display: "flex", justifyContent: "end", marginRight: "20px"}}>
                        <div style={{
                            background: "linear-gradient(180deg, #FF6B00 0%, #DB1C1C 100%)",
                            borderRadius: "50%",
                            width: "53px",
                            height: "53px",
                            position: "absolute",
                            top: "45%"
                        }}>
                            <Typography sx={{
                                fontFamily: "Mulish",
                                fontStyle: "normal",
                                fontWeight: "700",
                                fontSize: "20px",
                                lineHeight: "20px",
                                textAlign: "center",
                                color: "#FFFFFF"
                            }} variant="h6" component="h2">
                                10
                                мая
                            </Typography>
                        </div>
                    </div>
                    <div style={{padding: "30px"}}>
                        <Typography sx={{
                            fontFamily: "Mulish",
                            fontStyle: "normal",
                            fontWeight: "700",
                            fontSize: "20px",
                            lineHeight: "23px",
                            marginBottom: "10px"
                        }} variant="h4" component="h2">
                            Категории водительского удостоверения
                        </Typography>

                        <Typography sx={{
                            fontFamily: "Mulish",
                            fontStyle: "normal",
                            fontWeight: "400",
                            fontSize: "16px",
                            lineHeight: "20px"
                        }} variant="h6" component="h2">
                            Категория А. Водительское удостоверение такого типа позволяет управлять мотоциклом...
                        </Typography>

                        <div style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginTop: "20px"
                        }}>
                            <div><a style={{color: "#DB241C", textDecoration: "none"}} href="/article/Wu-category">Читать
                                далее</a></div>
                            <div><img style={{width: "56px", height: "16px"}} src="/Arrow%201.png" alt="arrow"/></div>
                        </div>
                    </div>


                </Box>
                <Box sx={styleSliderItems}>
                    <LoadImages style={{width: "100%", height: "236px", borderRadius: "20px 20px 0px 0px"}}
                         src="/articles/euro-protocol.jpg" alt="Оформление Европротокола"/>

                    <div style={{display: "flex", justifyContent: "end", marginRight: "20px"}}>
                        <div style={{
                            background: "linear-gradient(180deg, #FF6B00 0%, #DB1C1C 100%)",
                            borderRadius: "50%",
                            width: "53px",
                            height: "53px",
                            position: "absolute",
                            top: "45%"
                        }}>
                            <Typography sx={{
                                fontFamily: "Mulish",
                                fontStyle: "normal",
                                fontWeight: "700",
                                fontSize: "20px",
                                lineHeight: "20px",
                                textAlign: "center",
                                color: "#FFFFFF"
                            }} variant="h6" component="h2">
                                10
                                мая
                            </Typography>
                        </div>
                    </div>
                    <div style={{padding: "30px"}}>
                        <Typography sx={{
                            fontFamily: "Mulish",
                            fontStyle: "normal",
                            fontWeight: "700",
                            fontSize: "20px",
                            lineHeight: "23px",
                            marginBottom: "10px"
                        }} variant="h4" component="h2">
                            ОФОРМЛЕНИЕ «ЕВРОПРОТОКОЛА»
                        </Typography>

                        <Typography sx={{
                            fontFamily: "Mulish",
                            fontStyle: "normal",
                            fontWeight: "400",
                            fontSize: "16px",
                            lineHeight: "20px"
                        }} variant="h6" component="h2">
                            В целях защиты прав потерпевших на возмещение вреда, причиненного их жизни...
                        </Typography>

                        <div style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginTop: "40px"
                        }}>
                            <div><a style={{color: "#DB241C", textDecoration: "none"}} href="/article/Euro-Protocol">Читать
                                далее</a></div>
                            <div><img style={{width: "56px", height: "16px"}} src="/Arrow%201.png" alt="arrow"/></div>
                        </div>
                    </div>


                </Box>
            </Slider>

        </Container>
    );
};

export default FourthScreen;



