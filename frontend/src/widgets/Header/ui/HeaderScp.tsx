import React, { ChangeEvent, useState } from 'react'
import styles from './HeaderStl.module.css'
import { OwnProps } from './HeaderTs.interface'

import logo from '../images/logo.png'
import { NavLink } from 'react-router-dom'
import { FaRegCircleUser, FaSistrix } from "react-icons/fa6";

import fflag from '../images/1f.png'
import sflag from '../images/2f.png'
import tflag from '../images/3f.png'
import { useDispatch, useSelector } from 'react-redux'
import { AppStateType } from 'entities/store/redux-store'
import { changeLangTypeFunc } from 'entities/homeR/homeReducer'
import { logOutFunc } from 'entities/loginR/loginReducer'



const Header: React.FC<OwnProps> = () => {

    const dispatch = useDispatch()

    const lang = useSelector((state: AppStateType) => state.homeR.language)

    const texts = require(`../../../widgets/setLanguage/languageLib/${lang}.json`);


    const [selectedOption, setSelectedOption] = useState<string | undefined>('arm');
    const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const selectOption = (option: string) => {
        setSelectedOption(option);
        setDropdownOpen(false);
    };

    const options = [
        { value: 'arm', label: 'Option 1', image: fflag },
        { value: 'rus', label: 'Option 2', image: sflag },
        { value: 'eng', label: 'Option 3', image: tflag },

    ];

    const handleSelectLangChange = (str: string) => {
        dispatch(changeLangTypeFunc(str))
    };

    const logOutFuncComp = () => {
        dispatch(logOutFunc())
    }

    return (
        <div className={styles.header_contet}>
            <div className={styles.header_context_container}>
                <div className={styles.header_context_1}>
                    <div className={styles.header_context_1_1}>
                        <img src={logo} />
                    </div>
                    <div className={styles.header_context_1_2}>
                        My Events
                    </div>
                </div>
                <div className={styles.header_context_2}>
                    <div className={styles.header_context_2_1}>
                        <NavLink to={'/'}>Գլխավոր</NavLink>
                    </div>

                    <div className={styles.header_context_2_1}>
                        <NavLink to={'/serve-page'}>Ծառայություններ</NavLink>
                    </div>

                    <div className={styles.header_context_2_1}>
                        <NavLink to={'/contact-page'}>{texts.headerT}</NavLink>
                    </div>
                </div>
                <div className={styles.header_context_3}>
                    <div className={styles.header_context_3_1}>
                        <button><FaSistrix /></button>
                    </div>
                    <div className={styles.header_context_3_2}>
                        <div className="custom-select">
                            <div className={styles.selected_option} onClick={toggleDropdown}>
                                {selectedOption && options.find(opt => opt.value === selectedOption)?.image && (
                                    <img src={options.find(opt => opt.value === selectedOption)!.image} alt={`${selectedOption} Image`} style={{ width: '2em' }} />
                                )}
                            </div>

                            <div className={styles.header_context_3_2_1}>
                                {isDropdownOpen && (
                                    <div className={styles.dropdown}>
                                        {options.map((option) => (
                                            <div key={option.value} onClick={() => {
                                                selectOption(option.value)
                                                handleSelectLangChange(option.value)
                                            }
                                            }>
                                                <img src={option.image} alt={`${option.label} Image`} style={{ width: '2em' }} />
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className={styles.header_context_3_3}>
                        <FaRegCircleUser />
                    </div>

                    <div className={styles.header_context_3_4}>
                        <label className={styles.switch}>
                            <input type="checkbox" />
                            <span className={styles.slider}></span>
                        </label>
                    </div>
                    <button onClick={logOutFuncComp}>Logout</button>

                </div>
            </div>
        </div>
    )
}

export default Header