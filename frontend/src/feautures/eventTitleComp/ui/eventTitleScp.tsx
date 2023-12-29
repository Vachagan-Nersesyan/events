import React, { useEffect, useState } from 'react'
import styles from './eventTitleStl.module.css'
import { OwnProps } from './eventTitleTs.interface'
import { useSelector } from 'react-redux'
import { AppStateType } from 'entities/store/redux-store'
import { useLocation, useParams } from 'react-router-dom'
import { EventType } from 'entities/homeR/homeReducerTs.interface'

const bigBg = '/images/eventsBigPic/1.png'



const EventTitle: React.FC<OwnProps> = ({ currentItemEvents }) => {

    // const params = useParams()
    // const history = useLocation();

    // const eventsArr = useSelector((state: AppStateType) => state.homeR.events)

    // const [currentItemEvents, setCurrentItemEvents] = useState<Array<EventType>>([])

    // const load = useSelector((state: AppStateType) => state.homeR.loading)
    // const [isLoading, setIsLoading] = useState<boolean>(load)


    // console.log(history, 'historyhistoryhistoryhistory')

    // useEffect(() => {
    //     let item = eventsArr.filter((val) => val.name === params.id)
    //     setCurrentItemEvents(item)
    // }, [history.pathname])

    // useEffect(() => {
    //     // let item = eventsArr.filter((val) => val.name === params.id)
    //     // setCurrentItemEvents(item)
    //     setIsLoading(load)
    // }, [load])

    // console.log(isLoading, currentItemEvents, 'currentItemEventscurrentItemEventscurrentItemEvents')


    return (
        <div>
            {/* {
                !isLoading && currentItemEvents[0]
                    ? */}
            <div style={{ backgroundImage: `url(${currentItemEvents[0].picture})` }} className={styles.events_item_content_title}>
                <div className={styles.events_item_content_overlay}>
                    <div className={styles.events_item_content_titleitm}>
                        {
                            currentItemEvents[0].name
                        }
                    </div>
                </div>
            </div>
            {/* :
                    <div>
                        Loading...
                    </div>
            } */}
        </div>
    )
}

export default EventTitle