import {configureStore} from "@reduxjs/toolkit";
import {championsSlice} from "./ChampionsSlice.ts";
import {versionSlice} from "./VersionSlice.ts";
import {itemsSlice} from "./ItemsSlice.ts";
import {mapsSlice} from "./MapsSlice.ts";
import {runesSlice} from "./RunesSlice.ts";


export const store = configureStore(
    {
        reducer: {
            champions: championsSlice.reducer,
            version: versionSlice.reducer,
            items: itemsSlice.reducer,
            maps: mapsSlice.reducer,
            runes: runesSlice.reducer,
        }
    }
)