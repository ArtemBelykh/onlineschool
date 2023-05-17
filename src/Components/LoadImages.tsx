import React from 'react'
import cn from 'classnames'
import useOnScreen from "./on-screen";
import styles from "../loadImge.module.css";

export interface ILoadableImage {
    src: string;
    alt?: string;
    onLoad?(): void;
    style: React.CSSProperties,
    className?: string
}
export const LoadImages = (props: ILoadableImage) => {
    const { src, alt = '', onLoad = () => {}, style, className } = props
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
            {(isVisible || isLoaded) && (<img style={style} ref={imageRef} className={cn(className,styles.image, {
                [styles.imageLoaded]: isLoaded
            })} src={src} alt={alt} />)}
        </div>
    )
}