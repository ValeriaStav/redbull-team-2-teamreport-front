import styled from "styled-components";

export const HeaderText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    color: #fff;
    font-size: 2.5rem;
    font-weight: 450;
    font-family: Georgia, serif;
    h2 {
        margin: 0;
    }
    p {
        font-size: 1.5rem;
        margin: 0;
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: auto;
    margin-bottom: 5rem;
    padding-top: 5rem;
    h2 {
        width: 100%;
        justify-content: center;
        text-align: center;
        text-transform: uppercase;
        font-weight: bold;
        margin-top: 0;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 65%;
    margin: auto;
    margin-top: 3rem;
    font-size: 1.1rem;
    padding: 30px;
`;

export const Button = styled.button`
    float: right;
    color: white;
    background: #323232;
    font-size: 16px;
    font-weight: bold;
    min-height: 35px;
    margin: 10px 0;
    padding: 5px 20px;
    border: none;
    border-radius: 4px;
    align-self: right;

    &:hover {
        color: #323232;
        background: #ffca2c;
    }
`;

export const Row = styled.tr`
    width: 80%;
    height: 3rem;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 2px 4px;

    td {
        padding-left: 1rem;
        font-size: 1rem;
    }
`;

export const ProfileIcon = styled.div`
    background-color: #d5d9dc;
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 3px solid #fff;
    color: #323232;
    font-weight: bold;
`;
