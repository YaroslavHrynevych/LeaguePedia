import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState = {
    version: '',
    versions: [],
};


export const versionSlice = createSlice({
    name: "version",
    initialState,
    reducers: {
        setCurrentVersion: (state, action: PayloadAction<string>) => ({
            ...state,
            version: action.payload,

        }),
        setVersions: (state, action) => ({
            ...state,
            versions: action.payload,
        })
    }
})

export const {setCurrentVersion, setVersions} = versionSlice.actions;