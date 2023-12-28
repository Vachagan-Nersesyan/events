import React from 'react'
import styles from './FooterStl.module.css'
import { OwnProps } from './FooterTs.interface'

import logo from '../images/logo.png'

import pic1 from '../images/1.png'
import pic2 from '../images/2.png'
import pic3 from '../images/3.png'
import pic4 from '../images/4.png'
import { NavLink } from 'react-router-dom'


const Footer: React.FC<OwnProps> = () => {
    return (
        <div className={styles.footer_content}>
            <div className={styles.footer_content_container}>
                <div className={styles.footer_content_footer}>
                    <div className={styles.footer_content_footer_col}>
                        <div className={styles.f_c_t_item_1}>
                            <div className={styles.f_c_t_item_1_1}>
                                <img src={logo} />
                            </div>
                            <div className={styles.f_c_t_item_1_2}>
                                My Events
                            </div>
                        </div>
                        <div className={styles.f_c_t_item_1}>
                            <div className={styles.f_c_t_item_2_1}>
                                My Events միջոցառումների կազմակերպման ծրագիրը հիմնադրվել է "ԳԼՈԲԱԼ ԻՏ" ՍՊԸ 2022թ․-ի հոկտեմբերի 19ին։
                                Մենք առաջարկում ենք տարատեսակ միջոցառումների կազմակերպման և իրականացման լուծումներ։
                            </div>
                        </div>
                        <div className={styles.f_c_t_item_1}>
                            <div className={styles.f_c_t_item_1_1}>
                                <NavLink to={'/'}>
                                    <img src={pic1} />
                                </NavLink>
                            </div>
                            <div className={styles.f_c_t_item_1_1}>
                                <NavLink to={'/'}>
                                    <img src={pic2} />
                                </NavLink>
                            </div>
                            <div className={styles.f_c_t_item_1_1}>
                                <NavLink to={'/'}>
                                    <img src={pic3} />
                                </NavLink>
                            </div>
                            <div className={styles.f_c_t_item_1_1}>
                                <NavLink to={'/'}>
                                    <img src={pic4} />
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className={styles.footer_content_footer_col}>
                        <div className={styles.footer_content_footer_col_2}>
                            <NavLink to={'/'}>
                                Աշխատանք
                            </NavLink>
                        </div>
                        <div className={styles.footer_content_footer_col_2}>
                            <NavLink to={'/'}>
                                Գործընկերներ
                            </NavLink>
                        </div>
                        <div className={styles.footer_content_footer_col_2}>
                            <NavLink to={'/'}>
                                Մեր մասին
                            </NavLink>
                        </div>
                    </div>
                    <div className={styles.footer_content_footer_col}>
                        <div className={styles.footer_content_footer_col_title}>
                            Հետադարձ կապ
                        </div>
                        <div className={styles.footer_content_footer_col_2_2}>
                            ք․ Երևան
                        </div>
                        <div className={styles.footer_content_footer_col_3}>
                            <div className={styles.footer_content_footer_col_3_1_w23}>
                                <span>Հեռախոսահամաներ</span>
                                <span>+374 00 000 000</span>
                                <span>+374 00 000 000</span>
                            </div>
                            <div className={styles.footer_content_footer_col_3_1_w23}>
                                <span>Էլ․ հասցե</span>
                                <span>gitedu@bk.ru</span>
                                <span>support@globalitc.am</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.footer_content_footer_border}></div>

                <div className={styles.footer_content_footer_lst}>
                    <span> Copyright &#169; Բոլո հեղինակային իրավունքները պաշտշանված են։</span>
                    <span>Կայքը պատրաստված է "ԳԼՈԲԱԼ ԻՏ" (ՍՊԸ)-ի կողմից։</span>
                </div>

            </div>
        </div>
    )
}

export default Footer
