import React, { useState } from "react";
import PropTypes from "prop-types";
import { AiFillCaretRight } from "react-icons/ai";
import Sidebar from "../../Components/Sidebar";
import Header from "../../Components/Header";
import { FlexCol } from "../../styles";
import {
    HeaderText,
    AccordionContent,
    AccordionItem,
    FormItem,
    Button,
    Input,
} from "./styles";

const InviteYourTeam = () => {
    const [open, setOpen] = useState(false);
    return (
        <FlexCol>
            <Header Content={<HeaderText>Invite Your Team</HeaderText>} />
            {open && (
                <>
                    <AccordionItem>
                        <AccordionContent>
                            <strong>
                                Success! Your team member has been invited to
                                the Weekly Report Tool.
                            </strong>
                            <p>
                                Once they accept your invitation, they'll be
                                able to create their reports.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <FormItem>
                        <AccordionContent>
                            <p>
                                <AiFillCaretRight />
                                The team member didn't receive yout invite?
                            </p>
                        </AccordionContent>
                    </FormItem>
                </>
            )}
            <AccordionItem>
                <AccordionContent>
                    <strong>
                        Enter the team member you would like to invite.
                    </strong>
                    <p>
                        Don't worry! You'll be able to add more team members
                        later.
                    </p>
                    <label for="exampleInputFirstName1" class="form-label">
                        <strong>First Name</strong>
                    </label>
                    <Input
                        type="text"
                        class="form-control"
                        aria-label="First name"
                    />
                    <label for="exampleInputLastName1" class="form-label">
                        <strong>Last Name</strong>
                    </label>
                    <Input
                        type="text"
                        class="form-control"
                        aria-label="Last name"
                    />
                    <label for="exampleInputEmail1" class="form-label">
                        <strong>Email</strong>
                    </label>
                    <Input
                        type="email"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                    />
                    <Button onClick={() => setOpen(true)}>Invite</Button>
                    {/* //в My Reports true поменять на !isActive */}
                </AccordionContent>
            </AccordionItem>
        </FlexCol>
    );
};
export default InviteYourTeam;
