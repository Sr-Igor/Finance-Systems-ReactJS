import { useEffect, useState } from 'react'

import { getMonth, filteredListByMonth } from './helpers/dataFilter'

import { categories } from './data/categories'
import { items } from './data/items'
import { Category } from './types/Category'
import { Item } from './types/Item'

import * as C from './AppStyles'

const [list, setList] = useState(items)
const [filteredList, setFilteredList] = useState<Item[]>([])
const [currentMonth, setCurrentMonth] = useState(getMonth())

useEffect(()=>{
  setFilteredList(filteredListByMonth(list, currentMonth))
}, [list, currentMonth])


function App() {
  return(
      <C.Container>
        <C.Header>
          <h1>Finance Systms</h1>
        </C.Header>
        <C.Body>
          
          

        </C.Body>
      </C.Container>
  )
}

export default App
