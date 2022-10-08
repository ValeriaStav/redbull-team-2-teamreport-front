import React, { useState } from "react";
import Header from "../../Components/Header";
import { FlexCol } from "../../styles";
import {
    Container,
    HrShort,
    THead,
    RowExpand,
    RowCollapseHead,
    RowCollapse,
    RowCollapseBody,
    Button,
    ProfileIcon,
    HeaderText,
    VeryHappyCell,
    HappyCell,
    NeutralCell,
    SadCell,
    VerySadCell,
    TextRow,
    TextCell,
} from "./styles";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import VeryHappy from "../../assets/very-happy.svg";
import Happy from "../../assets/happy.svg";
import Neutral from "../../assets/neutral.svg";
import Sad from "../../assets/sad.svg";
import VerySad from "../../assets/very-sad.svg";

const MyReports = () => {
    const [isActive, setIsActive] = useState(false);

    document.title = "My Reports";
    return (
        <FlexCol>
            <Header
                Content={
                    <HeaderText>
                        <ProfileIcon>
                            <h5>TM</h5>
                        </ProfileIcon>
                        <h2>Team Member</h2>
                        <p>team-member@ankosoftware.com</p>
                    </HeaderText>
                }
            ></Header>
            <Container>
                <h2>Past Weekly Reports</h2>
                <div>
                    <HrShort />
                </div>
                <div>
                    <Button onClick={() => isActive(!isActive)}>
                        Expand All
                    </Button>
                </div>

                <THead>
                    <th width="60%"></th>
                    <th width="10%">Morale</th>
                    <th width="10%">Stress</th>
                    <th width="10%">Workload</th>
                    <th width="15%"></th>
                </THead>

                <RowExpand onClick={() => setIsActive(!isActive)}>
                    <td width="60%">
                        <h4>October 10 - October 16, 2022</h4>
                    </td>
                    <td width="10%">
                        <img src={Happy} alt="Happy" />
                    </td>
                    <td width="10%">
                        <img src={Neutral} alt="Neutral" />
                    </td>
                    <td width="10%">
                        <img src={Sad} alt="Sad" />
                    </td>
                    <td width="10%">
                        Expand <AiFillCaretDown />
                    </td>
                </RowExpand>
                {isActive && (
                    <>
                        <tbody id="collapse1">
                            <RowCollapseHead>
                                <td width="90%" pl-3>
                                    <h4>October 10 - October 16, 2022</h4>
                                </td>
                                <td
                                    width="10%"
                                    onClick={() => setIsActive(!isActive)}
                                >
                                    Collaps <AiFillCaretUp />
                                </td>
                            </RowCollapseHead>
                            <RowCollapseBody>
                                <RowCollapse>
                                    <HappyCell>
                                        <td>
                                            <img src={Happy} alt="Happy" />
                                        </td>
                                        <td>Morale</td>
                                    </HappyCell>
                                    <TextCell>
                                        There were no comments added about
                                        morale.
                                    </TextCell>
                                </RowCollapse>
                                <RowCollapse>
                                    <NeutralCell>
                                        <td>
                                            <img src={Neutral} alt="Neutral" />
                                        </td>
                                        <td>Stress</td>
                                    </NeutralCell>
                                    <TextCell>
                                        There were no comments added about
                                        stress.
                                    </TextCell>
                                </RowCollapse>
                                <RowCollapse>
                                    <SadCell>
                                        <td>
                                            <img src={Sad} alt="Sad" />
                                        </td>
                                        <td>Workload</td>
                                    </SadCell>
                                    <TextCell>
                                        There were no comments added about
                                        workload.
                                    </TextCell>
                                </RowCollapse>
                                <RowCollapse>
                                    <TextRow>
                                        <h4>Weekly High</h4>
                                        <p>
                                            Identified our goul and priorities
                                        </p>
                                    </TextRow>
                                </RowCollapse>
                                <RowCollapse>
                                    <TextRow>
                                        <h4>Weekly Low</h4>
                                        <p>Cold weather</p>
                                    </TextRow>
                                </RowCollapse>
                                <RowCollapse>
                                    <TextRow>
                                        <h4>Anything Else</h4>
                                        <p>
                                            Looking forward to launching our
                                            first product
                                        </p>
                                    </TextRow>
                                </RowCollapse>
                            </RowCollapseBody>
                        </tbody>
                    </>
                )}
                <RowExpand
                    onClick={() => setIsActive(!isActive)}
                    id="collapse2"
                >
                    <td width="60%" pl-3>
                        <h4>October 3 - October 9, 2022</h4>
                    </td>
                    <td width="10%">
                        <img src={Happy} alt="Happy" />
                    </td>
                    <td width="10%">
                        <img src={VeryHappy} alt="VeryHappy" />
                    </td>
                    <td width="10%">
                        <img src={Sad} alt="Sad" />
                    </td>
                    <td width="10%">
                        Expand <AiFillCaretDown />
                    </td>
                </RowExpand>
                {isActive && (
                    <>
                        <tbody>
                            <RowCollapseHead>
                                <td width="90%" pl-3>
                                    <h4>October 10 - October 16, 2022</h4>
                                </td>
                                <td
                                    width="10%"
                                    onClick={() => setIsActive(!isActive)}
                                >
                                    Collaps <AiFillCaretUp />
                                </td>
                            </RowCollapseHead>
                            <RowCollapseBody>
                                <RowCollapse>
                                    <HappyCell>
                                        <td>
                                            <img src={Happy} alt="Happy" />
                                        </td>
                                        <td>Morale</td>
                                    </HappyCell>
                                    <TextCell>
                                        There were no comments added about
                                        morale.
                                    </TextCell>
                                </RowCollapse>
                                <RowCollapse>
                                    <VeryHappyCell>
                                        <td>
                                            <img
                                                src={VeryHappy}
                                                alt="VeryHappy"
                                            />
                                        </td>
                                        <td>Stress</td>
                                    </VeryHappyCell>
                                    <TextCell>
                                        There were no comments added about
                                        stress.
                                    </TextCell>
                                </RowCollapse>
                                <RowCollapse>
                                    <SadCell>
                                        <td>
                                            <img src={Sad} alt="Sad" />
                                        </td>
                                        <td>Workload</td>
                                    </SadCell>
                                    <TextCell>
                                        There were no comments added about
                                        workload.
                                    </TextCell>
                                </RowCollapse>
                                <RowCollapse>
                                    <TextRow>
                                        <h4>Weekly High</h4>
                                        <p>
                                            Identified our goul and priorities
                                        </p>
                                    </TextRow>
                                </RowCollapse>
                                <RowCollapse>
                                    <TextRow>
                                        <h4>Weekly Low</h4>
                                        <p>Cold weather</p>
                                    </TextRow>
                                </RowCollapse>
                                <RowCollapse>
                                    <TextRow>
                                        <h4>Anything Else</h4>
                                        <p>
                                            Looking forward to launching our
                                            first product
                                        </p>
                                    </TextRow>
                                </RowCollapse>
                            </RowCollapseBody>
                        </tbody>
                    </>
                )}
                <RowExpand
                    onClick={() => setIsActive(!isActive)}
                    id="collapse3"
                >
                    <td width="60%" pl-3>
                        <h4>September 26 - October 2, 2022</h4>
                    </td>
                    <td width="10%">
                        <img src={Neutral} alt="Neutral" />
                    </td>
                    <td width="10%">
                        <img src={Happy} alt="Happy" />
                    </td>
                    <td width="10%">
                        <img src={Happy} alt="Happy" />
                    </td>
                    <td width="10%">
                        Expand <AiFillCaretDown />
                    </td>
                </RowExpand>
                {isActive && (
                    <>
                        <tbody>
                            <RowCollapseHead>
                                <td width="90%" pl-3>
                                    <h4>October 10 - October 16, 2022</h4>
                                </td>
                                <td
                                    width="10%"
                                    onClick={() => setIsActive(!isActive)}
                                >
                                    Collaps <AiFillCaretUp />
                                </td>
                            </RowCollapseHead>
                            <RowCollapseBody>
                                <RowCollapse>
                                    <NeutralCell>
                                        <td>
                                            <img src={Neutral} alt="Neutral" />
                                        </td>
                                        <td>Morale</td>
                                    </NeutralCell>
                                    <TextCell>
                                        There were no comments added about
                                        morale.
                                    </TextCell>
                                </RowCollapse>
                                <RowCollapse>
                                    <HappyCell>
                                        <td>
                                            <img src={Happy} alt="Happy" />
                                        </td>
                                        <td>Stress</td>
                                    </HappyCell>
                                    <TextCell>
                                        There were no comments added about
                                        stress.
                                    </TextCell>
                                </RowCollapse>
                                <RowCollapse>
                                    <HappyCell>
                                        <td>
                                            <img src={Happy} alt="Happy" />
                                        </td>
                                        <td>Workload</td>
                                    </HappyCell>
                                    <TextCell>
                                        There were no comments added about
                                        workload.
                                    </TextCell>
                                </RowCollapse>
                                <RowCollapse>
                                    <TextRow>
                                        <h4>Weekly High</h4>
                                        <p>
                                            Identified our goul and priorities
                                        </p>
                                    </TextRow>
                                </RowCollapse>
                                <RowCollapse>
                                    <TextRow>
                                        <h4>Weekly Low</h4>
                                        <p>Cold weather</p>
                                    </TextRow>
                                </RowCollapse>
                                <RowCollapse>
                                    <TextRow>
                                        <h4>Anything Else</h4>
                                        <p>
                                            Looking forward to launching our
                                            first product
                                        </p>
                                    </TextRow>
                                </RowCollapse>
                            </RowCollapseBody>
                        </tbody>
                    </>
                )}
                <RowExpand
                    onClick={() => setIsActive(!isActive)}
                    id="collapse4"
                >
                    <td width="60%" pl-3>
                        <h4>September 19 - September 25, 2022</h4>
                    </td>
                    <td width="10%">
                        <img src={Happy} alt="Happy" />
                    </td>
                    <td width="10%">
                        <img src={Neutral} alt="Neutral" />
                    </td>
                    <td width="10%">
                        <img src={VerySad} alt="VerySad" />
                    </td>
                    <td width="10%">
                        Expand <AiFillCaretDown />
                    </td>
                </RowExpand>
                {isActive && (
                    <>
                        <tbody>
                            <RowCollapseHead>
                                <td width="90%" pl-3>
                                    <h4>October 10 - October 16, 2022</h4>
                                </td>
                                <td
                                    width="10%"
                                    onClick={() => setIsActive(!isActive)}
                                >
                                    Collaps <AiFillCaretUp />
                                </td>
                            </RowCollapseHead>
                            <RowCollapseBody>
                                <RowCollapse>
                                    <HappyCell>
                                        <td>
                                            <img src={Happy} alt="Happy" />
                                        </td>
                                        <td>Morale</td>
                                    </HappyCell>
                                    <TextCell>
                                        There were no comments added about
                                        morale.
                                    </TextCell>
                                </RowCollapse>
                                <RowCollapse>
                                    <NeutralCell>
                                        <td>
                                            <img src={Neutral} alt="Neutral" />
                                        </td>
                                        <td>Stress</td>
                                    </NeutralCell>
                                    <TextCell>
                                        There were no comments added about
                                        stress.
                                    </TextCell>
                                </RowCollapse>
                                <RowCollapse>
                                    <VerySadCell>
                                        <td>
                                            <img src={VerySad} alt="VerySad" />
                                        </td>
                                        <td>Workload</td>
                                    </VerySadCell>
                                    <TextCell>
                                        There were no comments added about
                                        workload.
                                    </TextCell>
                                </RowCollapse>
                                <RowCollapse>
                                    <TextRow>
                                        <h4>Weekly High</h4>
                                        <p>
                                            Identified our goul and priorities
                                        </p>
                                    </TextRow>
                                </RowCollapse>
                                <RowCollapse>
                                    <TextRow>
                                        <h4>Weekly Low</h4>
                                        <p>Cold weather</p>
                                    </TextRow>
                                </RowCollapse>
                                <RowCollapse>
                                    <TextRow>
                                        <h4>Anything Else</h4>
                                        <p>
                                            Looking forward to launching our
                                            first product
                                        </p>
                                    </TextRow>
                                </RowCollapse>
                            </RowCollapseBody>
                        </tbody>
                    </>
                )}
                <RowExpand
                    onClick={() => setIsActive(!isActive)}
                    id="collapse5"
                >
                    <td width="60%" pl-3>
                        <h4>September 12 - September 18, 2022</h4>
                    </td>
                    <td width="10%">
                        <img src={VeryHappy} alt="VeryHappy" />
                    </td>
                    <td width="10%">
                        <img src={VeryHappy} alt="VeryHappy" />
                    </td>
                    <td width="10%">
                        <img src={VeryHappy} alt="VeryHappy" />
                    </td>
                    <td width="10%">
                        Expand <AiFillCaretDown />
                    </td>
                </RowExpand>
                {isActive && (
                    <>
                        <tbody>
                            <RowCollapseHead>
                                <td width="90%" pl-3>
                                    <h4>October 10 - October 16, 2022</h4>
                                </td>
                                <td
                                    width="10%"
                                    onClick={() => setIsActive(!isActive)}
                                >
                                    Collaps <AiFillCaretUp />
                                </td>
                            </RowCollapseHead>
                            <RowCollapseBody>
                                <RowCollapse>
                                    <VeryHappyCell>
                                        <td>
                                            <img
                                                src={VeryHappy}
                                                alt="VeryHappy"
                                            />
                                        </td>
                                        <td>Morale</td>
                                    </VeryHappyCell>
                                    <TextCell>
                                        There were no comments added about
                                        morale.
                                    </TextCell>
                                </RowCollapse>
                                <RowCollapse>
                                    <VeryHappyCell>
                                        <td>
                                            <img
                                                src={VeryHappy}
                                                alt="VeryHappy"
                                            />
                                        </td>
                                        <td>Stress</td>
                                    </VeryHappyCell>
                                    <TextCell>
                                        There were no comments added about
                                        stress.
                                    </TextCell>
                                </RowCollapse>
                                <RowCollapse>
                                    <VeryHappyCell>
                                        <td>
                                            <img
                                                src={VeryHappy}
                                                alt="VeryHappy"
                                            />
                                        </td>
                                        <td>Workload</td>
                                    </VeryHappyCell>
                                    <TextCell>
                                        There were no comments added about
                                        workload.
                                    </TextCell>
                                </RowCollapse>
                                <RowCollapse>
                                    <TextRow>
                                        <h4>Weekly High</h4>
                                        <p>
                                            Identified our goul and priorities
                                        </p>
                                    </TextRow>
                                </RowCollapse>
                                <RowCollapse>
                                    <TextRow>
                                        <h4>Weekly Low</h4>
                                        <p>Cold weather</p>
                                    </TextRow>
                                </RowCollapse>
                                <RowCollapse>
                                    <TextRow>
                                        <h4>Anything Else</h4>
                                        <p>
                                            Looking forward to launching our
                                            first product
                                        </p>
                                    </TextRow>
                                </RowCollapse>
                            </RowCollapseBody>
                        </tbody>
                    </>
                )}
            </Container>
        </FlexCol>
    );
};

MyReports.propTypes = {};

export default MyReports;
