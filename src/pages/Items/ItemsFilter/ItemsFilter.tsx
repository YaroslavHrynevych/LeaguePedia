import type {Items} from "../../../types/Items.ts";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";


type ItemsFilterProps = {
    setData: React.Dispatch<React.SetStateAction<Items>>;
    maps: { id: string, name: string }[]
};

const ItemsFilter = ({setData, maps}: ItemsFilterProps) => {
    const [query, setQuery] = useState<string>("");
    const [currentMap, setCurrentMap] = useState<string>(maps[0] != null ? maps[0].id : '11')
    const [isPurchasable, setIsPurchasable] = useState('yes');
    const items = useSelector((store: {items: {value: Items}}) => store.items.value)

    useEffect(() => {
        let filteredData = Object.entries(items.data)
            .filter(([, value] : any) => currentMap == "" ? true : value.maps[currentMap])
            .filter(([, value] : any) => value.name.toLowerCase().includes(query.toLowerCase().trim()))
            .filter(([, value] : any) =>  {
            switch (isPurchasable.toLowerCase()) {
                case "":
                    return true
                case "yes":
                    return value.gold.purchasable;
                case "no":
                    return !value.gold.purchasable;
            }
        });

        setData({...items, data: Object.fromEntries(filteredData)});
    }, [query, currentMap, items, isPurchasable]);

    return (
        <div className='mt-2 mb-8 flex justify-center md:justify-between flex-wrap gap-4'>
            <input className='bg-transparent border-secondary-accent border-b focus:outline-0 focus:border-b-2'
                   placeholder='Enter item name' type="text" value={query}
                   onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                       setQuery(e.target.value)
                   }}/>
            <div className='flex flex-wrap gap-6 items-center'>
                <div className='flex items-center'>
                    <h3 className=''>
                        Purchasable:
                    </h3>
                    <select onChange={e => {
                        setIsPurchasable(e.target.value)
                    }} name="is-purschasable" id="is-purschasable">
                        <option value="">All</option>
                        <option selected value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <div className='flex items-center'>
                    <h3>
                        Availability
                    </h3>
                    <select onChange={e => {
                        setCurrentMap(e.target.value)
                    }} name="maps" id="maps">
                        <option value="">All</option>
                        {maps.map((map, index) => {
                            if (map.name != "") {
                                return <option key={index} selected={index == 0} value={map.id}>{map.name}</option>
                            }
                        })}
                    </select>
                </div>
            </div>


        </div>
    );
};

export default ItemsFilter;