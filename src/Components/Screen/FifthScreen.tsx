import React from 'react';
import {Container, Typography} from "@mui/material";
import Slider from "react-slick";
import IndexReviews from "../Reviews/Index.reviews";

export const styleSliderItems = {
    width: window.screen.width < 900 ? "300px !important" : "457px !important",
    height: window.screen.width < 900 ? "400px !important" : "100% !important",
    border: "1px solid #DB241C",
    borderRadius: "20px",
    cursor: "pointer",
}

function SampleNextArrow(props: any) {
    const {className, style, onClick} = props;
    return (
        <div
            className={className}
            style={{...style}}
            onClick={onClick}
        >
            <img src="/Arrow%201.png" alt="arrow"/>
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
            <img style={{transform: "scaleX(-1)", transformOrigin: "center", transformBox: "fill-box"}}
                 src="/Arrow%201.png" alt="arrow"/>
        </div>
    );
}


const FifthScreen = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true

                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 1,
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
        <Container id="reviews" sx={{width: "65%", marginTop: "70px", height: "600px"}}
                   className="adaptive__reviews_height">

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
                Отзывы
            </Typography>


            <Slider {...settings} className="sliderSlider">
                <IndexReviews name={"Ангелина Гусева"}
                              text={"Очень рада, что училась именно в вашей автошколе! " +
                                  "Спасибо за профессиональную подготовку Сергею Львовичу! Очень удобное обучение теории – онлайн. " +
                                  "И, конечно же, приемлемая цена"} city={"г. Галич"} />

                <IndexReviews name={"Елена Грибкова"}
                              text={"Недавно стала счастливой обладательницей водительского удостоверения и все благодаря Автошколе Право на Права. " +
                                  "Сдала с первого раза, спасибо за это самому лучшему инструктору Сергею Львовичу! " +
                                  "Обучалась теории онлайн – это очень удобно, на обучающей платформе все подробно рассказывается, показывается. Если Автошкола, то только Право на Права"} city={"г. Кострома"}/>

                <IndexReviews name={"Елена Нефёдова"}
                              text={"Добрый день. Хотелось выразить огромную благодарность автошколе Право на Права" +
                                  "У меня получилось сдать с первого раза и теорию и практику. " +
                                  "Так как у меня в семье нет водителей, одни пешеходы, пришлось изучить абсолютно все самостоятельно."} city={"г. Кострома"}/>

                <IndexReviews name={"Арсений Давыдов"}
                              text={"Отличная автошкола, проходил обучение и сдал теорию и вождение с первого раза. " +
                                  "Хочу выразить благодарность за обучение преподавателю Анастасии и инструктору Сергею Львовичу, а так же Алёне. " +
                                  "Всем рекомендую эту автошколу!"} city={"г. Кострома"}/>

                <IndexReviews name={"Светлана Фалеева"}
                              text={"Я сдала !!! И это только благодаря именно этой автошколе! Спасибо огромное лучшему инструктору, " +
                                  "Сергею Львовичу, спасибо Анастасии и Алёне за огромную поддержку, хорошее настроений и настрой на экзамене, это бесценно! " +
                                  "Буду рекомендовать всем обращаться именно к вам. Ни разу не пожалела, что пришла к вам. Всё четко, ясно, без лишней информации. Вы-супер! Спасибо!"} city={"г. Кострома"}/>

                <IndexReviews name={"Ирина Кулакова"}
                              text={"Отличная автошкола! Не пожалела ни капли, что пошла учиться на права. " +
                                  "Огромное спасибо самому классному инструктору Игорю Михайловичу, человек с большой буквы, с огромным знанием своего дела. " +
                                  "Спасибо Анастасии Анатольевне, преподавателю ПДД. Ребята, вы лучшие, отличная команда, не забуду никогда вашу помощь и поддержку."} city={"г. Кострома"}/>

                <IndexReviews name={"Данила Егоров"}
                              text={"Выражаю огромную благодарность автошколе   «Право на Права». Сдал все с первого раза. " +
                                  "Огромное спасибо инструктору Сергею Львовичу, Анастасии и Алёне за лучшее обучение, настрой перед экзаменом и поддержку. " +
                                  "Выбирайте только эту автошколу, не пожалеете. "} city={"г. Галич"}/>

                <IndexReviews name={"Павел Бруяка"}
                              text={"Выражаю огромную благодарность Автошколе \"Право На Права\". Сдал всё на отлично. " +
                                  "Хочу поблагодарить инструктора Сергея Львовича за доходчивые объяснения, за его выдержку, за то что научил тонкостям вождения. " +
                                  "А так же хочу сказать спасибо Анастасии и Алёне за отличное обучение, за наставления, за моральную поддержку перед экзаменом! " +
                                  "Оставайтесь такими же, на таком же высоком уровне!!!! Всем рекомендую."} city={"г. Кострома"}/>

                <IndexReviews name={"Татьяна Чудинова"}
                              text={"Я сдала и ты сдашь!!!! «Право на Права» лучшая автошкола!!!!\n" +
                                  "Хочу сказать огромное СПАСИБО Анастасии Анатольевне, за прекрасную теорию, она ее разжевала и в рот положила, даже помогла проглотить!" +
                                  "Спасибо инструкторам Сергей Львовичу и Игорю Михайловичу благодаря им я научилась и не боюсь ни чего, спасибо за всё!!!\n" +
                                  "Огромное спасибо за исполнение мечты!!!\n" +
                                  "Выбрав ,,Право на Права,, ты никогда не пожалеешь!!! Не умеешь научат, не хочешь заставят!!!"} city={"г. Кострома"}/>
            </Slider>

        </Container>
    );
};

export default FifthScreen;