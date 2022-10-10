
import React from "react";
import PropTypes from "prop-types";
import Sidebar from "../../Components/Sidebar";
import Header from "../../Components/Header";
import { FlexCol } from "../../styles";
import SideBarLogo from "../../assets/SideBarLogo.png";
import LGInvite from "../../assets/LGInvite.png";
import LGEncourage from "../../assets/LGEncourage.png";
import LGRemind from "../../assets/LGRemind.png";
import LGRead from "../../assets/LGRead.png";
import { StyledLink } from "../../Components/Sidebar/styles";
import { HeaderText, Wrapper, Button, Img } from "./styles";

const HomePage = (props) => {
    document.title = "Launch Guide";
    return (
        <FlexCol>
            <Header
                Content={
                    <HeaderText>
                        <img src={SideBarLogo} alt="Logo" width={400} />
                        Launch Guide
                    </HeaderText>
                }
            ></Header>


            <Wrapper>
                <div>
                    <h3>Invite Your Team</h3>
                    <p>
                        Click on the link below and invite the team <br />
                        members who directly report to you.
                    </p>
                    <StyledLink
                        active={window.location.pathname === "/invite"}
                        to="/invite"
                    >
                        <Button warning>Invite Your Team</Button>
                    </StyledLink>
                </div>
                <div>
                    <Img src={LGInvite} alt="LGInvite" />
                </div>
            </Wrapper>

            <Wrapper>
                <div>
                    <Img src={LGEncourage} alt="LGEncourage" />
                </div>
                <div>
                    <h3>Encourage Your Team to Accept Your Invitation</h3>
                    <p>
                        When they recieve your invitation, team members will be
                        prompted to complete their profiles. If a team member
                        hasn't created their profile within 24 hour, follow up
                        with them!
                    </p>
                </div>
            </Wrapper>

            <Wrapper>
                <div>
                    <h3>Remind Your Team</h3>
                    <p>
                        Every Friday, we'll automatically send your team members
                        an email reminding them to fill out their Weekly Report.
                        But we also encourage you to consistently request their
                        Weekly Reports so they realize the importance of this
                        new habit.
                    </p>
                </div>
                <div>
                    <Img src={LGRemind} alt="LGRemind" />
                </div>
            </Wrapper>

            <Wrapper>
                <div>
                    <Img src={LGRead} alt="LGRead" />
                </div>
                <div>
                    <h3>Read Their Reports</h3>
                    <p>
                        So aside some time on Monday to read all the reports.
                        Then reach out to any team members who need to be
                        acknowledged for a success or supported during a
                        difficult time. (And yes, we'll send you a reminder to
                        read your reports each week)
                    </p>
                </div>
            </Wrapper>
        </FlexCol>
    );
};

HomePage.propTypes = {};

export default HomePage;
