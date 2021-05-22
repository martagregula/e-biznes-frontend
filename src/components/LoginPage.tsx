import React from "react";
import "./styles/LoginPage.css"
import {
    Button,
    FormControl,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    TextField
} from "@material-ui/core";
import { FacebookLoginButton, GoogleLoginButton } from "react-social-login-buttons";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

interface State {
    login: string;
    password: string;
    showPassword: boolean;
}

export default function LoginComponent() {
    const [state, setState] = React.useState<State>({
       login: '',
       password: '',
        showPassword: false,
    });

    const handleLoginButton = () => {
        console.log(state.login + " " + state.password)
    }

    const handleChange = (prop: keyof State) => (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setState({ ...state, [prop]: event.target.value });

    };

    const handleClickShowPassword = () => {
        setState({ ...state, showPassword: !state.showPassword });
    };


    return (
        <div className="page">
            <div className="container">
                <div className='text'>Zaloguj się</div>
                <div className="text-fields">
                    <TextField className="text-field" value={state.login} onChange={handleChange("login")} id="outlined-basic" label="Login" variant="outlined" />
                    <FormControl variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Hasło</InputLabel>
                        <OutlinedInput
                        className="text-field"
                        id="outlined-adornment-password"
                        type={state.showPassword ? 'text' : 'password'}
                        value={state.password}
                        onChange={handleChange('password')}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    edge="end"
                                >
                                    {state.showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                    </FormControl>
                </div>

                <div className="social-container">
                    <Button className="login-button" variant="contained" color="secondary" onClick={handleLoginButton}>Zaloguj się</Button>
                    <FacebookLoginButton style={{ width: "35vw" }}> <span>Zaloguj przez Facebooka</span></FacebookLoginButton>
                    <GoogleLoginButton style={{ width: "35vw" }}> <span>Zaloguj przez Gmaila</span></GoogleLoginButton>
                </div>
            </div>

        </div>
    )
}