import {Outlet} from "react-router";
import Header from "./components/Header/Header.tsx";
import Footer from "./components/Footer/Footer.tsx";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {baseUrl} from "./config/Constants.ts";
import {addChampions} from "./state/ChampionsSlice.ts";
import {addItems} from "./state/ItemsSlice.ts";
import {addMaps} from "./state/MapsSlice.ts";
import {addRunes} from "./state/RunesSlice.ts";

function App() {
    const dispatch = useDispatch();
    const version = useSelector((store: any) => store.version.version)



    useEffect(() => {

        fetch(`${baseUrl}/cdn/${version}/data/en_US/champion.json`).then(res => res.json()).then(data => dispatch(addChampions(data)));

        fetch(`${baseUrl}/cdn/${version}/data/en_US/item.json`).then(res => res.json()).then(data =>  dispatch(addItems(data)))

        fetch(`${baseUrl}/cdn/${version}/data/en_US/map.json`).then(res => res.json()).then(data =>  dispatch(addMaps(data)))

        fetch(`${baseUrl}/cdn/${version}/data/en_US/runesReforged.json`).then(res => res.json()).then(data =>  dispatch(addRunes(data)))
    }, [version]);

    return (
        <div className='min-h-screen flex flex-col  app-container'>
            <Header/>
            <main className='grow h-full'>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    )
}

export default App
