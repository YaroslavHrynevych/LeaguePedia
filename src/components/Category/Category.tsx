import Image from "../Image/Image.tsx";
import {Link} from "react-router";

type CategoryProps = {
    title: string;
    imgUrl: string
    link: string;
}

const Category = ({title,imgUrl, link} : CategoryProps) => {
    return (
        <div className='relative z-[1] aspect-ratio-[9/16] flex flex-col items-center justify-center min-h-[15rem] overflow-hidden transition-all group rounded-sm'>
            <Link to={link} >
                <h2 className='uppercase text-xl'>{title}</h2>
                <Image className='transition-all brightness-[.2] absolute top-0 left-0 -z-[1] h-full w-full object-cover group-hover:brightness-[.35] group-hover:scale-110' src={imgUrl} alt={title} />
            </Link>

        </div>
    );
};

export default Category;