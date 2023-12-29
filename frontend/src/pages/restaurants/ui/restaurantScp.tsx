import React, { useEffect, useState } from 'react'
import styles from './restaurantStl.module.css'
import { OwnProps } from './restaurantTs.interface'

import pic from '../images/2.png'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { AppStateType } from 'entities/store/redux-store'
import { RestuarantsPicArr } from 'entities/weddingR/weddingReducerTs.interface'
import { rentRestaurantInfoFunc } from 'entities/weddingR/weddingReducer'



const RestaurantComp: React.FC<OwnProps> = () => {

    const params = useParams()
    const dispatch = useDispatch()

    const restaurantArr = useSelector((state: AppStateType) => state.weddingR.restaurantsArr)

    const [currentRest, setCurrentRest] = useState<Array<RestuarantsPicArr>>([])

    console.log(currentRest, 'currentRest')

    useEffect(() => {
        let data = restaurantArr.filter((val) => val.name === params.id)
        setCurrentRest(data)
    }, [])


    const rentRestaurantCompFunc: (str: string) => void = (str: string) => {
        console.log(str, 'strstrstrstr')
        dispatch(rentRestaurantInfoFunc({ info: str }))
    }

    return (
        <div className={styles.current_restaurant_content}>
            {
                currentRest.length
                    ?
                    <div>
                        <div className={styles.current_restaurant_content_1} style={{ backgroundImage: `url(${currentRest[0].picture})` }}>
                            <div className={styles.current_restaurant_content_1_overlay}></div>
                            <div className={styles.current_restaurant_content_1_container}>
                                <div className={styles.current_restaurant_content_1_1}>
                                    <div className={styles.current_restaurant_content_1_1_1}>
                                        {currentRest[0].name}
                                    </div>
                                    <div className={styles.current_restaurant_content_1_1_2}>
                                        ՌԵՍՏՈՐԱՆԱՅԻՆ ՀԱՄԱԼԻՐ
                                    </div>
                                    <div className={styles.current_restaurant_content_1_1_3}></div>
                                    <div className={styles.current_restaurant_content_1_1_3_subtitle}>
                                        Փաթեթեներ
                                    </div>
                                    <div className={styles.current_restaurant_content_1_1_4}>
                                        {
                                            currentRest[0].types.map((val) => {
                                                return (
                                                    <div className={styles.current_restaurant_content_1_1_4_1}>
                                                        <div className={styles.current_restaurant_content_1_1_4_1_1}>
                                                            {val.name}
                                                        </div>
                                                        <div className={styles.current_restaurant_content_1_1_4_1_2}>
                                                            Սկսած՝
                                                        </div>
                                                        <div className={styles.current_restaurant_content_1_1_4_1_2}>
                                                            {val.minPrice} դրամից
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                                <div className={styles.current_restaurant_content_1_2}>
                                    <img src={currentRest[0].bigPc} />
                                </div>
                            </div>
                        </div>
                        {
                            currentRest[0].types.map((val) => {
                                return (
                                    <div className={styles.current_restaurant_content_container}>
                                        <div className={styles.current_restaurant_sec_content}>
                                            <div className={styles.current_restaurant_sec_content_1}>
                                                <span>{val.name}</span> սկսած {val.price} դրամ
                                            </div>
                                            <div className={styles.current_restaurant_sec_content_1}>
                                                Հարսանեկան փաթեթը իր ﬔջ ներառում է՝
                                            </div>
                                            <div className={styles.current_restaurant_sec_content_1}>
                                                1․Հարսանեկան կազմակերպիչ (խորհրդատվություն հարսանիքի նախապատրաստական
                                                աշխատանքների կազմակերպման բոլոր հարցերում, լուծում տալ բոլոր կազմակերպչական
                                                հարցերին, ինպես հարսանիքի նխապատրաստական ընթացքում, այնպես էլ հարսանյաց
                                                արարողության օրը, վերահսկում, որպեսզի բոլոր կազմակերպչական պարտականությունները
                                                կատարվեն՝ ըստ պայամանագրի և մշակաված սցենարի)
                                            </div>
                                            <div className={styles.current_restaurant_sec_content_1}>
                                                2․Կազﬔլ ժամանակացույց
                                            </div>
                                            <div className={styles.current_restaurant_sec_content_1}>
                                                3․Թամադա,հանդիսավար
                                            </div>
                                            <div className={styles.current_restaurant_sec_content_1}>
                                                4․Հարսանյաց բարձրակարգ ֆոտոնկարիչ(1 ֆոտոնկարիչ)
                                            </div>
                                            <div className={styles.current_restaurant_sec_content_1}>
                                                5․Հարսանյաց բարձրակարգ տեսանկարահանում
                                            </div>
                                            <div className={styles.current_restaurant_sec_content_1}>
                                                6․Հարսանյաց արարողության երաժշտական մասի ապահովում (DJ)
                                            </div>
                                            <div className={styles.current_restaurant_sec_content_1}>
                                                7․Հարսանեկան դիմահարդարում և վարսահարդարում
                                            </div>
                                            <div className={styles.current_restaurant_sec_content_1}>
                                                8․Հարսանեկան ծաղկային ձևավորում (հարսի ծաղկեփունջ, բուտաներկա, հարսի և փեսայի սեղանի
                                                ձևավորում)
                                            </div>
                                            <div className={styles.current_restaurant_sec_content_1}>
                                                9․Հարսանեկան տորթ (ﬕնչ 50 անձ )
                                            </div>
                                            <div className={styles.current_restaurant_sec_content_2}>
                                                Բանկետի առաջարկվող գինը յուրաքանչյուր անձի համար սկսած 14000դրամ
                                            </div>
                                            <div className={styles.current_restaurant_sec_content_2}>
                                                Ձեր իսկ հարմարավետության համար՝ բանկետի գինը չի մտնում ընդհանուր հաշվարկի
                                                ﬔջ, որը տալիս է Ձեզ հնարավորություն, օգտագործել այդ փաթեթները անկախ Ձեր հյուրերի
                                                քանակից:
                                            </div>
                                            <div className={styles.current_restaurant_sec_content_3}>
                                                <button onClick={() => rentRestaurantCompFunc(currentRest[0].name)}>Ամրագրել</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>

                    :
                    <div>
                        Loading...
                    </div>

            }
        </div>
    )
}

export default RestaurantComp