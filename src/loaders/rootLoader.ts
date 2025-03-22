import {baseUrl} from "../config/Constants.ts";
import {setCurrentVersion, setVersions} from "../state/VersionSlice.ts";
import {addChampions} from "../state/ChampionsSlice.ts";
import {addItems} from "../state/ItemsSlice.ts";
import {addMaps} from "../state/MapsSlice.ts";
import {addRunes} from "../state/RunesSlice.ts";
import {store} from "../state/store.ts";

export default function rootLoader () {

    fetch(baseUrl + "/api/versions.json").then(res => res.json()).then(versions => {
        const version = versions[0];

        store.dispatch(setVersions(versions));
        store.dispatch(setCurrentVersion(version));

        fetch(`${baseUrl}/cdn/${version}/data/en_US/champion.json`).then(res => res.json()).then(data => store.dispatch(addChampions(data)));

        fetch(`${baseUrl}/cdn/${version}/data/en_US/item.json`).then(res => res.json()).then(data =>  store.dispatch(addItems(data)))

        fetch(`${baseUrl}/cdn/${version}/data/en_US/map.json`).then(res => res.json()).then(data =>  store.dispatch(addMaps(data)))

        fetch(`${baseUrl}/cdn/${version}/data/en_US/runesReforged.json`).then(res => res.json()).then(data =>  store.dispatch(addRunes(data)))
    })

    return new Promise<void>(resolve => {resolve()});

}