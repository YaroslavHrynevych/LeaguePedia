import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RuneTree} from "../types/Runes.ts";


export interface runesState {
    value: RuneTree
}

const initialState = {
    value: {},
} as runesState;


export const runesSlice = createSlice({
    name: "runes",
    initialState,
    reducers: {
        addRunes: (state: runesState, action: PayloadAction<RuneTree>) => {
            state.value = action.payload;
        }
    }
})

export const {addRunes} = runesSlice.actions;