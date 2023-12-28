import React from 'react'
import styles from './eventsStl.module.css'
import { EventsMakeArrType, OwnProps } from './eventsTs.interface'

import pic from '../images/1.png'
import { NavLink } from 'react-router-dom'
import EventTitle from 'feautures/eventTitleComp'



const EventsComp: React.FC<OwnProps> = () => {

    const eventsMakeArr: Array<EventsMakeArrType> = [
        {
            id: 0,
            title: 'Ռեստորան',
            picture: '/images/eventsAllPic/1.jpg',
            icon: '/images/eventsAllIcons/1.png'
        }
    ]

    return (
        <div className={styles.events_item_content}>
            <EventTitle />
            <div className={styles.events_item_content_container}>
                <div className={styles.events_item_content_items}>

                    {
                        eventsMakeArr.map((val) => {
                            return (
                                <NavLink to={`/events/place/${val.title}`}>
                                    <div className={styles.events_item_content_items_1} style={{ backgroundImage: `url(${val.picture})` }}>
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
                                                    {val.title}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </NavLink>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    )
}

export default EventsComp