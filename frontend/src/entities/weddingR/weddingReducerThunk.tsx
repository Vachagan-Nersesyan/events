import { createAsyncThunk } from "@reduxjs/toolkit"
import { SendingInfoType } from "./weddingReducerTs.interface";



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


export const sendRentInfo = createAsyncThunk(
    'events/sendRentInfo',
    async (item: SendingInfoType) => {

        console.log(item, 'itemitemitemitemitemitemitem')
        try {
            const response = await fetch('/send-contact',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ info: item }),
                }
            )
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