import RuneTreeCell from "../RuneTreeCell/RuneTreeCell.tsx";
import {Rune} from "../../../types/Runes.ts";

type RuneTreeRowProps = {
    runes: any
};

const RuneTreeRow = ({runes}: RuneTreeRowProps) => {
    // console.log('rune tree row', runes);
    const {runes: runesArr} = runes;
    return (
        <div className="flex gap-2 w-fit mx-auto nth-of-type-[n+2]:[&_img]:w-12 nth-of-type-[n+2]:gap-4">
            {runesArr.map((cell: Rune, index: number) => <RuneTreeCell cell={cell} key={index} />)}
        </div>
    );
};

export default RuneTreeRow;