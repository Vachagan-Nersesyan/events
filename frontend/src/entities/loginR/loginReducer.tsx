import { createSlice, PayloadAction, current } from '@reduxjs/toolkit'
import { InitialStateType } from './loginReducerTs.interface'
import { AppStateType } from 'entities/store/redux-store'
import { getAllInfo } from './loginReducerThunk'
import bcrypt from 'bcrypt'



const initialState: InitialStateType = {
    loading: true,
    error: null,
    isAuth: false,
    allUsersInfo: []
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        loginInfoFunc(state: InitialStateType, action: PayloadAction<{ email: string, password: string }>) {
            console.log(action.payload.email, 'action.payloadaction.payloadaction.payload')
            console.log(current(state), 'current(state)current(state)current(state)')

            let data = state.allUsersInfo.filter((val) => val.email === action.payload.email)

            if (data.length) {
                state.isAuth = true
            } else {
                state.isAuth = false
            }
            console.log(current(state), 'datacurrent(state)')
        },
        logOutFunc(state: InitialStateType, action: PayloadAction) {
            state.isAuth = false
            console.log(current(state), 'datacurrent(state)')
        },
    },
    extraReducers:
        (builder) => {
            builder
                .addCase(getAllInfo.pending, (state) => {
                    state.loading = true;
                    state.error = null;
                })
                .addCase(getAllInfo.fulfilled, (state, action) => {
                    state.loading = false;
                    state.allUsersInfo = action.payload
                    console.log(action.payload, 'action.payloadaction.payloadaction.payloadaction.payload')
                    console.log(current(state), 'allUsersInfoallUsersInfoallUsersInfo')
                })
                .addCase(getAllInfo.rejected, (state, action) => {
                    state.loading = false;
                    state.error = action.error.message || 'An error occurred';
                })
        }
})


export const { loginInfoFunc, logOutFunc } = loginSlice.actions


export default loginSlice.reducer
