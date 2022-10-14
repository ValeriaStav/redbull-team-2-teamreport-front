import styled from "styled-components";

export const HeaderText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
    font-size: 2.5rem;
    font-weight: 450;
    h2 {
        margin: 5px;
        font-family: Georgia, serif;
    }
    p {
        font-size: 1.1rem;
        margin: 0;
    }
`;

export const ProfileIcon = styled.div`
    background-color: #d5d9dc;
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 3px solid #fff;
    color: #323232;
    font-weight: bold;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: auto;
    padding-top: 5rem;

    h2 {
        text-align: center;
        text-transform: uppercase;
        font-weight: bold;
    }
`;


export const HrShort = styled.hr`
    width: 45px;
    height: 7px;
    margin: auto;
    border: none;
    background: #fbd214;
`;

export const Button = styled.button`
    float: right;
    color: white;
    background: #323232;
    font-size: 16px;
    font-weight: bold;
    min-height: 35px;
    margin: 75px 0 10px;
    padding: 5px 20px;
    border: none;
    border-radius: 4px;
    align-self: right;

    &:hover {
        color: #323232;
        background: #ffca2c;
    }
`;

export const THead = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    min-height: 60px;
    border-radius: 4px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
        rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    margin-bottom: 10px;

    th {
        text-align: center;
        font-size: 1.2rem;
    }
`;

export const RowExpand = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    min-height: 11vh;
    background-color: white;
    border: none;
    border-radius: 4px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
        rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    margin-bottom: 10px;

    td {
        display: flex;
        vertical-align: inherit;
        padding: 5px 10px;
        text-align: center;
        font-size: 1.2rem;
    }
`;

export const RowCollapseHead = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    min-height: 11vh;
    border-radius: 4px 4px 0 0;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
        rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    background-color: #323232;

    td {
        padding-left: 1rem;
        font-size: 1.2rem;
        color: #ddb425;
    }
`;

export const RowCollapseBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    min-height: 11vh;
    border-radius: 0 0 4px 4px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
        rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    margin-bottom: 10px;

    td {
        padding-left: 1rem;
        font-size: 1.2rem;
    }
`;

export const RowCollapse = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    margin-bottom: 10px;
`;

export const VeryHappyCell = styled.div`
    min-width: 25%;
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    padding: 10px 20px;
    background-color: #73df8e;
    border-radius: 7px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
        rgba(0, 0, 0, 0.22) 0px 10px 10px;
    margin: 10px 25px;
    font-weight: bold;
    letter-spacing: 1px;
    color: #fff;
    text-transform: uppercase;
`;

export const HappyCell = styled.div`
    min-width: 25%;
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    padding: 10px 20px;
    background-color: #9de6ad;
    border-radius: 7px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
        rgba(0, 0, 0, 0.22) 0px 10px 10px;
    margin: 10px 25px;
    font-weight: bold;
    letter-spacing: 1px;
    color: #fff;
    text-transform: uppercase;
`;

export const NeutralCell = styled.div`
    min-width: 25%;
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    padding: 10px 20px;
    background-color: #ffda91;
    border-radius: 7px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
        rgba(0, 0, 0, 0.22) 0px 10px 10px;
    margin: 10px 25px;
    font-weight: bold;
    letter-spacing: 1px;
    color: #fff;
    text-transform: uppercase;
`;

export const SadCell = styled.div`
    min-width: 25%;
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    padding: 10px 20px;
    background-color: #f8a86f;
    border-radius: 7px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
        rgba(0, 0, 0, 0.22) 0px 10px 10px;
    margin: 10px 25px;
    font-weight: bold;
    letter-spacing: 1px;
    color: #fff;
    text-transform: uppercase;
`;

export const VerySadCell = styled.div`
    min-width: 25%;
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    padding: 10px 20px;
    background-color: #ee8a82;
    border-radius: 7px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
        rgba(0, 0, 0, 0.22) 0px 10px 10px;
    margin: 10px 25px;
    font-weight: bold;
    letter-spacing: 1px;
    color: #fff;
    text-transform: uppercase;
`;

export const TextCell = styled.div`
    font-size: 1.2em;
    font-family: Arial, Helvetica, sans-serif;
    font-style: italic;
    color: #d4cac7;
`;

export const TextRow = styled.div`
    font-size: 1.1em;
    letter-spacing: 1px;
    padding: 0 25px;
`;
