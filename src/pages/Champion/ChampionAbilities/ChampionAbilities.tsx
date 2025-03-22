import {ChampionFullData} from "../../../types/ChampionFull.ts";
import Image from "../../../components/Image/Image.tsx";
import {baseUrl} from "../../../config/Constants.ts";
import {useSelector} from "react-redux";
import {stripTags} from "../../../utils/stripTags.ts";

type ChampionAbilitiesProps = {
    championData: ChampionFullData | undefined;
};

const ChampionAbilities = ({championData}: ChampionAbilitiesProps) => {
    const version = useSelector((store: any) => store.version.version)
    if (championData == null) return null;

    return (
        <section>
            <h2 className='title-med text-main-accent mb-4'>Champion Abilities</h2>
            <div className='grid gap-4'>
                <div className='grid gap-2 shadow-2xs bg-main-grey/5 rounded-lg p-2 relative'>
                    <h3 className='text-xl font-bold text-secondary-accent border-b-2 border-secondary-accent/20 pb-4 mb-4'>{championData?.passive.name}</h3>
                    <div className='grid gap-2 grid-cols-[2fr_7fr] sm:grid-cols-[1fr_9fr] md:grid-cols-[1fr_12fr] '>
                        <h4 className='text-secondary-accent opacity-25 italic text-3xl font-bold absolute right-4 top-2'>P</h4>
                        <Image src={`${baseUrl}/cdn/${version}/img/passive/${championData.passive.image.full}`}
                               alt='passive ability'/>
                        <p className='pr-12'>{stripTags(championData.passive.description)}</p>
                    </div>
                </div>
                {championData.spells.map((spell, index) => {
                    return (
                        <div key={index} className='grid gap-2 shadow-2xs bg-main-grey/5 rounded-lg p-2 relative'>
                            <div className='flex justify-between items-center pr-12 border-b-2 border-secondary-accent/20 pb-4 mb-4 lg:pr-16'>
                                <h3 className='text-xl font-bold text-secondary-accent'>{spell.name}</h3>
                                <section className='flex gap-4 items-center'>
                                    <div className='flex items-center gap-2 font-bold'>
                                        <h4 className='title-sm text-secondary-accent uppercase'>
                                            Cooldown:
                                        </h4>
                                        <div>{spell.cooldownBurn}</div>
                                    </div>
                                    {spell.costBurn != '0' && <div className='flex items-center gap-2 font-bold'>
                                        <h4 className='title-sm text-secondary-accent uppercase'>
                                            Cost:
                                        </h4>
                                         <div>{spell.costBurn}</div>
                                    </div>}
                                    <div className='flex items-center gap-2 font-bold'>
                                        <h4 className='title-sm text-secondary-accent uppercase'>
                                            Range:
                                        </h4>
                                        <div>{spell.range[0]}</div>
                                    </div>
                                </section>
                            </div>
                            <div key={index} className='grid gap-2 grid-cols-[2fr_7fr] sm:grid-cols-[1fr_9fr] md:grid-cols-[1fr_12fr]'>
                                <h4 className='text-secondary-accent opacity-25 italic text-3xl font-bold absolute right-4 top-2'>
                                    {index === 0 && "Q" }
                                    {index === 1 && "W" }
                                    {index === 2 && "E" }
                                    {index === 3 && "R" }
                                </h4>
                                <Image src={`${baseUrl}/cdn/${version}/img/spell/${spell.image.full}`}
                                       alt='passive ability'/>
                                <p className='pr-12 lg:pr-16'>{stripTags(spell.description)}</p>
                            </div>
                        </div>
                    )
                })}
            </div>

        </section>
    );
};

export default ChampionAbilities;