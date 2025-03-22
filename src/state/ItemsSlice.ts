import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import type {Items} from "../types/Items.ts";


export interface itemsState {
    value: Items
}

const initialState = {
    value: {},
} as itemsState;


export const itemsSlice = createSlice({
    name: "champions",
    initialState,
    reducers: {
        addItems: (state: itemsState, action: PayloadAction<Items>) => {
            state.value = action.payload;
        }
    }
})

export const {addItems} = itemsSlice.actions;