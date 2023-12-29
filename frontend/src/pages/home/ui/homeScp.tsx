import React, { useEffect, useState } from 'react'
import styles from './homeStl.module.css'
import { EventsType, OwnProps } from './homeTs.interface'

// import pic2 from '../images/2.png'
// import pic3 from '../images/3.png'
// import pic4 from '../images/4.png'
import pic5 from '../images/5.png'
import pic6 from '../images/6.png'
import pic7 from '../images/7.png'
import pic8 from '../images/8.png'
import pic9 from '../images/9.png'
import pic10 from '../images/10.png'
import pic11 from '../images/11.png'
import pic12 from '../images/12.png'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { AppStateType, useAppDispatch } from 'entities/store/redux-store'
import { getAllEvents } from 'entities/homeR/homeReducerThunk'
import { EventType } from 'entities/homeR/homeReducerTs.interface'



const HomeComp: React.FC<OwnProps> = () => {

    // const eventsArr: Array<EventsType> = [
    //     {
    //         id: 0,
    //         bgPic: '/images/eventsBg/1.png',
    //         pic: '/images/events/1.png',
    //         title: ' Հարսանիքի կազմակերպում',
    //         items: ['Սպասարկման հնարավորություն', 'Բարձրորակ աշխատանքային մոտեցմամբ']
    //     }
    // ]

    const aDispatch = useAppDispatch()


    const eventsArr = useSelector((state: AppStateType) => state.homeR.eventsPic)

    const eventsNameInfoArr = useSelector((state: AppStateType) => state.homeR.events)
    const [eventsNameArr, setEventsNameArr] = useState<Array<EventType>>(eventsNameInfoArr)

    const load = useSelector((state: AppStateType) => state.homeR.loading)

    const [isLoading, setIsLoading] = useState<boolean>(load)

    useEffect(() => {
        setIsLoading(load)
    }, [load])


    useEffect(() => {
        aDispatch(getAllEvents())
    }, [])

    useEffect(() => {

        setEventsNameArr(eventsNameInfoArr)

    }, [eventsNameInfoArr])

    return (
        <div className={styles.home_content}>
            <div className={styles.home_content_1_ovrl}>
                <div className={styles.home_content_1}>
                    <div className={styles.home_content_1_pics}>
                        <img src={pic5} />
                        <img src={pic6} />
                        <img src={pic7} />
                        <img src={pic8} />
                        <img src={pic9} />
                        <img src={pic10} />
                        <img src={pic11} />
                        <img src={pic12} />

                    </div>
                    <div className={styles.home_content_1_pics_title}>
                        EVENTs
                    </div>
                    <div className={styles.home_content_1_1_ovrls}>
                        <div className={styles.home_content_1_1}>
                            Երբ <span>ԱԶԱՏ</span> եք
                        </div>
                        <div className={styles.home_content_1_1}>
                            ընտրություն կատարելու մեջ։
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.home_content_container}>
                <div className={styles.home_content_2}>
                    {
                        !isLoading
                            ?
                            eventsArr.map((val, ind) => {
                                return (
                                    <NavLink to={`/events/${eventsNameArr[ind].name}`} className={styles.home_content_2_1}>
                                        <div className={styles.home_content_2_1_ovrl}>
                                        </div>
                                        <div className={styles.home_content_2_1_1}>
                                            <img src={val.bgPic} />
                                        </div>
                                        <div className={styles.home_content_2_1_2}>
                                            <div className={styles.home_content_2_1_2_1}>
                                                <img src={val.pic} />
                                            </div>
                                            <div className={styles.home_content_2_1_2_2}>
                                                {eventsNameArr[ind].name}
                                            </div>
                                        </div>
                                        <div className={styles.home_content_2_1_3}>
                                            <ul>
                                                {
                                                    val.items.map((val) => {
                                                        return (
                                                            <li>
                                                                {val}
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </div>
                                    </NavLink>
                                )
                            })
                            :
                            <div>
                                Loadddding...
                            </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default HomeComp