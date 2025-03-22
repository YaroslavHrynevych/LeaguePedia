import Category from "../../components/Category/Category.tsx";
import {getRandomKey} from "../../utils/getRandomObjKey.ts";
import {baseUrl} from "../../config/Constants.ts";
import {useSelector} from "react-redux";
import {championsState} from "../../state/ChampionsSlice.ts";

type HomeProps = {

};

const Home = ({}: HomeProps) => {
    const champions = useSelector((state: {champions: championsState }) => state.champions.items);

    if(champions.data != null){
        const randomChampion = champions.data[`${getRandomKey(champions?.data)}`];

        return (
            <div>
                {/*CATEGORIES*/}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                    <Category link={'/champions'} title={'Champions'} imgUrl={`${baseUrl}/cdn/img/champion/splash/${randomChampion.name}_0.jpg`}/>
                    <Category title={'Items'} imgUrl={'/images/Shopkeeper.jpg'} link={'/items'} />
                    <Category title={'Runes'} imgUrl={'/images/Runes.png'} link={'/runes'} />
                </div>
            </div>
        );
    }
};

export default Home;