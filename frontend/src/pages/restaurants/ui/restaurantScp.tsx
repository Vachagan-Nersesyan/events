import React from 'react'
import styles from './restaurantStl.module.css'
import { FoodArrType, OwnProps } from './restaurantTs.interface'

import pic from '../images/1.png'
import { FaBagShopping } from 'react-icons/fa6'

const RestaurantComp: React.FC<OwnProps> = () => {

    const categoriesArr = [
        {
            id: 0,
            name: 'Պիցցա'
        },
        {
            id: 1,
            name: 'Արագ սնունդ'
        },
        {
            id: 2,
            name: 'Խաչապուրի'
        },
        {
            id: 3,
            name: 'Աղցաններ'
        }
    ]

    const foodArr: Array<FoodArrType> = [
        {
            id: 0,
            title: 'Պիցցա դի ամանտի',
            size: 'Կտոր',
            type: 'Americano',
            price: '460',
            picture: '/images/foodPic/1.png'
        }
    ]



    return (
        <div className={styles.current_restaurant_content}>
            <div className={styles.current_restaurant_content_container}>
                <div className={styles.current_restaurant_content_1_item}>

                    <div className={styles.evevnts_plc_rst_in_content}>
                        <div className={styles.evevnts_plc_rst_in_content_1}>
                            <div className={styles.evevnts_plc_rst_in_content_1_1}>
                                Կատեգորիաներ
                            </div>
                            <div className={styles.evevnts_plc_rst_in_content_1_2}>
                                <img src={pic} />
                            </div>
                        </div>
                        <div className={styles.evevnts_plc_rst_in_content_2}>
                            Tashir Pizza
                        </div>
                    </div>
                    <div className={styles.evevnts_plc_rst_in_content_2}>
                        {
                            categoriesArr.map((val) => {
                                return (
                                    <div key={val.id} className={styles.evevnts_plc_rst_in_content_item}>
                                        {val.name}
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div>
                    {
                        foodArr.map((val) => {
                            return (
                                <div>
                                    <div>
                                        <img src={val.picture} />
                                    </div>
                                    <div>
                                        <div>
                                            {val.title}
                                        </div>
                                        <div>
                                            <div>
                                                -
                                            </div>
                                            <div>
                                                0
                                            </div>
                                            <div>
                                                +
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        Չափս <span>{val.size}</span>
                                    </div>
                                    <div>
                                        Տեսակ <span>{val.type}</span>
                                    </div>
                                    <div>
                                        <div>
                                            {val.price} դրամ
                                        </div>
                                        <div>
                                            <FaBagShopping />
                                        </div>
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

export default RestaurantComp