import { RestuarantsPicArr } from "entities/weddingR/weddingReducerTs.interface";

export const searchRestaurantFunc = (str: string, arr: Array<RestuarantsPicArr>) => {
    console.log(str, arr, 'str,arrstr,arrstr,arr')
    let data = arr.filter((val) => val.name.includes(str))
    return data
} 