import {Link} from "react-router";

type IconLinkProps = {
    link: string;
    src: string
    alt?: string
};

const IconLink = ({link,src,alt}: IconLinkProps) => {
    return (
        <Link to={link} className='w-full group '>
            <img loading='eager' className='transition-all w-full group-hover:scale-[1.125] rounded-sm' src={src} alt={alt??"icon"} title={alt??"champion"}/>
        </Link>
    );
};

export default IconLink;