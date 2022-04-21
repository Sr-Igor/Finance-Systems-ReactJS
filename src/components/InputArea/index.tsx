import { Item } from '../../types/Item'
import * as C from './style'
import { categories } from '../../data/categories'
import { ButtonHTMLAttributes, ChangeEvent, useState } from 'react'

type Props = {
    onAdd: (item : Item) => void
}

export const InputArea = ({onAdd}: Props) => {

    const [date, setDate] = useState("")
    const [category, setCategory] = useState("")
    const [title, setTitle] = useState("")
    const [value, setValue] = useState("")

    let categoriesType = []
    for (let i in categories){
        categoriesType.push(categories[i].title)
    }

    const handleDate = (e: ChangeEvent<HTMLInputElement>) => {
        setDate(e.target.value)
    }

    const handleCategory = (e: ChangeEvent<HTMLSelectElement>) => {
        setCategory(e.target.value)
    }

    const hadleTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)

    }

    const handleValue = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const newItem = (e: SubmitEvent) => {
        e.preventDefault()
        if(
            date == "" ||
            category == "" ||
            title == "" ||
            value == ""
        ){
            alert("Preencha todos os campos corretamente")
        }else{
            onAdd({
                date: new Date(date),
                category: category,
                title: title,
                value: Number(value),
            })

            setCategory("")
            setDate("")
            setTitle("")
            setValue("")
        }
    }

    return (
        <C.Container>
            <C.Form>
                <label>
                    Date
                    <input type="date" value={date} onChange={handleDate}/>
                </label>

                <label>
                    Category
                    <select onChange={handleCategory}>
                        <option></option>
                        {categoriesType.map((item, index) =>(
                            <option key={index}>{item}</option>
                        ))}
                    </select>
                </label>
                
                <label>
                    Title
                    <input type="text" value={title} onChange={hadleTitle}/>
                </label>
                
                <label>
                    Value
                    <input type="number" value={value} onChange={handleValue}/>
                </label>

               <button onClick={newItem}>+</button>
                
            </C.Form>
        </C.Container>
    )
}