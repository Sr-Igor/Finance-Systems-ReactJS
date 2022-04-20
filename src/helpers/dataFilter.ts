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

export const FormatDate = (date : Date) : string => {
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate(); 
    let FormatMonth = month < 10 ? "0" + month : month
    let FormatDay = day < 10 ? "0" + day : day
    return `${FormatMonth}-${FormatDay}-${year}`
}

export const FormatMonth = (currentMonth: string): string => {
    let months = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
    ]

    let [year, month] = currentMonth.split('-')
    return `${months[parseInt(month)- 1]} ${year}`
}