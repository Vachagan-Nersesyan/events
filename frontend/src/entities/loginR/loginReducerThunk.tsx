import { createAsyncThunk } from "@reduxjs/toolkit"
// import { CarsType, SearchCarInfoType } from "./carsReducerTs.interface";


export const getAllInfo = createAsyncThunk(
    'events/getAllInfo',
    async () => {
        console.log('thunksss')
        try {
            const response = await fetch('/getlogin')
            if (!response.ok) {
                throw new Error('Request failed');
            }


            const data = await response.json();
            return data

        } catch (error) {
            throw error
        }
    }
)