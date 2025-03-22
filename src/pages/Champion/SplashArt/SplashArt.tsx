import Image from "../../../components/Image/Image.tsx";
import {baseUrl} from "../../../config/Constants.ts";

type SplashArtProps = {
    championName: string;
};

const SplashArt = ({championName}: SplashArtProps) => {
    return (
        <div className='relative'>
            <Image className='w-full object-cover object-top max-h-[75vh] sm:max-h-[85vh] md:max-h-[100%]'
                   src={`${baseUrl}/cdn/img/champion/loading/${championName}_0.jpg`} alt={championName}/>
            <h2 className={`text-2xl z-[1] font-bold uppercase text-center absolute py-6 bottom-0 w-full  before:blur-md 
                         before:block  before:absolute before:left-0 before:bottom-0 before:top-0 before:-z-10 before:w-full before:bg-black/65`}>{championName}</h2>
        </div>
    );
};

export default SplashArt;