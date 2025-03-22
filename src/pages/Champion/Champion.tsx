import {useParams} from "react-router";
import {useSelector} from "react-redux";
import {useFetch} from "../../hooks/useFetch.ts";
import {baseUrl} from "../../config/Constants.ts";
import Image from "../../components/Image/Image.tsx";
import type {ChampionFull} from "../../types/ChampionFull.ts";
import {Swiper, SwiperSlide} from 'swiper/react';
import '../../../node_modules/swiper/swiper.css';
import {PhotoProvider, PhotoView} from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import ChampionInfoCard from "./ChampionInfoCard/ChampionInfoCard.tsx";
import ChampionStats from "./ChampionStats/ChampionStats.tsx";
import ChampionAbilities from "./ChampionAbilities/ChampionAbilities.tsx";
import {stripTags} from "../../utils/stripTags.ts";
import TwoColumns from "../../components/TwoColumns/TwoColumns.tsx";

const Champion = () => {
    const {champion: championName} = useParams();
    const version = useSelector((store: any) => store.version.version)

    let {
        data: champion,
        isLoading,
    } = useFetch<ChampionFull>(`${baseUrl}/cdn/${version}/data/en_US/champion/${championName}.json`)
    const championData = champion?.data[championName != null ? championName : ''];

    if(championData == null || championName == null) return null;

    return (
        <div>
            {/*TODO add loader*/}
            {isLoading && <p>Loading...</p>}
            {/*CHAMP INFO AND STATS*/}
            <TwoColumns>
                {/*INFO CARD*/}
                <ChampionInfoCard championName={championName} championData={championData}/>
                <div className='flex flex-col gap-2 md:gap-4'>
                    <div>
                        <h2 className='title-med text-main-accent'>Lore</h2>
                        <p>{stripTags(championData?.lore)}</p>
                    </div>
                    <ChampionStats championStats={championData.stats} resource={championData.partype}/>
                    {championData.allytips.length > 0 && <div>
                        <h2 className='title-med text-main-accent'>Tips how to play as {championName}</h2>
                        <ul className='ml-4 my-2 list-decimal '>
                            {championData?.allytips.map((tip) => <li key={tip}>{tip}</li>)}
                        </ul>
                    </div>}
                    {championData.enemytips.length > 0 &&<div>
                        <h2 className='title-med text-main-accent'>Tips how to play against {championName}</h2>
                        <ul className='ml-4 my-2 list-decimal '>
                            {championData?.enemytips.map((tip) => <li  key={tip}>{tip}</li>)}
                        </ul>
                    </div>}
                    <ChampionAbilities championData={championData} />
                    <div className='max-w-full'>
                        <h2 className='title-med text-main-accent mb-2'>{championName} skins</h2>
                        <Swiper slidesPerView={"auto"} spaceBetween={10}>
                            {championData.skins.map((skin, index) => {
                                if(index === 0){
                                    return ;
                                }
                                return <SwiperSlide key={index} className='md:max-w-[33.3333%]'>
                                    <PhotoProvider>
                                        <PhotoView src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championName}_${skin.num}.jpg`}>
                                            <Image
                                                className='rounded-lg'
                                                /*loading = {index > 4 ?  'lazy' : "eager"}*/
                                                src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championName}_${skin.num}.jpg`}/>
                                        </PhotoView>
                                    </PhotoProvider>
                                </SwiperSlide>
                            })}
                        </Swiper>
                    </div>
                </div>
            </TwoColumns>
        </div>
    );
};

export default Champion;