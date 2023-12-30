export interface InitialStateType {
    loading: boolean,
    error: string | null,

    restaurantsArr: Array<RestuarantsPicArr>,
    rentedRest: RestuarantsPicArr | null,
    guestsCount: string,
    danceRent: boolean
}

export interface RestuarantsPicArr {
    name: string,
    types: Array<RestuarantsPicArrType>,
    picture: string,
    bigPc: string
}

export interface RestuarantsPicArrType {
    minPrice: number,
    price: number,
    name: string
}

export interface SendingInfoType {
    restaurant: RestuarantsPicArr | null,
    guests: string,
    dance: boolean
}