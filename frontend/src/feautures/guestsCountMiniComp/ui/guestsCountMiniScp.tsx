import React, { useState } from 'react'
import styles from './guestsCountMiniStl.module.css'
import { OwnProps } from './guestsCountMiniTs.interface'
import { useDispatch } from 'react-redux'
import { guestsCountInfoFunc } from 'entities/weddingR/weddingReducer'
import { NavLink } from 'react-router-dom'

const GuestsCountMiniComp: React.FC<OwnProps> = ({ }) => {

    const [guestsCount, setGuestsCount] = useState<string>('0')

    const dispatch = useDispatch()


    const guestsCompFunc = () => {
        console.log(guestsCount)
        dispatch(guestsCountInfoFunc({ info: guestsCount }))
    }


    return (
        <div>
            <div>
                Հյուրերի քանակը
            </div>
            <div>
                <input type="number" onChange={(e) => setGuestsCount(e.target.value)} />
            </div>
            <div>
                <button onClick={() => guestsCompFunc()}>
                    Հաստատել
                </button>
            </div>
            <NavLink to={'/events/place/Պար ուսուցում'}>
                Հաջորդը
            </NavLink>
        </div>
    )
}

export default GuestsCountMiniComp