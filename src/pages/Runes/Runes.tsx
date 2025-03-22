import {useSelector} from "react-redux";
import {baseUrl} from "../../config/Constants.ts";
import RuneTreeComponent from "./RuneTree/RuneTree.tsx"
import {RuneTree} from "../../types/Runes.ts";

const Runes = () => {
    const runes = useSelector((store: {runes: {value: any}}) => store.runes.value)

    if (Object.keys(runes).length === 0) return;

    return (
        <div className='py-4 flex flex-wrap gap-4 justify-center pb-[30vh]'>
            {runes?.map((rune: RuneTree, index: number) : any => {
                return (<div className='p-4 border-1 border-secondary-accent/10 rounded-sm w-full md:w-[32%] flex flex-col items-center gap-2 md:gap-4' key={index}>
                    <img src={`${baseUrl}/cdn/img/${rune.icon}`} alt={rune.name} />
                    <h2 className='title-med text-main-accent mb-4'>{rune.name}</h2>
                    <RuneTreeComponent slots={rune.slots} />
                </div>)})}
        </div>
    );
};

export default Runes;