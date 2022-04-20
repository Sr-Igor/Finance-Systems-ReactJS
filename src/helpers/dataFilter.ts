import { Item } from '../types/Item'

export const getMonth = () => {
    let now = new Date
    return `${now.getFullYear()}-${now.getMonth() + 1}`
}

export const filteredListByMonth = (list: Item[], date: string) : Item[] => {
    let newList : Item[]  = []
    let [year, month] = date.split("-")

    for (let i in list){
        if(
            list[i].date.getFullYear() === Number(year) &&
            (list[i].date.getMonth() + 1) === Number(month)
        ){
            newList.push(list[i])
        }
    }
    return newList
}