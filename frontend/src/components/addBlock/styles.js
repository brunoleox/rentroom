import styled from "styled-components"

export const Container = styled.div`


    form {
    align-items: center;
    background-color: #FFF;
    border-radius: 10px;
    box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
    color: rgba(0, 0, 0, 0.87);
    display: flex;
    flex-direction: column;
    height: 300px;
    margin: auto;
    position: float;
    width:  500px;

    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 99999;
    -webkit-transition: opacity 400ms ease-in;
    -moz-transition: opacity 400ms ease-in;
    transition: opacity 400ms ease-in;
    }

    label{
        background-color: #2776d2;
        width: 100%;
        color: #FFF;
        font-weight: 500;
        font-size: 1.5rem;
        padding: 10px;
        border-radius: 10px 10px 0 ;
    }
    
    input {
        align-items: center;
        border: none;
        border-radius: 10px;
        box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
        color: #000;
        padding: 10px;
        margin-top: 15px;
        outline: 0;
        width: 450px;
        height: 50px;
        font-size: 1.1rem ;
    }

    button {
        background-color: #2776d2;
        border: none;
        border-radius: 10px;
        box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%);
        color: #FFF;
        cursor: pointer;
        padding: 10px;
        position: relative;
        top: 20px;
    }

`;