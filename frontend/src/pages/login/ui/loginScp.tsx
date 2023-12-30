import React, { ChangeEvent, FormEvent, FormEventHandler, useEffect, useState } from 'react'
import styles from './loginStl.module.css'
import { OwnProps } from './loginTs.interface'
import { useDispatch, useSelector } from 'react-redux'
import { loginInfoFunc } from 'entities/loginR/loginReducer'
import { AppStateType, useAppDispatch } from 'entities/store/redux-store'
import { getAllInfo } from 'entities/loginR/loginReducerThunk'
import { NavLink, useNavigate } from 'react-router-dom'

const LoginComp: React.FC<OwnProps> = () => {

    const navigate = useNavigate()

    const dispatch = useDispatch()
    const aDispatch = useAppDispatch()


    const isAuth = useSelector((state: AppStateType) => state.loginR.isAuth)
    const [authHk, setAuthHk] = useState<boolean>(isAuth)
    const [firstT, setFirstT] = useState<boolean>(true)

    useEffect(() => {
        setAuthHk(isAuth)
    }, [isAuth])


    useEffect(() => {
        console.log('ccc')
        aDispatch(getAllInfo())
    }, [])

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Do something with the input values, for example, log them
        // console.log('Form Data:', formData);
        dispatch(loginInfoFunc({ email: formData.email, password: formData.password }))

        setFirstT(false)
    };

    if (authHk) {
        navigate('/')
    }


    return (
        <div>
            Login
            <form onSubmit={handleSubmit} className={styles.f_styles}>
                <div>
                    Email
                    <input type="email" name='email' onChange={handleInputChange} required />
                </div>
                <div>
                    Name
                    <input type="password" name='password' onChange={handleInputChange} required />
                </div>
                <button type="submit" >
                    Send
                </button>
            </form>
            <div>
                {
                    !authHk && !firstT
                        ?
                        <div>
                            Pleae try again !!
                        </div>
                        :
                        null
                }
            </div>
            <NavLink to={'/register'}>
                Register
            </NavLink>
        </div>
    )
}

export default LoginComp