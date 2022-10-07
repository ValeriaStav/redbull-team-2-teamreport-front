import styled from "styled-components";

export const HeaderText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    color: #fff;
    font-size: 2.5rem;
    font-weight: 450;
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
    color: ${(props) => (props.warning ? "black" : "#ffc107")};
    background: ${(props) => (props.warning ? "#ffc107" : "black")};
    font-size: 16px;
    font-weight: bold;
    min-height: 40px;
    margin: 10px -10px;
    padding: 5px 20px;
    border: none;
    border-radius: 5px;
    align-self: left;

    &:hover {
        background: #ffca2c;
    }
`;

export const Img = styled.img`
    width: 100;
`;
