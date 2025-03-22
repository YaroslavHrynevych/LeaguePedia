import {Link} from "react-router";
import {singleItem} from "../../../types/Items.ts";
import {useSelector} from "react-redux";

type ItemBuildsIntoProps = {
    item: singleItem
};

const ItemBuildsInto = ({item}: ItemBuildsIntoProps) => {
    const version = useSelector((store: any ) => store.version.version)


    return (
        item.into && <div className='flex flex-col gap-2'>
                <h2 className='title-med text-main-accent'>Builds into:</h2>
                <div className='grid gap-2 grid-cols-2 md:grid-cols-12'>
                    {item.into.map((item: string) => <Link key={item} to={`/items/${item}`} >
                        <img className='mx-auto border-secondary-accent/50 border-1' src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/item/${item}.png`} alt=""/>
                    </Link>)}
                </div>
            </div>
    );
};

export default ItemBuildsInto;