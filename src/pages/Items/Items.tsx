import {useSelector} from "react-redux";
import type {Items} from "../../types/Items.ts";
import IconLink from "../../components/IconLink/IconLink.tsx";
import {baseUrl} from "../../config/Constants.ts";
import IconsWrapper from "../../components/IconsWrapper/IconsWrapper.tsx";
import ItemsFilter from "./ItemsFilter/ItemsFilter.tsx";
import {useEffect, useState} from "react";
``
const Items = () => {
    const items = useSelector((store: {items: {value: Items}}) => store.items.value)
    const version = useSelector((store: any ) => store.version.version)
    const [data,setData] = useState<Items>(items);
    const [mapOptions,setMapOptions] = useState<{id: string, name: string}[]>([]);
    const maps = useSelector((store: any ) => store.maps.value)


    useEffect(() => {
        setMapOptions([])
        setData(items)
    }, [version]);

    useEffect(() => {
        if(Object.keys(maps).length != 0){
            Object.entries(maps.data).map((map) => {
                let [mapId, mapData] : [mapId: string, mapData: any] = [...map]
                mapOptions.push({id: mapId, name: mapData.MapName});
            })
            const uniqueOptions =[...new Map(mapOptions.map(item => [item.id, item])).values()];
            setMapOptions(uniqueOptions);
        }

    }, [items, maps, version]);

    if((Object.keys(items).length === 0)) return;

    if(data.data != null ){
        return (
            <>
                <ItemsFilter setData={setData} maps={mapOptions}/>
                <IconsWrapper>
                    {Object.entries(data?.data)?.map(([key]) => (
                        <IconLink key={key} link={'/items/'+key} src={`${baseUrl}/cdn/${version}/img/item/${key}.png`} alt={key}/>
                    ))}
                </IconsWrapper>
            </>
        );
    }

};

export default Items;