import styled from "styled-components";
import { FlexCol } from "../../styles";

export const TitleContainer = styled.div`
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.div`
    font-size: 48px;
    font-weight: 600;
`;

export const Subtitle = styled.div`
    font-size: 12px;
`;

export const MemberIcon = styled.div`
    padding: 20px;
    border-radius: 100%;
    border: 2px solid white;
    background-color: #dddddd;
    font-size: 32px;
    color: black;
    margin-right: 20px;
`;

export const Container = styled(FlexCol)`
    padding: 50px 100px;
`;

export const Divider = styled.div`
    width: 100%;
    border-bottom: 1px solid grey;
    margin: 20px 0;
    font-weight: 800;
    text-transform: uppercase;
`;

export const MembersListWrapper = styled.div`
    display: flex;
    flex-direction: row;
    padding: 0 2px 8px 0;
`
