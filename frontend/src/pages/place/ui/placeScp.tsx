import React from 'react'
import styles from './placeStl.module.css'
import { OwnProps } from './placeTs.interface'
import EventTitle from 'feautures/eventTitleComp'
import { NavLink } from 'react-router-dom'


const PlaceComp: React.FC<OwnProps> = () => {


    const restaurantItemsArr = [
        {
            id: 0,
            title: 'Tashi Pizza',
            picture: '/images/restaurantPic/3.png'
        },
        {
            id: 1,
            title: 'KFC',
            picture: '/images/restaurantPic/1.png'
        },
        {
            id: 2,
            title: 'Mr. Gyros',
            picture: '/images/restaurantPic/2.png'
        },
        {
            id: 3,
            title: 'Pizza Hut',
            picture: '/images/restaurantPic/4.png'
        },
    ]


    return (
        <div>
            <EventTitle />
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
                                    <option value="Audi">Audi</option>
                                    <option value="BMW">BMW</option>
                                    <option value="Mercedes">Mercedes</option>
                                    <option value="Volvo">Volvo</option>
                                </select>

                                <select id="mySelectSec">
                                    <option value="Audi">Audi</option>
                                    <option value="BMW">BMW</option>
                                    <option value="Mercedes">Mercedes</option>
                                    <option value="Volvo">Volvo</option>
                                </select>
                            </div>
                        </div>
                        <div className={styles.events_place_content_2_1_1_3}>
                            <div className={styles.events_place_content_2_1_t}>
                                Ընտրել Ռեստորանները
                            </div>
                            <div className={styles.events_place_content_2_1_slct}>
                                <select id="mySelect">
                                    <option value="Audi">Audi</option>
                                    <option value="BMW">BMW</option>
                                    <option value="Mercedes">Mercedes</option>
                                    <option value="Volvo">Volvo</option>
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
                                <input type="text" placeholder='Որոնել' />
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
                        restaurantItemsArr.map((val) => {
                            return (
                                <div className={styles.evevnts_plc_rst_in_content}>
                                    <div className={styles.evevnts_plc_rst_in_content_1}>
                                        <div className={styles.evevnts_plc_rst_in_content_1_1}>
                                            <NavLink to={`/restaurant/${val.title}`}>Պատվիրել սնունդ</NavLink>
                                        </div>
                                        <div className={styles.evevnts_plc_rst_in_content_1_2}>
                                            <img src={val.picture} />
                                        </div>
                                    </div>
                                    <div className={styles.evevnts_plc_rst_in_content_2}>
                                        {val.title}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default PlaceComp