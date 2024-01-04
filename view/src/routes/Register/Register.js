import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Divider from '@material-ui/core/Divider';
import * as Yup from 'yup';
import Button from '../../components/Button/Button';
import TextField from '../../components/TextField/TextField';
import { registerUser } from '../../store/auth/Auth.actions';
import '../Login/Login.css';

function Register() {
    const history = useNavigate();
    const dispatch = useDispatch();
    const { error } = useSelector(state => state.auth);
    const [isLoading, setIsLoading] = useState(false);

    // Registration Handler
    const handleRegister = async (credentials) => {
        try {
            setIsLoading(true);
            await dispatch(registerUser(credentials));
            setIsLoading(false);
            history.push('/');
        } catch(error) {
            setIsLoading(false);
        }
    };

    // Validation schema for registration form
    const registrationSchema = Yup.object().shape({
        email: Yup.string()
            .email("Ivalid email address")
            .required("Email address is required"),
        
        password: Yup.string()
            .required("Password is required"),

        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], "Passwords must match")
    });

    return (
        <div className="app">
            <div className="formComp">
                <div className="formWrapper">
                    <Formik
                        initialValues={{email: '', password: ''}}
                        validateSchema={registrationSchema}
                        validateOnBlur
                        onSubmit={async (data) => {
                            const { confirmPassword, ...credentials } = data;
                            await handleRegister(credentials);
                        }}
                    >
                        <Form className="baseForm">
                            <header className="baseFormHeader">
                                <h1 className="baseFormHeading">Register</h1>
                            </header>
                            <TextField 
                                label="Email"
                                name="email"
                                id="email-input"
                            />
                            <TextField 
                                label="Password"
                                name="password"
                                id="password-input"
                                type="password"
                            />
                            <TextField 
                                label="Confirm Password"
                                name="confirmPassword"
                                id="confirm-password-input"
                                type="password"
                            />
                            {
                                error && <div>{error}</div>
                            }
                            <Button 
                                varient="contained"
                                color="primary"
                                type="submit"
                                isLoading={isLoading}
                            >
                                Submit
                            </Button>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    );
};

export default Register;