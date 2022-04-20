import styled from "styled-components"


export const Container = styled.div`
    background-color: #FFF;
    border-radius: 5px;
    box-shadow: 0 0 5px black;
    margin-top: -40px;
    min-height: 60px;
    display: flex;
    align-items: center;
    padding: 10px;
`

export const MonthArea = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
`

export const MonthArrow = styled.div`
    color: white;
    background-color: #536d88;
    padding: 5px 10px;
    min-width: 50px;
    text-align: center;
    border-radius: 5px;
    cursor: pointer;
    margin: 0 10px;

    &:hover{
        opacity: 0.8;
    }
`

export const MonthTitle = styled.div`
    min-width: 120px;
    text-align: center;
`

export const ResumeArea = styled.div`
    display: flex;
    flex: 2
`