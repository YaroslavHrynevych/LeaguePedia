import TitleChildren from "../TitleChildren/TitleChildren.tsx";
import {Link} from "react-router";
import ChampionChart from "../ChampionChart/ChampionChart.tsx";
import {ChampionFullData} from "../../../types/ChampionFull.ts";
import SplashArt from "../SplashArt/SplashArt.tsx";
import InfoCard from "../../../components/InfoCard/InfoCard.tsx";

type ChampionInfoCardProps = {
    championName: string;
    championData: ChampionFullData
}

const ChampionInfoCard = ({championName,championData} : ChampionInfoCardProps) => {
    return (
        <InfoCard>
            <SplashArt championName={championName} />
            <div className='py-6 px-3 flex flex-col gap-2 bg-main-grey/5 rounded-b-lg'>
                <h3 className='uppercase text-xl font-bold'>{championData?.title}</h3>
                <TitleChildren title={'Classes'} >
                    {championData?.tags.map((tag) => (
                        <Link to={'/champions/tags/'+tag} key={tag} className='py-1 block underline  hover:no-underline'>{tag}</Link>
                    ))}
                </TitleChildren>
                <TitleChildren title={'Resource'} >{championData?.partype}</TitleChildren>
                <TitleChildren title={'Range type'} >{championData.stats.attackrange > 500 ? 'ranged' : 'melee'}</TitleChildren>
                <ChampionChart championData={championData} />
            </div>
        </InfoCard>
    );
};

export default ChampionInfoCard;