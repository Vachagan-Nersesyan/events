import { createSlice, PayloadAction, current } from '@reduxjs/toolkit'
import { InitialStateType } from './homeReducerTs.interface'
import { AppStateType } from 'entities/store/redux-store'
import { getAllEvents } from './homeReducerThunk'



const initialState: InitialStateType = {
    loading: true,
    error: null,

    events: [],

    eventsPic: [
        {
            id: 1,
            bgPic: '/images/eventsBg/1.png',
            pic: '/images/events/1.png',
            items: [
                'Սպասարկման հնարավորությամբ',
                'Բարձրորակ աշխատանքային մոտեցմամբ'
            ]
        },
        {
            id: 2,
            bgPic: '/images/eventsBg/2.png',
            pic: '/images/events/2.png',
            items: [
                'Սպասարկման հնարավորությամբ',
                'Բարձրորակ աշխատանքային մոտեցմամբ'
            ]
        },
        {
            id: 3,
            bgPic: '/images/eventsBg/3.png',
            pic: '/images/events/3.png',
            items: [
                'Սպասարկման հնարավորությամբ',
                'Բարձրորակ աշխատանքային մոտեցմամբ'
            ]
        },
        {
            id: 4,
            bgPic: '/images/eventsBg/4.png',
            pic: '/images/events/4.png',
            items: [
                'Սպասարկման հնարավորությամբ',
                'Բարձրորակ աշխատանքային մոտեցմամբ'
            ]
        },
        {
            id: 5,
            bgPic: '/images/eventsBg/5.png',
            pic: '/images/events/5.png',
            items: [
                'Սպասարկման հնարավորությամբ',
                'Բարձրորակ աշխատանքային մոտեցմամբ'
            ]
        },
        {
            id: 6,
            bgPic: '/images/eventsBg/6.png',
            pic: '/images/events/6.png',
            items: [
                'Սպասարկման հնարավորությամբ',
                'Բարձրորակ աշխատանքային մոտեցմամբ'
            ]
        },
        {
            id: 7,
            bgPic: '/images/eventsBg/7.png',
            pic: '/images/events/7.png',
            items: [
                'Սպասարկման հնարավորությամբ',
                'Բարձրորակ աշխատանքային մոտեցմամբ'
            ]
        }
    ]
}

export const homeSlice = createSlice({
    name: 'cars',
    initialState,
    reducers: {
        // rentCarInfoFunc(state: InitialStateType, action: PayloadAction<{ info: SearchCarInfoType }>) {
        // },
    },
    extraReducers:
        (builder) => {
            builder
                .addCase(getAllEvents.pending, (state) => {
                    state.loading = true;
                    state.error = null;
                })
                .addCase(getAllEvents.fulfilled, (state, action) => {
                    state.loading = false;
                    state.events = action.payload
                })
                .addCase(getAllEvents.rejected, (state, action) => {
                    state.loading = false;
                    state.error = action.error.message || 'An error occurred';
                })
        }
})


export const { } = homeSlice.actions


export default homeSlice.reducer
