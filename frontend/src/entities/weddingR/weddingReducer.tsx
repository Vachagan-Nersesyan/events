import { createSlice, PayloadAction, current } from '@reduxjs/toolkit'
import { InitialStateType } from './weddingReducerTs.interface'
import { AppStateType } from 'entities/store/redux-store'
import { getAllRestaurants } from './weddingReducerThunk'



const initialState: InitialStateType = {
    loading: true,
    error: null,

    restaurantsArr: [],

    rentedRest: null,
}

export const weddingSlice = createSlice({
    name: 'restaurant',
    initialState,
    reducers: {
        rentRestaurantInfoFunc(state: InitialStateType, action: PayloadAction<{ info: string }>) {
            console.log(action.payload.info)
            let data = state.restaurantsArr.filter((val) => val.name === action.payload.info)
            state.rentedRest = data[0]
            console.log(current(state), 'state.rentedReststate.rentedReststate.rentedReststate.rentedReststate.rentedRest')
        },
    },
    extraReducers:
        (builder) => {
            builder
                .addCase(getAllRestaurants.pending, (state) => {
                    state.loading = true;
                    state.error = null;
                })
                .addCase(getAllRestaurants.fulfilled, (state, action) => {
                    state.loading = false;
                    state.restaurantsArr = action.payload
                })
                .addCase(getAllRestaurants.rejected, (state, action) => {
                    state.loading = false;
                    state.error = action.error.message || 'An error occurred';
                })
        }
})


export const { rentRestaurantInfoFunc } = weddingSlice.actions


export default weddingSlice.reducer
