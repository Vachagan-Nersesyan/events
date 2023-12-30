import React from 'react'
import styles from './registerStl.module.css'
import { OwnProps } from './registerTs.interface'

const RegisterComp: React.FC<OwnProps> = () => {
    return (
        <div>
            Register
            <form action="/register" method='POST' className={styles.f_styles}>
                <div>
                    Name
                    <input type="text" name='username' />
                </div>
                <div>
                    Email
                    <input type="email" name='email' />
                </div>
                <div>
                    Name
                    <input type="password" name='password' />
                </div>
                <button type='submit'>Send</button>
            </form>
        </div>
    )
}

export default RegisterComp