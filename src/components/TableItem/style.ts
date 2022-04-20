import styled from "styled-components";

export const TableLine = styled.tr`

`

export const TableColumn = styled.td`
    padding: 10px 0;
`
export const TableCategory = styled.div<{bgColor : string}>`
    display: inline-block;
    padding: 5px 10px;
    border-radius: 5px;
    color: #FFF;
    background-color: ${props => props.bgColor};
`

export const Value =  styled.div<{expense : string}>`
    color: ${props => props.expense};
`