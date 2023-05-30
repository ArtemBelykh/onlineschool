import React from 'react'
import cn from 'classnames'
import useOnScreen from "./on-screen";
import styles from "../loadImge.module.css";

export interface ILoadableImage {
    src: string;
    alt?: string;

    onLoad?(): void;

    style?: React.CSSProperties,
    className?: string
}

export const FrameLoad = (props: ILoadableImage) => {
    const {
        src, alt = '', onLoad = () => {
        }, style, className
    } = props
    const [isLoaded, setIsLoaded] = React.useState(false)
    const imageRef = React.useRef<HTMLIFrameElement | null>(null)
    const containerRef = React.useRef<HTMLIFrameElement | null>(null)
    const isVisible = useOnScreen(containerRef);

    React.useEffect(() => {
        if (!isVisible || isLoaded) {
            return;
        }
        if (imageRef.current) {
            imageRef.current.onload = () => {
                setIsLoaded(true)
                onLoad()
            }
        }
    }, [isVisible, onLoad, isLoaded])

    return (
        <div ref={containerRef} className={cn(styles.container, {
            [styles.containerLoaded]: isLoaded
        })}>
            {(isVisible || isLoaded) && (
                <div style={{position: "relative", overflow: "hidden"}} className="adaptive__maps_div2">
                    <a
                        href="https://yandex.ru/maps/7/kostroma/?utm_medium=mapframe&utm_source=maps"
                        style={{color: "#eee", fontSize: "12px", position: "absolute", top: "0px"}}>Кострома</a>
                    <a
                        href="https://yandex.ru/maps/7/kostroma/house/sovetskaya_ulitsa_44a/YEkYfwNlT0cDQFttfXt3c39rbA==/?ll=40.945624%2C57.762388&utm_medium=mapframe&utm_source=maps&z=17.1"
                        style={{color: "#eee", fontSize: "12px", position: "absolute", top: "14px"}}>Советская улица,
                        44А —
                        Яндекс
                        Карты</a>
                    <iframe ref={imageRef} loading={"lazy"} title={"ya_maps"}
                            className={"adaptive__maps" + cn(className, styles.image, {
                                [styles.imageLoaded]: isLoaded
                            })}
                            src={src}
                            width="700" height="476" allowFullScreen={true}
                            style={{position: "relative"}}></iframe>
                </div>
            )}
        </div>
    )
}

//
//                 <img style={style} ref={imageRef} className={cn(className,styles.image, {
//                 [styles.imageLoaded]: isLoaded
//             })} src={src} alt={alt} />