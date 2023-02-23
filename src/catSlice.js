import { createSlice } from "@reduxjs/toolkit"
export const catSlice = createSlice({
    name : 'cats',
    initialState : {
        cats : [],
        isLoading : false
    },
    reducers : {
        getCatsFetch: (state) =>{
            state.isLoading = true
        },
        getCatsSuccess : (state,action) =>{
            state.cats = action.payload
            state.isLoading = false
        },
        getCatsFailure : (state) =>{
            state.isLoading = false
        },
        seeMoreFetch:(state)=>{
            state.isLoading = true
        },
        seeMoreSuccess : (state,action)=>{
            state.cats = action.payload
            state.isLoading = false
        },
        seeMoreFailure : (state) =>{
            state.isLoading = false
        }
    }
})
