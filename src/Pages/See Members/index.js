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
    const teamId = useSelector((state) => state.usersReducer.currentUserCommand)
    const teamMembers = useSelector((state) => state.teamReducer.members)
    const companyName = useSelector((state) => state.usersReducer.currentUserCompanyName)
    const profileId = useSelector((state) => state.usersReducer.currentUserId)


    useEffect(() => {
        if (!companyName) {
            dispatch({ type: "FETCH_COMPANY_DATA", payload: teamId })
        }
    }, [teamId, companyName])

    const handleEditClick = (itemDetails) => {
    if(String(profileId) === String(itemDetails?.userId)) {
            navigate(`/my-profile`);
        } else {
            navigate(`/edit-member/${itemDetails?.userId}`, { state: itemDetails?.userId });
        }
    };

    useEffect(() => {
        dispatch({ type: "FETCH_TEAM_MEMBERS", payload: { teamId } })
    }, [])

    return (
        <FlexCol>
            <Header
                Content={
                    <TitleContainer>
                        <Title>{companyName}</Title>
                        <Subtitle>Joined October 2022</Subtitle>
                    </TitleContainer>
                }
            />
            <HelpButton />
            <FeedbackButton />
            <MembersContainer>
                {teamMembers?.length ? teamMembers.map((item) => (
                    <MemberCard key={item?.userId}>
                        <div>
                            <MemberIcon>
                                {`${item?.userName.split(' ').reduce((acc, value) => acc + value[0], '')}`}
                            </MemberIcon>
                            <MemberName>{`${item?.userName.split(' ')[0]} ${item?.userName.split(' ')[1]}`}</MemberName>
                        </div>
                        <EditButton onClick={() => handleEditClick(item)}>
                            Edit
                        </EditButton>
                    </MemberCard>
                )) : null}
            </MembersContainer>
        </FlexCol>
    );
};

export default SeeMembers;
