import React, { useEffect, useState } from 'react'
import styles from './restaurantMStl.module.css'
import { OwnProps } from './restaurantMTs.interface'
import { NavLink } from 'react-router-dom'
import { AppStateType, useAppDispatch } from 'entities/store/redux-store'
import { getAllRestaurants } from 'entities/weddingR/weddingReducerThunk'
import { RestuarantsPicArr } from 'entities/weddingR/weddingReducerTs.interface'
import { useSelector } from 'react-redux'
import { searchRestaurantFunc } from 'widgets/helpers/helpersTs'


const RestaurantMiniComp: React.FC<OwnProps> = ({  }) => {

    // const restaurantItemsArr = [
    //     {
    //         id: 0,
    //         title: 'Կովկաս',
    //         picture: '/images/restaurantPic/1.png'
    //     },
    // ]

    const aDispatch = useAppDispatch()

    const restArr = useSelector((state: AppStateType) => state.weddingR.restaurantsArr)
    const [restaurantArr, setRestaurantArr] = useState<Array<RestuarantsPicArr>>(restArr)

    useEffect(() => {
        setRestaurantArr(restArr)
    }, [restArr])


    useEffect(() => {
        aDispatch(getAllRestaurants())
    }, [])


    const searchRestCompFunc = (str: string) => {
        setRestaurantArr(searchRestaurantFunc(str, restArr))
    }


    return (
        <div>
            {/* <EventTitle currentItemEvents={currentItemEvents} /> */}
            <div className={styles.events_place_content}>
                <div className={styles.events_place_content_overlay}></div>
                <div className={styles.events_place_content_txt}>

                    <div className={styles.events_place_content_overlay_title}>
                        Ռեստորան
                    </div>
                    <div className={styles.events_place_content_1}>
                        Լավագույն Ռեստորանները մեզ մոտ
                    </div>
                    <div className={styles.events_place_content_2}>
                        <div className={styles.events_place_content_2_1}>
                            <div className={styles.events_place_content_2_1_1}>
                                <input type="checkbox" />
                            </div>
                            <div className={styles.events_place_content_2_1_2}>
                                Բոլորը
                            </div>
                        </div>
                        <div className={styles.events_place_content_2_1}>
                            <div className={styles.events_place_content_2_1_1}>
                                <input type="checkbox" />
                            </div>
                            <div className={styles.events_place_content_2_1_2}>
                                Բաց Ռեստորանները
                            </div>
                        </div>
                    </div>
                    <div className={styles.events_place_content_2}>
                        <div className={styles.events_place_content_2_1_1_3}>
                            <div className={styles.events_place_content_2_1_t}>
                                Ըստ օրերի
                            </div>
                            <div className={styles.events_place_content_2_1_slct}>
                                <select id="mySelect">
                                </select>

                                <select id="mySelectSec">
                                </select>
                            </div>
                        </div>
                        <div className={styles.events_place_content_2_1_1_3}>
                            <div className={styles.events_place_content_2_1_t}>
                                Ընտրել Ռեստորանները
                            </div>
                            <div className={styles.events_place_content_2_1_slct}>
                                <select id="mySelect">
                                    {
                                        restaurantArr.map((val) => {
                                            return (
                                                <option value={`${val.name}`}>{val.name}</option>

                                            )
                                        })
                                    }
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className={styles.events_place_content_3}>
                        <div className={styles.events_place_content_2_1_t}>
                            Ըստ Ժամերի
                        </div>
                        <div className={styles.events_place_content_3_lst}>
                            <div className={styles.events_place_content_3_lst_1}>
                                <div className={styles.events_place_content_3_lst_1_t}>
                                    Բացման
                                </div>
                                <div className={styles.events_place_content_3_lst_1_inp}>
                                    <input type="time" />
                                </div>
                            </div>
                            <div className={styles.events_place_content_3_lst_2}>
                                <div className={styles.events_place_content_3_lst_1_t}>
                                    Փակման
                                </div>
                                <div className={styles.events_place_content_3_lst_1_inp}>
                                    <input type="time" />
                                </div>
                            </div>
                            <div className={styles.events_place_content_3_lst_1_inp_srch}>
                                <input type="text" placeholder='Որոնել' onChange={(e) => searchRestCompFunc(e.target.value)} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.evevnts_plc_rst_content}>
                <div className={styles.evevnts_plc_rst_title}>
                    Թոփ Ռեստորաններ
                </div>
                <div className={styles.evevnts_plc_rst_txt}>
                    {
                        restaurantArr.map((val) => {
                            return (
                                <div className={styles.evevnts_plc_rst_in_content}>
                                    <div className={styles.evevnts_plc_rst_in_content_1}>
                                        <div className={styles.evevnts_plc_rst_in_content_1_1}>
                                            <NavLink to={`/restaurant/${val.name}`}>Ավելին</NavLink>
                                        </div>
                                        <div className={styles.evevnts_plc_rst_in_content_1_2}>
                                            <img src={val.picture} />
                                        </div>
                                    </div>
                                    <div className={styles.evevnts_plc_rst_in_content_2}>
                                        {val.name}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <NavLink to={'/events/place/Հյուրերի քանակ'} >
                    Հաջորդը
                </NavLink>
            </div>
        </div >
    )
}

export default RestaurantMiniComp