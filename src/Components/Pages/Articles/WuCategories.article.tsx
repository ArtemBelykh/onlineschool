import React from 'react';
import {Container, Typography} from "@mui/material";

const GetOutOfTheCarOrNot = () => {
    return (
        <Container sx={{
            display: "flex",
            width: "75%",
            marginTop: "100px",
            alignItems: "center",
            height: "100%",
            marginBottom: "50px"
        }}>

            <div>
                <Typography sx={{
                    fontFamily: "Mulish",
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: "36px",
                    lineHeight: "113.5%",
                    color: "#000000",
                    textAlign: "center"
                }}>Категории водительского удостоверения</Typography>

                <div className="hhhh" style={{
                    fontFamily: "Mulish",
                    fontStyle: "normal",
                    fontSize: "24px",
                    lineHeight: "113.5%",
                    color: "#000000",
                    marginTop: "50px",
                    textAlign: "justify"
                }}>
                    <img src="/articleImages1.png" style={{width: "100%", height: "100%"}} alt="1"/><br/><br/>

                    <b>Категория А.</b> Водительское удостоверение такого типа позволяет управлять мотоциклом с боковым
                    прицепом или же без него. Общая снаряженная масса транспортного средства не должна превышать 400 кг.
                    При этом мотоцикл может иметь двухколесное, трехколесное или четырехколесное исполнение. <br/>

                    <b>Категория B.</b> Наличие такой категории предоставляет возможность водить автомобиль, масса которого не
                    превышает 3,5 т. Количество пассажирских мест в салоне должно быть не более 8-ми. Такое
                    удостоверение позволяет управлять автомобилем с прицепом. Снаряженная масса последнего не должна
                    превышать 750 кг. При условии превышения этого показателя итоговая масса состава не должна превышать
                    массу авто без нагрузки.<br/>

                    <b>Категория C.</b> Позволяет управлять автомобилями с массой более 3500 кг и прицепом, вес которого не
                    превышает 750 кг. Однако следует отметить, что грузовики категории D носитель удостоверения такого
                    образца не имеет права водить.<br/>

                    <b>Категория D.</b> Владелец такой категории прав может осуществлять перевозку людей в транспортном
                    средстве с более чем 8 пассажирскими местами. Такой автобус может дополнительно оснащаться прицепом
                    с весом до 750 кг.<br/>

                    <b>Категория М.</b> Эта категория позволяет управлять мопедом и квадрициклом. Чтобы сделать такие права,
                    достаточно открыть любую другую категорию.<br/>

                    <b>Категории Tm и Tb.</b> Необходимы водителям трамваев и троллейбусов. Это относительно новые категории
                    водительских прав. Раннее просто использовались специальные отметки в правах стандартного образца.<br/>

                    <b>Категория BE.</b> Дополнительная категория, позволяющая управлять транспортными средствами из категории
                    B с прицепом массой более 750 кг.<br/>

                    <b>Категория CE.</b> Имеет много общего с предыдущей категорией. Только в этом случае разрешается вождение
                    транспортных средств из категории C. Масса используемого прицепа варьируется в пределах 750-3500 кг.<br/>

                    <b>Категория DE.</b> Такая категория позволяет управлять автобусом, количество пассажирских мест в котором
                    больше восьми. При этом транспортное средство может оснащаться прицепом с массой от 750 кг до 3,5 т.<br/>

                    <b>Категория A1.</b> Эта категория необходима для управления мотоциклом, объем двигателя которого
                    варьируется в пределах 50-125 кубических сантиметров. Речь идет о скутерах.<br/>

                    <b>Категория B1.</b> Позволяет водить транспортное средство с порожней массой не более 550-ти кг. При это
                    его максимальная скорость держится на отметке 50 км/ч. Объем силового агрегата используемого
                    транспортного средства не должен превышать 50 кубических сантиметров. Права категории В1 необходимы
                    для управления трициклом и квадроциклом.<br/>

                    <b>Категория С1.</b> Необходима для управления автомобилем с массой от 3500 до 7500 кг, который может
                    оснащаться прицепом не более 750-ти кг. Удостоверение данной категории не предоставляет возможности
                    управлять автомобилями из категории D.<br/>

                    <b>Категория С1Е.</b> Выдается для управления транспортными средства с массой от 3,5 до 7,5 т. Машины могут
                    оснащаться прицепом более 750-ти кг. При этом общая масса сцепленного состава не должна превышать
                    12-ти тонн.<br/>

                    <b>Категория D1.</b> Такая категория позволяет водить транспортное средство для перевозки пассажиров,
                    способное вместить до 16-ти человек. Кроме этого, наличие категории D1 позволяет эксплуатировать
                    такие машины с прицепом до 750 кг.<br/>

                    <b>Категория D1E.</b> Позволяет водить транспортные средства из категории D с прицепом более 750-ти кг.
                    Общая масса снаряженного состава не должна превышать 12 тонн.

                </div>
            </div>
        </Container>

    )
};

export default GetOutOfTheCarOrNot;