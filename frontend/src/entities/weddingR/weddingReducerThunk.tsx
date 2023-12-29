import { createAsyncThunk } from "@reduxjs/toolkit"



export const getAllRestaurants = createAsyncThunk(
    'events/getAllRestaurants',
    async () => {
        try {
            const response = await fetch('/get-restaurants')
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