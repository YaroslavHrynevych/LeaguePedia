import {useSelector} from "react-redux";
import IconLink from "../../components/IconLink/IconLink.tsx";
import {baseUrl} from "../../config/Constants.ts";
import IconsWrapper from "../../components/IconsWrapper/IconsWrapper.tsx";
import {useEffect, useState} from "react";
import {championsStateValue} from "../../state/ChampionsSlice.ts";
import ChampionsFilters from "./ChampionsFilters/ChampionsFilters.tsx";

const Champions = () => {
    const version = useSelector((store: any) => store.version.version)
    const champions = useSelector((store: any) => store.champions.items)

    if (Object.keys(champions).length === 0) return;

    const [data, setData] = useState<championsStateValue>(champions);
    let championsArr = Object.entries(data?.data);
    const [tags,setTags] = useState<string[]>([]);


    useEffect(() => {
        setTags([]);
    }, [version]);

    useEffect(() => {
        championsArr.forEach(([, value]) => {
            [...value.tags].forEach(tag => {
                if (!tags.includes(tag)){
                    tags.push(tag);
                }
            })
        })

        setTags(tags);
    }, [champions]);


    if(championsArr.length == 0){
        return null
    }


    return (
        <>
            <ChampionsFilters setData={setData} tags={tags}/>
            <IconsWrapper>
                {championsArr.map(([key]) => {
                    return <IconLink key={key}  link={'/champions/' + key}
                                     src={`${baseUrl}/cdn/${version}/img/champion/${key}.png`}
                                     alt={key}/>
                })}
            </IconsWrapper>
        </>

    );

};

export default Champions;