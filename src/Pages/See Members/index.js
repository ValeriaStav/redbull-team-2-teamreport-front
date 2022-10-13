import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header";
import { FlexCol } from "../../styles";
import HelpButton from "../../Components/HelpButton";
import FeedbackButton from "../../Components/FeedbackButton";
import InputField from "../../Components/InputField";
import YellowButton from "../../Components/YellowButton";

import {
    TitleContainer,
    Title,
    Subtitle,
    MembersContainer,
    MemberCard,
    MemberIcon,
    MemberName,
    EditButton,
} from "./styles";
import { useDispatch, useSelector } from "react-redux";

const memberMock = [
    {
        id: 1,
        firstName: "Alex",
        lastName: "Shneider",
        email: "email@anko.com",
        title: "CEO",
    },
    {
        id: 2,
        firstName: "Tomas",
        lastName: "Kitty",
        email: "email@anko.com",
        title: "CTO",
    },
    {
        id: 3,
        firstName: "Jerry",
        lastName: "Sneaks",
        email: "email@anko.com",
        title: "Developer",
    },
    {
        id: 4,
        firstName: "Silvester",
        lastName: "V'Stolovoy",
        email: "email@anko.com",
        title: "QA assistant",
    },
];

const SeeMembers = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const teamId = useSelector( (state) => state.usersReducer.currentUserCommand)

    const handleEditClick = (itemDetails) => {
        navigate(`/edit-member/${itemDetails.id}`, { state: itemDetails });
    };
    useEffect(() => {
        dispatch({ type: "", payload: { teamId } })
    },[])

    return (
        <FlexCol>
            <Header
                Content={
                    <TitleContainer>
                        <Title>ANKO Technology Corp</Title>
                        <Subtitle>Joined January 2020</Subtitle>
                    </TitleContainer>
                }
            />
            <HelpButton />
            <FeedbackButton />
            <MembersContainer>
                {memberMock.map((item) => (
                    <MemberCard key={item.id}>
                        <div>
                            <MemberIcon>
                                {`${item.firstName[0]}${item.lastName[0]}`}
                            </MemberIcon>
                            <MemberName>{`${item.firstName} ${item.lastName}`}</MemberName>
                        </div>
                        <EditButton onClick={() => handleEditClick(item)}>
                            Edit
                        </EditButton>
                    </MemberCard>
                ))}
            </MembersContainer>
        </FlexCol>
    );
};

export default SeeMembers;
