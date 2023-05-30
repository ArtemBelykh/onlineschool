import React, {useState, useEffect} from "react";

export const FrameLoad = ({src, ...props}: any) => {
    const [imageSrc, setImageSrc] = useState(src);

    const cn = `progressive ${
        imageSrc === src ? "loading" : "loaded"
    }`;

    useEffect(() => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
            setImageSrc(src);
        };
    }, [src]);

    return (

        <div style={{position: "relative", overflow: "hidden"}} className={"adaptive__maps_div2"}>
            <a
                href="https://yandex.ru/maps/7/kostroma/?utm_medium=mapframe&utm_source=maps"
                style={{color: "#eee", fontSize: "12px", position: "absolute", top: "0px"}}>Кострома</a>
            <a
                href="https://yandex.ru/maps/7/kostroma/house/sovetskaya_ulitsa_44a/YEkYfwNlT0cDQFttfXt3c39rbA==/?ll=40.945624%2C57.762388&utm_medium=mapframe&utm_source=maps&z=17.1"
                style={{color: "#eee", fontSize: "12px", position: "absolute", top: "14px"}}>Советская улица,
                44А —
                Яндекс
                Карты</a>
            <iframe loading={"lazy"} title={"ya_maps"} className={"adaptive__maps" + cn}
                    src={imageSrc}
                    width="700" height="476" allowFullScreen={true}
                    style={{position: "relative"}}></iframe>
        </div>
        //     <img
        //         className={cn}
        // src={imageSrc}
        // alt={props.alt || ""}
        // width={width}
        // {...props}
        // loading={"lazy"}
        // fetchpriority="high"
        //     />
    );
};
