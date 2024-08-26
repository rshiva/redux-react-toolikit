import { createSlice } from '@reduxjs/toolkit'
import {ordered as cakeOrdered} from "../cake/cakeSlice"

const initialState={
    numOfIcecream: 30
}

const icecreamSlice = createSlice({
    name: "icecream",
    initialState,
    reducers:{
        ordered: (state) => {
            state.numOfIcecream--
        },
        restocked: (state, actions) =>{
            state.numOfIcecream += actions.payload
        },
        // whenever a cake is order an icecream is free
    },
    extraReducers: (builder) =>{
        builder.addCase(cakeOrdered, (state, action) =>{
            state.numOfIcecream--
        })
    },   
})

export default icecreamSlice.reducer
export const { ordered, restocked } = icecreamSlice.actions