import { configureStore } from '@reduxjs/toolkit'
import homeSlice from 'entities/homeR/homeReducer'
import loginSlice from 'entities/loginR/loginReducer'
import weddingSlice from 'entities/weddingR/weddingReducer'
import { useDispatch } from 'react-redux'


const store = configureStore({
    reducer: {
        homeR: homeSlice,
        weddingR: weddingSlice,
        loginR: loginSlice
    }
})

type RootReducerType = typeof store.getState
export type AppStateType = ReturnType<RootReducerType>


export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch

export default store