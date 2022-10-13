import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux"
import { AiFillCaretRight } from "react-icons/ai";
import { Formik, ErrorMessage } from "formik";
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

import validate, {
    moreThanTwo,
    startsFromCapitalize,
    passwordRule,
    validEmail,
} from "../../utils/validators"

import Error from "../../Components/Error"

const InviteYourTeam = () => {
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch()
    const teamId = useSelector((state) => state.usersReducer.currentUserCommand)

    const submit = (values) => {
        setOpen(true)
        dispatch({ type: "SEND_INVITATION", payload: { ...values, teamId } })
    }
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
                <Formik onSubmit={submit}
                    initialValues={{
                        firstName: '',
                        lastName: '',
                        email: '',
                    }}

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
                                name: "email",
                                value: values.email,
                                functions: validEmail,
                            },
                        ])
                    }
                >
                    {(({ handleSubmit, handleChange }) => (
                        <AccordionContent onSubmit={handleSubmit}>
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
                                name="firstName"
                                onChange={handleChange}
                                aria-label="First name"
                            />
                            <ErrorMessage name='firstName' component={Error} />
                            <label for="exampleInputLastName1" class="form-label">
                                <strong>Last Name</strong>
                            </label>
                            <Input
                                type="text"
                                class="form-control"
                                aria-label="Last name"
                                name="lastName"
                                onChange={handleChange}
                            />
                            <ErrorMessage name='lastName' component={Error} />
                            <label for="exampleInputEmail1" class="form-label">
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
                            <ErrorMessage name='email' component={Error} />
                            <Button type="submit">Invite</Button>

                        </AccordionContent>
                    ))}
                </Formik>

            </AccordionItem>
        </FlexCol>
    );
};
export default InviteYourTeam;
