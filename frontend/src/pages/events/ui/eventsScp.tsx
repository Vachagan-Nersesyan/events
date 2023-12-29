import React, { useEffect, useState } from 'react'
import styles from './eventsStl.module.css'
import { EventsMakeArrType, OwnProps } from './eventsTs.interface'

import pic from '../images/1.png'
import { NavLink, Route, Routes, useLocation, useParams } from 'react-router-dom'
import EventTitle from 'feautures/eventTitleComp'
import { useSelector } from 'react-redux'
import { AppStateType } from 'entities/store/redux-store'
import { EventType, InEventType } from 'entities/homeR/homeReducerTs.interface'
import PlaceComp from 'pages/place'



const EventsComp: React.FC<OwnProps> = () => {

    const history = useLocation();
    const params = useParams()

    const [isChaneItemPath, setIsChaneItemPath] = useState<boolean>(false)
    const [firstPath, setFirstPath] = useState<string | undefined>('')


    const eventsArr = useSelector((state: AppStateType) => state.homeR.events)

    const load = useSelector((state: AppStateType) => state.homeR.loading)
    const [isLoading, setIsLoading] = useState<boolean>(load)


    const [currentItemEvents, setCurrentItemEvents] = useState<Array<EventType>>(eventsArr)


    // useEffect(() => {
    //     let item = eventsArr.filter((val) => val.name === params.id)
    //     setCurrentItemEvents(item)
    // }, [params])

    console.log(eventsArr, firstPath, 'eventsArr')

    useEffect(() => {
        debugger
        
        if (!isChaneItemPath) { setFirstPath(params.id) }
        setIsChaneItemPath(true)

        let item = eventsArr.filter((val) => val.name === firstPath)
        setCurrentItemEvents(item)
    }, [])

    useEffect(() => {
        let item = eventsArr.filter((val) => val.name === firstPath)
        setCurrentItemEvents(item)
    }, [history.pathname])

    useEffect(() => {
        console.log(firstPath,'firstPathfirstPath')
        let item = eventsArr.filter((val) => val.name === firstPath)
        setCurrentItemEvents(item)
        setIsLoading(load)
    }, [load])

    console.log(currentItemEvents, history, 'currentItemEvents')


    return (
        <div className={styles.events_item_content}>
            {
                !isLoading && currentItemEvents[0]
                    ?
                    <EventTitle currentItemEvents={currentItemEvents} />
                    :
                    null
            }

            {
                !history.pathname.includes('/events/place')
                    ?
                    <div className={styles.events_item_content_container}>
                        <div className={styles.events_item_content_items}>

                            {
                                !isLoading && currentItemEvents[0]
                                    ?
                                    currentItemEvents[0].events.map((val) => {
                                        return (
                                            <NavLink to={`/events/place/${val.name}`}>
                                                <div className={styles.events_item_content_items_1} style={{ backgroundImage: `url(${val.bigPic})` }}>
                                                    <div className={styles.events_item_content_items_1_overlay}></div>
                                                    <div className={styles.events_item_content_items_1_inner}>
                                                        <div className={styles.events_item_content_items_2}>
                                                            EVENTs
                                                        </div>
                                                        <div className={styles.events_item_content_items_3_5}>
                                                            <img src={pic} />
                                                        </div>
                                                        <div className={styles.events_item_content_items_4}>
                                                            <div className={styles.events_item_content_items_4_1_pic}>
                                                                <img src={`${val.icon}`} />
                                                            </div>
                                                            <div className={styles.events_item_content_items_4_1}>
                                                                {val.name}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </NavLink>
                                        )
                                    })
                                    :
                                    null
                            }

                        </div>
                    </div>
                    :
                    <PlaceComp />
            }


        </div>
    )
}

export default EventsComp