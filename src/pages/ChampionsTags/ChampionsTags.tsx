import {useSelector} from "react-redux";
import {championsState} from "../../state/ChampionsSlice.ts";
import IconsWrapper from "../../components/IconsWrapper/IconsWrapper.tsx";
import IconLink from "../../components/IconLink/IconLink.tsx";
import {baseUrl} from "../../config/Constants.ts";
import {useParams} from "react-router";

const ChampionsTags = () => {
    const champions = useSelector((store: {champions: championsState}) => store.champions.items)
    const version = useSelector((store: any ) => store.version.version)
    const {tag} = useParams();

    if(champions.data != null && tag != null){
        return (
            <>
                <h2 className='title-med mb-6 text-center font-bold uppercase text-main-accent'>{tag} Champions</h2>
                <IconsWrapper>
                    {Object.entries(champions.data).map(item => {
                        const key = item[0];
                        const data = item[1];
                        if(data.tags.includes(tag)){
                            return <IconLink link={'/champions/'+key} src={`${baseUrl}/cdn/${version}/img/champion/${key}.png`} alt={key}/>;
                        }
                    })}
                </IconsWrapper>
            </>
        );
    }
};

export default ChampionsTags;