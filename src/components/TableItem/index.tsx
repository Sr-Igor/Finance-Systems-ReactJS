import * as C from './style'
import { Item } from '../../types/Item'
import { FormatDate } from '../../helpers/dataFilter'
import { categories } from '../../data/categories'

type Props = {
    item: Item
}

export const TableItem  = ({item} : Props) => {

    return(
        <C.TableLine>
            <C.TableColumn>{FormatDate(item.date)}</C.TableColumn>
            <C.TableColumn>
                <C.TableCategory bgColor={categories[item.category].color}>
                    {categories[item.category].title}    
                </C.TableCategory>    
            </C.TableColumn>
            <C.TableColumn>{item.title}</C.TableColumn>
            <C.TableColumn>
                <C.Value expense={categories[item.category].expense ? "red" : "green"}> 
                U$ {item.value}
                </C.Value>
            </C.TableColumn>
        </C.TableLine>
    )
} 