import React, { useState } from 'react'
import styles from './placeStl.module.css'
import { OwnProps } from './placeTs.interface'
import { useLocation, useParams } from 'react-router-dom'
import RestaurantMiniComp from 'feautures/restaurantMiniComp/ui/restaurantMScp'
import GuestsCountMiniComp from 'feautures/guestsCountMiniComp'
import DanceMiniComp from 'feautures/danceMiniComp'


const PlaceComp: React.FC<OwnProps> = () => {


    const params = useParams()


    return (

        <div>
            {
                params.id === "Ռեստորան"
                    ?
                    <RestaurantMiniComp />
                    :
                    params.id === "Հյուրերի քանակ"
                        ?
                        <GuestsCountMiniComp />
                        :
                        params.id === "Պար ուսուցում"
                            ?
                            <DanceMiniComp />
                            :
                            null

            }
        </div>
    )
}

export default PlaceComp