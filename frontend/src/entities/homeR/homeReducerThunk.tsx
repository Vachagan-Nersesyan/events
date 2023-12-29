import { createAsyncThunk } from "@reduxjs/toolkit"
// import { CarsType, SearchCarInfoType } from "./carsReducerTs.interface";


export const getAllEvents = createAsyncThunk(
    'events/getAllEvents',
    async () => {
        try {
            const response = await fetch('/get-events')
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