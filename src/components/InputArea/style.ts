import styled from "styled-components";


export const Container = styled.div`
    margin: auto;
    background-color: white;
    margin-top: 20px;
    min-height: 80px;
    display: flex;
    align-items: center;
    border-radius: 5px;
    box-shadow: 0 0 5px black;
`

export const Form = styled.form`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 30px;
    align-items: center;

    label {
        display: flex;
        flex-direction: column;
        text-align: center;
        font-weight: bold;
        font-size: 20px;
    }

    input {
        outline: none;
        border: none;
        border: 1px solid #ddd;
        height: 20px;
        width: 150px;
    }

    select {
        outline: none;
        border: none;
        border: 1px solid #ddd;
        height: 20px;
        width: 150px;
    }

    button {
        background-color: #f5f5f5
        border: none;
        width: 100px;
        height: 30px;
        font-size: 15px;
    }
`
