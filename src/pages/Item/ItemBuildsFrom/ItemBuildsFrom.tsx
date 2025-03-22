import {singleItem} from "../../../types/Items.ts";
import {Link} from "react-router";
import {useSelector} from "react-redux";

type ItemBuildsFromProps = {
    item: singleItem
    itemsArr: any
    itemName: string
};

const ItemBuildsFrom = ({item, itemsArr, itemName}: ItemBuildsFromProps) => {
    const version = useSelector((store: any ) => store.version.version)

    const buildsFrom = (treeItem: string) => {

        const filteredData = itemsArr.find(([key]: string) => key === treeItem);

        if(filteredData != null) return filteredData[1].from;
    }


    return (
        item.from && <div className='flex flex-col gap-4 max-w-max w-full'>
                <h2 className='title-med text-main-accent'>From:</h2>
                <div className='flex flex-col  gap-4 flex-wrap '>
                    <img className='object-contain mx-auto border-secondary-accent/50 border-1' src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/item/${itemName}.png`} alt={item.name}/>
                    <div className='flex gap-4 md:gap-8 justify-between'>
                        {item.from.map((mapItem: string, index: number) => {
                            // Переписати з рекурсією
                            const bf = buildsFrom(mapItem);
                            return <div key={index}  className='flex flex-col gap-2'>
                                <Link key={mapItem} to={`/items/${mapItem}`} >
                                    <img className='mx-auto border-secondary-accent/50 border-1' src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/item/${mapItem}.png`} alt={item.name}/>
                                </Link>
                                <div className='flex gap-4 md:gap-8 justify-between'>
                                    {bf && bf.map((bf : string,index: number) => <Link key={index} to={`/items/${bf}`} >
                                        <img className='mx-auto border-secondary-accent/50 border-1' src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/item/${bf}.png`} alt={bf}/>
                                    </Link>)}
                                </div>
                            </div>
                        })}
                    </div>

                </div>
            </div>
    );
};

export default ItemBuildsFrom;