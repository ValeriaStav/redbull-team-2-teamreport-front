import React, { useState } from "react";
import { AiFillCaretRight } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux"
import { Formik, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";

import Header from "../../Components/Header";
import HelpButton from "../../Components/HelpButton";
import FeedbackButton from "../../Components/FeedbackButton";
import Error from "../../Components/Error"

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
    startsFromCapitalize,
    moreThanTree,
    lessThanHundred,
    validEmail,
} from "../../utils/validators";

const InviteYourTeam = () => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const teamId = useSelector((state) => state.usersReducer.currentUserCommand)

    const submit = (values) => {
        setOpen(true)
        dispatch({ type: "SEND_INVITATION", payload: { ...values, teamId } })
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
                            <p>
                                <AiFillCaretRight />
                                The team member didn't receive yout invite?
                            </p>
                    </FormItem>
                </>
            )}
            <AccordionItem>
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
                                    functions: [moreThanTree, lessThanHundred, startsFromCapitalize],
                                },
                                {
                                    name: "lastName",
                                    value: values.lastName,
                                    functions: [moreThanTree, lessThanHundred, startsFromCapitalize],
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
