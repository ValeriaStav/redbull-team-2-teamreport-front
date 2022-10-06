import React, { useState } from "react";
import useCollapse from "react-collapsed";
import Header from "../../Components/Header";
import { FlexCol } from "../../styles";
import { Container, Row, Button, ProfileIcon, HeaderText } from "./styles";
import { AiFillCaretDown } from "react-icons/ai";
import VeryHappy from "../../assets/very-happy.svg";
import Happy from "../../assets/happy.svg";
import Neutral from "../../assets/neutral.svg";
import Sad from "../../assets/sad.svg";
import VerySad from "../../assets/very-sad.svg";
import WithoutFace from "../../assets/without-face.svg";
//import {Collapse, default} from "../../Components/Collapse/index.js";

const rootElement = document.getElementById("root");
// render(<App />, rootElement);

const MyReports = (props) => {
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
                    <hr />
                </div>
                {/* <div class="w-100 d-flex justify-content-center mt-3 mb-5">
                    <div class="underline"></div>
                </div> */}
                <div class="w-100 d-flex justify-content-end">
                    <Button
                        data-bs-toggle="collapse"
                        data-bs-target=".accordion-collapse"
                    >
                        Expand All
                    </Button>
                </div>
                <table>
                    <thead>
                        <Row>
                            <th width="60%"></th>
                            <th width="10%">Morale</th>
                            <th width="10%">Stress</th>
                            <th width="10%">Workload</th>
                            <th width="10%"></th>
                        </Row>
                    </thead>
                    <tbody>
                        <Row>
                            <td width="60%" pl-3>
                                October 10 - October 16, 2022
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
                        </Row>
                    </tbody>
                    <tbody>
                        <Row>
                            <td width="60%" pl-3>
                                October 3 - October 9, 2022
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
                        </Row>
                    </tbody>
                    <tbody>
                        <Row>
                            <td width="60%" pl-3>
                                September 26 - October 2, 2022
                            </td>
                            <td width="10%">
                                <img src={WithoutFace} alt="WithoutFace" />
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
                        </Row>
                    </tbody>
                    <tbody>
                        <Row>
                            <td width="60%" pl-3>
                                September 19 - September 25, 2022
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
                        </Row>
                    </tbody>
                    <tbody>
                        <Row>
                            <td width="60%" pl-3>
                                September 12 - September 18, 2022
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
                        </Row>
                    </tbody>
                </table>
            </Container>
            {/* <div className="App">
                <h1>Hello CodeSandbox</h1>
                <button onClick={() => setExpanded((x) => !x)}>toggle</button>
                <Collapse isActive={isExpanded} />
            </div> */}
        </FlexCol>
    );
};

MyReports.propTypes = {};

export default MyReports;
