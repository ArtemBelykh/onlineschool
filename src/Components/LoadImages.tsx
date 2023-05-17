import React from 'react'
import cn from 'classnames'
import useOnScreen from "./on-screen";
import styles from "../loadImge.module.css";

export interface ILoadableImage {
    src: string;
    alt?: string;
    onLoad?(): void;
    style: React.CSSProperties,
    classList?: string
}
export const LoadImages = (props: ILoadableImage) => {
    const { src, alt = '', onLoad = () => {}, style, classList } = props
    const [isLoaded, setIsLoaded] = React.useState(false)
    const imageRef = React.useRef<HTMLImageElement | null>(null)
    const containerRef = React.useRef<HTMLDivElement | null>(null)
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
            {(isVisible || isLoaded) && (<img style={style} ref={imageRef} className={cn(styles.image, {
                [styles.imageLoaded]: isLoaded
            }, classList)} src={src} alt={alt} />)}
        </div>
    )
}