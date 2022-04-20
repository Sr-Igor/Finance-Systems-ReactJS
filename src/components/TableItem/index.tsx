import * as C from './style'
import { Item } from '../../types/Item'
import { FormatDate } from '../../helpers/dataFilter'

type Props = {
    item: Item
}

export const TableItem  = ({item} : Props) => {

    return(
        <C.TableLine>
            <C.TableColumn>{FormatDate(item.date)}</C.TableColumn>
            <C.TableColumn>{item.category}</C.TableColumn>
            <C.TableColumn>{item.title}</C.TableColumn>
            <C.TableColumn>U$ {item.value}</C.TableColumn>
        </C.TableLine>
    )
} 