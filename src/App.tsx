import { useEffect, useState } from 'react'

import { getMonth, filteredListByMonth } from './helpers/dataFilter'

import { categories } from './data/categories'
import { items } from './data/items'
import { Category } from './types/Category'
import { Item } from './types/Item'

import * as C from './AppStyles'

import { TableArea } from './components/TableArea'

function App() {

  const [list, setList] = useState(items)
  const [filteredList, setFilteredList] = useState<Item[]>([])
  const [currentMonth, setCurrentMonth] = useState(getMonth())

  useEffect(()=>{
    setFilteredList(filteredListByMonth(list, currentMonth))
  }, [list, currentMonth])


  return(
      <C.Container>
        <C.Header>
          <h1>Finance Systms</h1>
        </C.Header>
        <C.Body>
          {/* {Info} */}

          {/* {Add} */}

          <TableArea list={filteredList}/>
        </C.Body>
      </C.Container>
  )
}

export default App
