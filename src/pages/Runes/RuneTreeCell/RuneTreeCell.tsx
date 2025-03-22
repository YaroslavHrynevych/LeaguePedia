import {Rune} from "../../../types/Runes.ts";
import {baseUrl} from "../../../config/Constants.ts";
import processCustomTags from "../../../utils/proceesCustomTags.ts"
import parse from "html-react-parser";
import {useEffect, useRef} from "react";

type RuneTreeCellProps = {
    cell: Rune
};

const RuneTreeCell = ({cell: rune}: RuneTreeCellProps) => {
    const parentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
    }, []);

    function handleClickOutside(event: any) {
        if (parentRef.current && !parentRef.current.contains(event.target)) {
            parentRef?.current?.classList.remove('active');
        }
    }

    return (
        <div ref={parentRef} className='relative group'
             onClick={() => parentRef.current != null ? parentRef.current.classList.toggle('active') : ''}>
            <img className='w-18' src={`${baseUrl}/cdn/img/${rune.icon}`} alt={rune.name}/>
            <div
                className='-translate-x-[25%] lg:-translate-x-[50%] lg:left-[50%] w-[55vw] md:w-sm lg:group-hover:opacity-100 absolute hidden opacity-0 z-10 lg:group-hover:block bg-main-black/90 p-2 border-1 border-secondary-accent/20 group-[.active]:opacity-100 group-[.active]:block max-h-[50vh] overflow-y-auto lg:max-h-[unset]'>
                {parse(processCustomTags(rune.longDesc))}
            </div>
        </div>
    );
};

export default RuneTreeCell;