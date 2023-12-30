export interface InitialStateType {
    loading: boolean,
    error: string | null,
    isAuth: boolean,
    allUsersInfo: Array<UserInfoType>
    // allUsersInfo: any

}


export interface UserInfoType {
    _id: string,
    __v: string,
    username: string,
    email: string,
    password: string,
}