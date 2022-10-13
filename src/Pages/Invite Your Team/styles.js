import styled from "styled-components";

export const HeaderText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    color: #fff;
    font-size: 3rem;
    font-weight: 650;
`;

export const AccordionItem = styled.div`
    box-sizing: border-box;
    width: 50%;
    min-width: 500px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
        rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
        rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
    border-radius: 0.375rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: stretch;
    margin: auto;
    margin-top: 20px;
    padding: 10px;
`;

export const FormItem = styled.form`
    width: 50%;
    min-width: 500px;
    display: flex;
    flex-direction: column;
    margin: auto;
    padding: 0.5rem 1rem;
`;

export const AccordionContent = styled.form`
    position: relative;
    display: block;
    padding: 0 0.5rem;
    text-decoration: none;
    background-color: #fff;
`;

export const Input = styled.input`
    display: block;
    width: 95%;
    margin: 0.5rem 0;
    padding: 0.5rem 0.5rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    appearance: none;
    border-radius: 0.375rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

    &:focus {
        outline: none;
        border-color: #ffc107;
        box-shadow: 0 0 7px #ffc107;
    }
`;

export const Button = styled.button`
    color: black;
    background: #ffc107;
    font-size: 16px;
    font-weight: bold;
    min-height: 35px;
    margin-top: 0.5rem;
    padding: 5px 20px;
    border: none;
    border-radius: 5px;
    align-self: left;

    &:hover {
        background: #ffca2c;
    }
`;
