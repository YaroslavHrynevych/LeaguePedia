import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import type {Maps} from "../types/Maps.ts";


export interface mapsState {
    value: Maps
}

const initialState = {
    value: {},
} as mapsState;


export const mapsSlice = createSlice({
    name: "maps",
    initialState,
    reducers: {
        addMaps: (state: mapsState, action: PayloadAction<Maps>) => (
            {
                ...state,
                value: action.payload,
            }
        )
    }
})

export const {addMaps} = mapsSlice.actions;