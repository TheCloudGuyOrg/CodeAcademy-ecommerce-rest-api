import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import Button from '../../components/Button/Button';
import TextField from '../../components/TextField/TextField';
import { loginUser } from '../../store/auth/Auth.actions';
import './Login.css';

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { error } = useSelector(state => state.auth);
    const [isLoading, setIsLoading] = useState(false);

    // Login handler
    const handleLogin = async (credentials) => {
        try {
            setIsLoading(true);
            await dispatch(loginUser(credentials));
            setIsLoading(false);
            navigate('/');
        } catch(error) {
            setIsLoading(false);
        }
    };

    const loginSchema = Yup.object().shape({
        email: Yup.string()
            .email("Invalid email address")
            .required("Email address is required"),
        
        password: Yup.string()
            .required("Password is required")
    });

    return(
        <div className="app">
            <div className="formComp">
                <div className="formWrapper">
                    <Formik 
                        initialValues={{email: '', password: ''}}
                        validationSchema={loginSchema}
                        validateOnBlur
                        onSubmit={async (data) => {
                            const { email, password }  = data;
                            await handleLogin({username: email, password});
                        }}
                    >
                        <Form className="baseForm">
                            <header className="baseFormHeader">
                                <h1 className="baseFormHeading">Log in</h1>
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
                            { error && <div>{error}</div>}
                            <Button 
                                variant="contained"
                                color="primary"
                                type="submit"
                                isLoading={isLoading}
                            >Submit</Button>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    );
};

export default Login;