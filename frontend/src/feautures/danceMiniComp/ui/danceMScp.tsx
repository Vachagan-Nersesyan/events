import React from 'react'
import styles from './danceMStl.module.css'
import { OwnProps } from './danceMTs.interface'

import pic from '../images/1.png'
import { useDispatch, useSelector } from 'react-redux'
import { danceInfoFunc } from 'entities/weddingR/weddingReducer'
import { NavLink } from 'react-router-dom'
import { AppStateType, useAppDispatch } from 'entities/store/redux-store'
import { sendRentInfo } from 'entities/weddingR/weddingReducerThunk'

const DanceMiniComp: React.FC<OwnProps> = ({ }) => {

    const dispatch = useDispatch()
    const aDispatch = useAppDispatch()

    const restInfoItem = useSelector((state: AppStateType) => state.weddingR.rentedRest)
    const guestsCountInfoItem = useSelector((state: AppStateType) => state.weddingR.guestsCount)
    const danceInfoItem = useSelector((state: AppStateType) => state.weddingR.danceRent)


    return (
        <div>
            <div>
                Ավարտել
            </div>
            <div>
                <img src={pic} alt="" />
            </div>
            <NavLink to={'/wedding-rent-results'} onClick={() => {
                dispatch(danceInfoFunc({ info: true }))
                aDispatch(sendRentInfo({ restaurant: restInfoItem, guests: guestsCountInfoItem, dance: danceInfoItem }))
            }}>
                Ավելացնել
            </NavLink>
            <NavLink to={'/wedding-rent-results'} onClick={() => {
                dispatch(danceInfoFunc({ info: true }))
                aDispatch(sendRentInfo({ restaurant: restInfoItem, guests: guestsCountInfoItem, dance: danceInfoItem }))
            }
            }>
                Բաց թողնել
            </NavLink>
        </div>
    )
}


export default DanceMiniComp