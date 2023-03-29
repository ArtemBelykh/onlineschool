import React from 'react';
import {Container, Typography, Zoom} from "@mui/material";
import {Link} from "react-router-dom";

const AdvantagesOfYourAutoSchoolArticle = () => {
    return (
        <Container sx={{width: "60%", marginTop: window.screen.width < 900 ? "100px" : "166px", display: "flex", marginBottom: "100px", flexWrap: window.screen.width < 900 ? "wrap" : "nowrap" }}>


            <div style={{width: "500px"}}>
                <Typography sx={{
                    fontFamily: "Mulish",
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: "40px",
                    lineHeight: "113.5%",
                    color: "#000000",
                    marginBottom: "61px"
                }} variant="h3" component="h2">
                    Достоинства нашей автошколы
                </Typography>

                <Typography sx={{
                    fontFamily: "Mulish",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "20px",
                    lineHeight: "113.5%",
                    color: "#000000",
                    textIndent: "30px",
                    marginBottom: "20px"
                }} variant="h6">
                    За все время своей юридической практики мне приходилось сталкиваться с разными вопросами в области
                    «АВТОПРАВА», в том числе и с проблемами «потенциальных водителей» на стадии обучения в автошколе.
                </Typography>

                <Typography sx={{
                    fontFamily: "Mulish",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "20px",
                    lineHeight: "113.5%",
                    color: "#000000",
                    textIndent: "30px",
                    marginBottom: "20px"
                }} variant="h6">
                    В этой статье я хочу Вам рассказать, как не попасть на «удочку» к не честным на руку «АВТОШКОЛАМ» и
                    получить Вам, как будущему водителю, всю программу обучения, предусмотренную законодательством.
                </Typography>

                <Typography sx={{
                    fontFamily: "Mulish",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "20px",
                    lineHeight: "113.5%",
                    color: "#000000",
                    textIndent: "30px",
                    marginBottom: "20px"
                }} variant="h6">
                    Сразу же хочу оговориться, при написании этой статьия не буду Вас загружать юридическими терминами и
                    ссылками на нормы права, если это кому-то понадобиться для разрешения той или иной ситуации, я с
                    удовольствием поделюсь этой информацией. И так начнем.
                </Typography>


                <Typography sx={{
                    fontFamily: "Mulish",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "20px",
                    lineHeight: "113.5%",
                    color: "#000000",
                    textIndent: "30px"
                }} variant="h6">
                    Что Вы, как человек, намеревающийся получить водительское образование, знаете об «АВТОШКОЛАХ»?
                </Typography>
            </div>

            <Zoom children={<img src="/articles/article1.png" alt="article1" style={{marginLeft: "91px"}} className="adaptive__images_article"/>} />

            <Link to="/" style={{textDecoration: "none", display: "block", justifyContent: "center"}}>
                <Typography sx={{
                    width: "160px",
                    height: "160px",
                    background: "linear-gradient(180deg, #FF6B00 0%, #DB1C1C 100%)",
                    borderRadius: "50%",
                    marginTop: "50px",
                    fontFamily: "Mulish",
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: "15px",
                    lineHeight: "19px",
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    textTransform: "uppercase",
                    position: "absolute",
                    bottom: "120px"
                }} className="adaptive__circel_article">
                    вернуться <br/>
                    на главную
                </Typography>
            </Link>
        </Container>
    );
};

export default AdvantagesOfYourAutoSchoolArticle;