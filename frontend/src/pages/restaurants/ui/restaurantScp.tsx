import React from 'react'
import styles from './restaurantStl.module.css'
import { OwnProps } from './restaurantTs.interface'

import pic from '../images/2.png'



const RestaurantComp: React.FC<OwnProps> = () => {


    return (
        <div className={styles.current_restaurant_content}>
            <div className={styles.current_restaurant_content_1}>
                <div className={styles.current_restaurant_content_1_overlay}></div>
                <div className={styles.current_restaurant_content_1_container}>
                    <div className={styles.current_restaurant_content_1_1}>
                        <div className={styles.current_restaurant_content_1_1_1}>
                            ԿՈՎԿԱՍ
                        </div>
                        <div className={styles.current_restaurant_content_1_1_2}>
                            ՌԵՍՏՈՐԱՆԱՅԻՆ ՀԱՄԱԼԻՐ
                        </div>
                        <div className={styles.current_restaurant_content_1_1_3}></div>
                        <div className={styles.current_restaurant_content_1_1_3_subtitle}>
                            Փաթեթեներ
                        </div>
                        <div className={styles.current_restaurant_content_1_1_4}>
                            <div className={styles.current_restaurant_content_1_1_4_1}>
                                <div className={styles.current_restaurant_content_1_1_4_1_1}>
                                    CLASSIC
                                </div>
                                <div className={styles.current_restaurant_content_1_1_4_1_2}>
                                    Սկսած՝
                                </div>
                                <div className={styles.current_restaurant_content_1_1_4_1_2}>
                                    14.000 դրամից
                                </div>
                            </div>
                            <div className={styles.current_restaurant_content_1_1_4_1}>
                                <div className={styles.current_restaurant_content_1_1_4_1_1}>
                                    OPTIMAL
                                </div>
                                <div className={styles.current_restaurant_content_1_1_4_1_2}>
                                    Սկսած՝
                                </div>
                                <div className={styles.current_restaurant_content_1_1_4_1_2}>
                                    18.000 դրամից
                                </div>
                            </div>
                            <div className={styles.current_restaurant_content_1_1_4_1}>
                                <div className={styles.current_restaurant_content_1_1_4_1_1}>
                                    ROYAL
                                </div>
                                <div className={styles.current_restaurant_content_1_1_4_1_2}>
                                    Սկսած՝
                                </div>
                                <div className={styles.current_restaurant_content_1_1_4_1_2}>
                                    24.000 դրամից
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.current_restaurant_content_1_2}>
                        <img src={pic} />
                    </div>
                </div>
            </div>
            <div className={styles.current_restaurant_content_container}>
                <div className={styles.current_restaurant_sec_content}>
                    <div className={styles.current_restaurant_sec_content_1}>
                        <span>«Դասական»(Classic)</span> սկսած 1.899.000 դրամ
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
                        <button>Ամրագրել</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RestaurantComp