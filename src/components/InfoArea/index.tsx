import * as C from './style'
import { FormatMonth } from '../../helpers/dataFilter'
import { ResumeItem } from '../ResumeItem'

type Props = {
    currentMonth: string
    changeMonth: (date : string) => void
    income: number
    expense: number
}

export const InfoArea = ({currentMonth, changeMonth, income, expense}: Props) =>  {

    const nextMonth = () => {
        let [year, month] = currentMonth.split("-")
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1)
        currentDate.setMonth(currentDate.getMonth() + 1)
        changeMonth(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`)
    }

    const previousMonth = () => {
        let [year, month] = currentMonth.split("-")
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1)
        currentDate.setMonth(currentDate.getMonth() - 1)
        changeMonth(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`)
    }

    return(
        <C.Container>
            <C.MonthArea>
                <C.MonthArrow onClick={previousMonth}>Previous</C.MonthArrow>
                <C.MonthTitle>{FormatMonth(currentMonth)}</C.MonthTitle>
                <C.MonthArrow onClick={nextMonth}>Next</C.MonthArrow>
            </C.MonthArea>
            <C.ResumeArea>
                <ResumeItem  title={"Income"} value={income}/>
                <ResumeItem  title={"Expense"} value={expense}/>
                <ResumeItem  
                title={"Balance"} 
                value={income - expense}
                color={(income - expense) < 0 ? "red" : "green"}
                />
            </C.ResumeArea>
        </C.Container>
    )
}