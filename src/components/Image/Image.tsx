import {noImage} from "../../config/Constants.ts";

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement>{}

const Image = ({...props}: ImageProps) => {
    
    return (
        <img onError={(e)  => {
            const target = e.target as HTMLImageElement;
            target.src = noImage;
        }} {...props} />
    );
};

export default Image;