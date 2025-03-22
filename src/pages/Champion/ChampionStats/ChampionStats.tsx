import {ChampionFullStats} from "../../../types/ChampionFull.ts";
import {useState} from "react";
import ChampionStatsCell from "./ChampionStatsCell.tsx";

type ChampionStatsProps = {
    championStats: ChampionFullStats;
    resource: string;
};

const ChampionStats = ({championStats, resource}: ChampionStatsProps) => {
    const [level, setLevel] = useState<number>(0);
    let levels = [];

    for(let i = 1; i <= 18; i++){
        levels.push(<option key={i} value={i}>{i}</option>);
    }

    return (
        <div>
            <div className='flex items-center gap-4'>
                <h2 className='title-med text-main-accent mb-2'>Champion Stats</h2>
                <div className='flex items-center'>
                    <h3 className='title-sm'>Level:</h3>
                    <select name="level" id="level" onChange={e => {
                        setLevel(+e.target.value);
                    }}>
                        {levels}
                    </select>
            </div>
        </div>
    <div className='grid grid-cols-2 [&_*]:border-1 [&_*]:border-main-grey/20 lg:max-w-[60%]'>
        <ChampionStatsCell title={'Health'}>
            <p>{championStats.hp + (championStats.hpperlevel * level)}</p>
        </ChampionStatsCell>
        <ChampionStatsCell title={resource !== "None" ? resource : "Resource"}>
            <p>{resource !== "None" ? championStats.mp + (championStats.mpperlevel * level) : "N/A"}</p>
        </ChampionStatsCell>
        <ChampionStatsCell title={'Health regen (per 5s)'}>
            <p>{(+championStats.hpregen + +(championStats.hpregenperlevel * level)).toFixed(0)}</p>
        </ChampionStatsCell>
        <ChampionStatsCell title={'Resource regen (per 5s)'}>
            <p>{resource !== "None" ? (+championStats.mpregen + +(championStats.mpregenperlevel * level)).toFixed(0) : "N/A"}</p>
        </ChampionStatsCell>
        <ChampionStatsCell title={'Armor'}>
            <p>{(+championStats.armor + +(championStats.armorperlevel * level)).toFixed(0)}</p>
        </ChampionStatsCell>
        <ChampionStatsCell title={'Attack damage'}>
            <p>{championStats.attackdamage + (championStats.attackdamageperlevel * level)}</p>
        </ChampionStatsCell>
        <ChampionStatsCell title={'Magic resist'}>
            <p>{(+championStats.spellblock + +(championStats.spellblockperlevel * level)).toFixed(0)}</p>
        </ChampionStatsCell>
        <ChampionStatsCell title={'Move Speed'}>
            <p>{championStats.movespeed}</p>
        </ChampionStatsCell>
    </div>
</div>
)
    ;
};

export default ChampionStats;