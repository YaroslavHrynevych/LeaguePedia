import {createBrowserRouter, createRoutesFromElements, Route} from "react-router";
import Home from "../pages/Home/Home.tsx";
import App from "../App.tsx";
import Error from "../components/Error/Error.tsx";
import Champions from "../pages/Champions/Champions.tsx";
import Items from "../pages/Items/Items.tsx";
import Champion from "../pages/Champion/Champion.tsx";
import ChampionsTags from "../pages/ChampionsTags/ChampionsTags.tsx";
import Item from "../pages/Item/Item.tsx";
import Runes from "../pages/Runes/Runes.tsx";
import rootLoader from "../loaders/rootLoader.ts";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<App/>} errorElement={<Error/>} loader={rootLoader}>
            <Route index element={<Home/>}/>
            <Route path={'/champions'} element={<Champions/>} />
            <Route path={'champions/:champion'} element={<Champion/>} />
            <Route path={'/items'} element={<Items/>} />
            <Route path={'/items/:itemName'} element={<Item/>} />
            <Route path={'champions/tags/:tag'} element={<ChampionsTags/>}/>
            <Route path={'/runes'} element={<Runes/>}/>
        </Route>
    )
);

export default router;