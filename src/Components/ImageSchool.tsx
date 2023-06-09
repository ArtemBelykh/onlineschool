import { useState, useEffect } from "react";

export const ImageSchool = ({ src, placeholderSrc, ...props }: any) => {
    const [imageSrc, setImageSrc] = useState(placeholderSrc);

    const cn = `progressive ${
        imageSrc === placeholderSrc ? "loading" : "loaded"
    }`;

    useEffect(() => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
            setImageSrc(src);
        };
    }, [src]);

    return (
        <img
            className={cn}
            src={imageSrc}
            alt={props.alt || ""}
            {...props}
            loading={"lazy"}
            fetchpriority="high"
        />
    );
};
