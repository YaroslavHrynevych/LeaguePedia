import {Link} from "react-router";
import VersionSwitch from "../VersionSwitch/VersionSwitch.tsx";

const Header = () => {
    return (
        <header className='flex flex-wrap justify-center md:!justify-between  gap-2 lg:gap-0 items-center w-full py-8 mb-4 border-b border-secondary-accent/20'>
            <div className='flex gap-4 [&_*]:transition-all [&_*]:hover:text-main-accent uppercase font-bold'>
                <Link to={'/champions'} >
                    Champions
                </Link>
                <Link to={'/items'} >
                    Items
                </Link>
                <Link to={'/runes'} >
                    Runes
                </Link>
            </div>
            <Link to={'/'} className='-order-1 basis-full text-center md:basis-[fit-content] md:order-[unset] uppercase text-2xl font-extrabold hover:text-secondary-accent transition-all'>
                <h1>
                    League Pedia
                </h1>
            </Link>
            <VersionSwitch />
        </header>
    );
};

export default Header;