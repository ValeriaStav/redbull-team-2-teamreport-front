import React, { useState } from "react";
import PropTypes from "prop-types";
import { AiFillCaretRight } from "react-icons/ai";
import Sidebar from "../../Components/Sidebar";
import Header from "../../Components/Header";
import HelpButton from "../../Components/HelpButton";
import FeedbackButton from "../../Components/FeedbackButton";
import { FlexCol } from "../../styles";
import {
    HeaderText,
    AccordionContent,
    AccordionItem,
    FormItem,
    Button,
    Input,
} from "./styles";
import { Formik, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import validate, {
    moreThanTree,
    lessThanHundred,
    validEmail,
    passwordRule,
} from "../../utils/validators";

const InviteYourTeam = () => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const submit = (values) => {
        navigate("/");
    };
    return (
        <FlexCol>
            <Header Content={<HeaderText>Invite Your Team</HeaderText>} />
            <HelpButton />
            <FeedbackButton />
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
                    <Formik
                        onSubmit={submit}
                        initialValues={{
                            firstName: "",
                            lastName: "",
                            email: "",
                        }}
                        validate={(values) =>
                            validate([
                                {
                                    name: "firstName",
                                    value: values.firstName,
                                    functions: [moreThanTree, lessThanHundred],
                                },
                                {
                                    name: "lastName",
                                    value: values.lastName,
                                    functions: [moreThanTree, lessThanHundred],
                                },
                                {
                                    name: "email",
                                    value: values.email,
                                    functions: validEmail,
                                },
                            ])
                        }
                    >
                        {({ values, handleSubmit, handleChange }) => (
                            <form onSubmit={handleSubmit}>
                                <label
                                    for="exampleInputFirstName1"
                                    class="form-label"
                                >
                                    <strong>First Name</strong>
                                </label>
                                <Input
                                    type="text"
                                    class="form-control"
                                    aria-label="First name"
                                    name="firstName"
                                    onChange={handleChange}
                                />
                                <ErrorMessage
                                    name="firstName"
                                    component={Error}
                                />
                                <label
                                    for="exampleInputLastName1"
                                    class="form-label"
                                >
                                    <strong>Last Name</strong>
                                </label>
                                <Input
                                    type="text"
                                    class="form-control"
                                    aria-label="Last name"
                                    name="lastName"
                                    onChange={handleChange}
                                />
                                <ErrorMessage
                                    name="firstName"
                                    component={Error}
                                />
                                <label
                                    for="exampleInputEmail1"
                                    class="form-label"
                                >
                                    <strong>Email</strong>
                                </label>
                                <Input
                                    type="email"
                                    class="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    name="email"
                                    onChange={handleChange}
                                />
                                <ErrorMessage name="email" component={Error} />
                            </form>
                        )}
                    </Formik>
                    <Button onClick={() => setOpen(true)}>Invite</Button>
                </AccordionContent>
            </AccordionItem>
        </FlexCol>
    );
};
export default InviteYourTeam;
