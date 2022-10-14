import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Formik, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import  Select  from "react-select"

import Header from "../../Components/Header";
import { FlexCol } from "../../styles";
import HelpButton from "../../Components/HelpButton";
import FeedbackButton from "../../Components/FeedbackButton";
import TeamMemberСircle from "../../Components/TeamMemberCircle"
import validate, {
    moreThanTwo,
    startsFromCapitalize,
} from "../../utils/validators";
import InputField from "../../Components/InputField";
import { css } from "styled-components";
import YellowButton from "../../Components/YellowButton";
import Error from "../../Components/Error";
import WhiteButton from "../../Components/WhiteButton";
import Modal from "../../Components/Modal";

import {
    TitleContainer,
    Title,
    Subtitle,
    MemberIcon,
    Container,
    Divider,
    MembersListWrapper
} from "./styles";

const stylesOverride = {
    border: "1px solid grey",
};

const EditMember = () => {
    const { state: userId } = useLocation()
    const [isOpen, setOpen] = useState(false)
    const [membersToRender, setMembersToRender] = useState([])
    const dispatch = useDispatch();
    const teamId = useSelector((state) => state.usersReducer.currentUserCommand)
    const members = useSelector((state) => state.teamReducer.members) || []
    const { firstName = '', lastName = '', title } = members?.length ? members.find(item => item.userId === userId) : {}
    const link = `${window.location.origin}/team-member-registration?teamId=${teamId}`
    const [modalMessage, setModalMessage] = useState({
        title: "",
        subtitle: "",
        tip: "",
    });
    const selectOptions = members.map((item) => ({
        value: item.userId,
        label: item.userName,
    }))

    useEffect(() => {
        dispatch({ type: "FETCH_TEAM_MEMBERS", payload: { teamId } })
    }, [])

    useEffect(() => {
        if (members.length) {
            setMembersToRender([...members])
        }
    }, [members])

    const handleSaveClick = (submitValues) => {
        dispatch({ type: "EDIT_USER", payload: { ...submitValues, userId, isOtherMember: true } })
    }

    const handleTeamMemberClick = (id) => {
        setMembersToRender(membersToRender.filter((item) => item.userId !== id))
    }

    const handleSelectChange = (values) => {
        if (membersToRender.findIndex((item) => item.userId === values.value) + 1) return
        setMembersToRender([...membersToRender, members.find((item) => item.userId === values.value)])
    }

    const handleOpenModalClick = (type) => {
        if (type === "leader") {
            setModalMessage({
                title: "Edit Leader(s)",
                subtitle:
                    "By default, the person who sent oyu the invite will receive your weekly report. You may also select the person you report to directly as an additional leader.",
                tip: "Pro Tip: You can change who sees your report in your profile settings.",
                members
            });
        }
        if (type === "member") {
            setModalMessage({
                title: "Edit Member(s)",
                subtitle: "By default, the person who sent oyu the invite will receive your weekly report. You may also select the person you report to directly as an additional leader.",
                tip: "Pro Tip: You can change whose reports to see in your profile settings",
                members
            });
        }
        setOpen(true);
    };

    return (
        <FlexCol>
            <Header
                Content={
                    <TitleContainer>
                        <MemberIcon>{`${firstName[0]}${lastName[0]}`}</MemberIcon>
                        <Title>{`${firstName} ${lastName}`}</Title>
                    </TitleContainer>
                }
            />
            <HelpButton />
            <FeedbackButton />
            <Container>
                <span
                    style={{
                        fontWeight: 900,
                        fontSize: "40px",
                        marginBottom: "15px",
                    }}
                >
                    Edit {firstName}'s information
                </span>
                <span style={{ fontSize: "14px" }}>
                    You may assign leaders or team members to this person, as
                    well as deactivate their account if they no longer work on
                    your organization.
                </span>
                <Divider>Basic Profile information</Divider>
                <Formik
                    onSubmit={handleSaveClick}
                    initialValues={{
                        firstName: firstName,
                        lastName: lastName,
                        title: title,
                    }}
                    enableReinitialize
                    validate={(values) =>
                        validate([
                            {
                                name: "firstName",
                                value: values.firstName,
                                functions: [moreThanTwo, startsFromCapitalize],
                            },
                            {
                                name: "lastName",
                                value: values.lastName,
                                functions: [moreThanTwo, startsFromCapitalize],
                            },
                            {
                                name: "title",
                                value: values.title,
                                functions: moreThanTwo,
                            },
                        ])
                    }
                >
                    {({ values, handleSubmit, handleChange }) => (
                        <form onSubmit={handleSubmit}>
                            <InputField
                                name="firstName"
                                label="First Name"
                                type="text"
                                onChange={handleChange}
                                initialValue={values.firstName}
                                stylesOverride={{
                                    ...stylesOverride,
                                    width: "200px",
                                }}
                                component={InputField}
                            />
                            <ErrorMessage name="firstName" component={Error} />
                            <InputField
                                name="lastName"
                                label="Last Name"
                                type="text"
                                onChange={handleChange}
                                initialValue={values.lastName}
                                stylesOverride={{
                                    ...stylesOverride,
                                    width: "300px",
                                }}
                                component={InputField}
                            />
                            <ErrorMessage name="lastName" component={Error} />
                            <InputField
                                name="title"
                                label="Title"
                                type="text"
                                onChange={handleChange}
                                initialValue={values.title}
                                stylesOverride={{
                                    ...stylesOverride,
                                    width: "400px",
                                }}
                                component={InputField}
                            />
                            <ErrorMessage name="title" component={Error} />
                            <YellowButton
                                type="submit"
                                style={{ width: "70px" }}
                            >
                                Save
                            </YellowButton>
                        </form>
                    )}
                </Formik>
                <div>
                    <Divider>{firstName} reports to the following leaders:</Divider>
                    <MembersListWrapper>
                        {members.map((member) =>
                            <TeamMemberСircle name={member.userName} />
                        )}
                    </MembersListWrapper>
                </div>
                <WhiteButton
                    onClick={() => handleOpenModalClick("leader")}
                    style={{ width: "200px" }}
                >
                    Edit Leader(s)
                </WhiteButton>
                <div>
                    <Divider>The following members report to {firstName}:</Divider>
                    <MembersListWrapper>
                        {members.map((member) =>
                            <TeamMemberСircle name={member.userName} />
                        )}
                    </MembersListWrapper>
                </div>
                <WhiteButton
                    onClick={() => handleOpenModalClick("member")}
                    style={{ width: "200px" }}
                >
                    Edit Member(s)
                </WhiteButton>
                <div>
                    <Divider>{firstName}'s invite link</Divider>
                    <InputField
                        placeholder='Invite Link'
                        value={link}
                        type='text'
                    />
                    <YellowButton onClick={() => { navigator.clipboard.writeText(link) }}> Copy Link</YellowButton>
                </div>
                {isOpen && (
                    <Modal setIsOpen={setOpen}>
                        <div
                            style={{
                                fontWeight: 900,
                                fontSize: "40px",
                                marginBottom: "15px",
                            }}
                        >
                            {modalMessage.title}
                        </div>
                        <div style={{ fontSize: "14px" }}>
                            {modalMessage.subtitle}
                        </div>
                        <div style={{ fontSize: "14px", marginTop: "20px" }}>
                            {modalMessage.tip}
                        </div>
                        <div style={{ paddingTop: "5px" }}>
                            <MembersListWrapper>
                                {membersToRender?.map((member) =>
                                    <TeamMemberСircle name={member.userName} key={member.userId} onClick={() => handleTeamMemberClick(member.userId)}/>
                                )}
                            </MembersListWrapper>
                        </div>
                        <Select
                            onChange={handleSelectChange}
                            isSearchable
                            name="members"
                            options={selectOptions}
                        />
                        <YellowButton style={{ marginTop: "10px" }}>Save Changes</YellowButton>
                    </Modal>
                )}
            </Container>
        </FlexCol>
    );
};

EditMember.propTypes = {};

export default EditMember;
