import RuneTreeRow from "../RuneTreeRow/RuneTreeRow.tsx";
import {Rune} from "../../../types/Runes.ts";

type RuneTreeProps = {
    slots: any
};

const RuneTree = ({slots}: RuneTreeProps) => {
    // console.log(slots);

    return (
        <div className='flex flex-col gap-4'>
            {slots.map((row: Rune, index:number) => <RuneTreeRow runes={row} key={index} />)}
        </div>
    );
};

export default RuneTree;