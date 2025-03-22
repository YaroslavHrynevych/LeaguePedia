import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import type {ChampionShort} from "../types/ChampionShort.ts";

let items;
if(localStorage.getItem("champions") !== null) {
    items = JSON.parse(localStorage.getItem("champions") || '' ) ;
} else {
    items = {};
}

export type championsStateValue = {
    type: string;
    format: string;
    version: string;
    data: {
        [key: string]: ChampionShort;
    }
}
export interface championsState {
    items: championsStateValue
}

const initialState = {
    items: items,
} as championsState;



export const championsSlice = createSlice({
    name: "champions",
    initialState,
    reducers: {
        addChampions: (state: championsState, action: PayloadAction<championsStateValue>) =>  {
            localStorage.setItem("champions", JSON.stringify(action.payload));
            return {
                ...state,
                items: action.payload
            }
        }
    }
})

export const {addChampions} = championsSlice.actions;