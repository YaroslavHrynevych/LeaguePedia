import {championsStateValue} from "../../../state/ChampionsSlice.ts";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";

type ChampionsFiltersProps = {
    setData: React.Dispatch<React.SetStateAction<championsStateValue>>;
    tags: string[];
};

const ChampionsFilters = ({setData, tags}: ChampionsFiltersProps) => {
    const champions = useSelector((store: any) => store.champions.items)
    const version = useSelector((store: any) => store.version.version)
    const [query, setQuery] = useState<string>("");
    const [tag, setTag] = useState<string>("");

    useEffect(() => {
        let filteredData = Object.entries(champions.data).filter(([, value] : any) => tag == "" ? true : value.tags.includes(tag) ?? ''
         ).filter(([, value] : any) => value.name.toLowerCase().includes(query.toLowerCase())) ?? {};

        setData({...champions, data: Object.fromEntries(filteredData)});
    }, [query, tag, champions,version]);

    return (
        <div className='mt-2 mb-8 flex justify-center md:justify-between flex-wrap gap-4'>
            <input className='bg-transparent border-secondary-accent border-b focus:outline-0 focus:border-b-2'
                   placeholder='Enter champion name' type="text" value={query}
                   onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                       setQuery(e.target.value)
                   }}/>
            <div className='flex flex-wrap gap-6 items-center'>
                <h3>
                    Role:
                </h3>
                <select name="champion-tags" id="champion-tags" onChange={e => setTag(e.target.value)}>
                    <option value=''>All</option>
                    {tags.map((tag) => (
                        <option key={tag} value={tag}>{tag}</option>
                    ))}
                </select>
            </div>

        </div>
    );
};

export default ChampionsFilters;