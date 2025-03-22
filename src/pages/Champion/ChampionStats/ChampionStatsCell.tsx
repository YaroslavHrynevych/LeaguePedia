import {ReactNode} from "react";

type ChampionStatsCellProps = {
    title: string;
    children: ReactNode
};

const ChampionStatsCell = ({title, children}: ChampionStatsCellProps) => {
    return (
        <div className='text-center [&_*]:p-1'>
            <h3 className='text-main-accent/80'>{title}</h3>
            {children}
        </div>
    );
};

export default ChampionStatsCell;