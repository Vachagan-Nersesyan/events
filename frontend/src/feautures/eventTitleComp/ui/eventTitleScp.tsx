import React from 'react'
import styles from './eventTitleStl.module.css'
import { OwnProps } from './eventTitleTs.interface'

const bigBg = '/images/eventsBigPic/1.png'


const EventTitle: React.FC<OwnProps> = () => {
    return (
        <div style={{ backgroundImage: `url(${bigBg})` }} className={styles.events_item_content_title}>
            <div className={styles.events_item_content_overlay}>
                <div className={styles.events_item_content_titleitm}>
                    Հարսանիքի կազմակերպում
                </div>
            </div>
        </div>
    )
}

export default EventTitle