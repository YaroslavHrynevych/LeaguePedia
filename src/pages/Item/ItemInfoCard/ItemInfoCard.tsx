import InfoCard from "../../../components/InfoCard/InfoCard.tsx";
import {singleItem} from "../../../types/Items.ts";
import {useSelector} from "react-redux";
import processCustomTags from '../../../utils/proceesCustomTags.ts';
import parse from 'html-react-parser';
import {stripTags} from "../../../utils/stripTags.ts";

type ItemInfoCardProps = {
    item: singleItem
    itemId: string
};

const ItemInfoCard = ({item, itemId}: ItemInfoCardProps) => {
    const version = useSelector((store: any) => store.version.version)
    const maps = useSelector((store: any) => store.maps.value)
    const mapsArr = Object.entries(maps.data);

    const getMapById = (id: string)  : any => {
        return mapsArr.find((el:any) => el[1].MapId === id);
    }

    return (
        <InfoCard className='p-4 flex flex-col gap-2'>
            <img className='mx-auto border-secondary-accent/50 border-1'
                 src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/item/${itemId}.png`} alt={item.name}/>
            <h2 className='title-med text-center text-main-accent uppercase'>{stripTags(item.name)}</h2>
            <div className=''>
                {parse(processCustomTags(item.description))}
            </div>
            {(item.gold.base != 0) && <div className='grid grid-cols-[1fr_3fr] gap-2'>
                <h3>Price:</h3>
                <div>
                    <div className='flex gap-2'>
                        <h4>Cost:</h4>
                        <span className='text-main-accent'>{item.gold.base}g</span>
                    </div>
                    <div className='flex gap-2'>
                        <h4>Sell:</h4>
                        <span className='text-main-accent'>{item.gold.sell}g</span>
                    </div>
                </div>
            </div>}
            {item.consumed && <p className='text-main-accent'>Consumable</p>}
            {item.maps && <div className='grid grid-cols-[1fr_3fr] gap-2'>
                <h3>Available on:</h3>
                <div>
                    {Object.entries(item.maps).map((el: any) => {
                        if(el[1] && el[0] != null){
                            return <p className='text-secondary-accent'>{getMapById(el[0])[1].MapName}</p>
                        }
                    })}
                </div>
            </div>}
            {(item.tags.length > 0) && <div className='grid grid-cols-[1fr_3fr] gap-2'>
                <h3>Tags:</h3>
                <div>
                    {item.tags.map((tag, index) => <p className='text-main-accent' key={index}>{tag}</p>)}
                </div>
            </div>}
        </InfoCard>
    );
};

export default ItemInfoCard;