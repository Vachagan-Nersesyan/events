export interface InitialStateType {
    loading: boolean,
    error: string | null,

    restaurantsArr: Array<RestuarantsPicArr>,
    rentedRest: RestuarantsPicArr | null
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
