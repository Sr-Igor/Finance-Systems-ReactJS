import { useEffect, useState } from 'react'

import { getMonth, filteredListByMonth } from './helpers/dataFilter'

import { categories } from './data/categories'
import { items } from './data/items'
import { Category } from './types/Category'
import { Item } from './types/Item'

import * as C from './AppStyles'

import { TableArea } from './components/TableArea'
import { InfoArea } from './components/InfoArea'

function App() {

  const [list, setList] = useState(items)
  const [filteredList, setFilteredList] = useState<Item[]>([])
  const [currentMonth, setCurrentMonth] = useState(getMonth())
  const [income, setIncome] = useState(0)
  const [expense, setExpense] = useState(0)

  useEffect(()=>{
    setFilteredList(filteredListByMonth(list, currentMonth))
  }, [list, currentMonth])

  useEffect(() => {
    let incomeCount = 0 
    let expanseCount = 0

    for (let i in filteredList){
      if(categories[filteredList[i].category].expense){
        expanseCount += filteredList[i].value
      }else{
        incomeCount += filteredList[i].value
      }

      setIncome(incomeCount)
      setExpense(expanseCount)
    }

  }, [filteredList])

  const ChangeCurrentMonth = (newDate: string) => {
    setCurrentMonth(newDate)
  }

  return(
      <C.Container>
        <C.Header>
          <h1>Finance Systms</h1>
        </C.Header>
        <C.Body>
          <InfoArea 
          currentMonth={currentMonth}
          changeMonth={ChangeCurrentMonth}
          income={income}
          expense={expense}

          />

          {/* {Add} */}

          <TableArea list={filteredList}/>
        </C.Body>
      </C.Container>
  )
}

export default App
