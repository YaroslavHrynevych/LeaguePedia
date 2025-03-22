import {useLocation, useParams} from "react-router";
import {useSelector} from "react-redux";
import type {Items} from "../../types/Items.ts";
import {useEffect, useState} from "react";
import TwoColumns from "../../components/TwoColumns/TwoColumns.tsx";
import ItemInfoCard from "./ItemInfoCard/ItemInfoCard.tsx";
import ItemBuildsFrom from "./ItemBuildsFrom/ItemBuildsFrom.tsx";
import ItemBuildsInto from "./ItemBuildsInto/ItemBuildsInto.tsx";
import {stripTags} from "../../utils/stripTags.ts";



const Item = () => {
    const {itemName} = useParams();
    const version = useSelector((store: any ) => store.version.version)
    const items = useSelector((store: {items: {value: Items}}) => store.items.value)
    const itemsArr = Object.entries(items?.data);
    const [item, setItem] = useState<any>();
    const location = useLocation();

    useEffect(() => {
        const filteredData = itemsArr.find(([key]) => key === itemName);

        if(filteredData != null) setItem(filteredData[1])

    }, [version, location]);


    if (item == null || itemName == null) return;

    return (
        <div>
            <TwoColumns>
                <div className='flex flex-col gap-2 md:gap-4'>
                    {item.plaintext &&  <div className="flex flex-col gap-2">
                        <h2 className='title-med text-main-accent'>Description</h2>
                        <p>{stripTags(item.plaintext)}</p>
                    </div>}
                    <ItemBuildsInto item={item} />
                    <ItemBuildsFrom item={item} itemsArr={itemsArr} itemName={itemName} />
                </div>
                <ItemInfoCard item={item} itemId={itemName} />
            </TwoColumns>
        </div>
    );
};

export default Item;