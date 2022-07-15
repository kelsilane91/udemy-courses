import React, {
  BaseSyntheticEvent,
  ReducerAction,
  useEffect,
  useReducer,
  useState,
} from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

type Props = {
  onLogin: (enteredEmail: string, enteredPassword: string) => void;
};

type State = {
  value: string;
  isValid: boolean;
};

type Action = {
  type: string;
  payload?: string;
};
const emailReducer = (state: State, action: any) => {
  // TODO: type the action properly
  if (action.type === "USER_INPUT") {
    return {
      value: action.payload,
      isValid: action.payload.includes("@"),
    };
  }

  if (action.type === "INPUT_BLUR") {
    return {
      value: state.value,
      isValid: state.value.includes("@"),
    };
  }
  return {
    value: "",
    isValid: false,
  };
};

const passwordReducer = (state: State, action: any) => {
  // TODO: type the action properly
  if (action.type === "PASSWORD_USER_INPUT") {
    return {
      value: action.payload,
      isValid: action.payload.length > 6,
    };
  }

  if (action.type === "PASSWORD_BLUR") {
    return {
      value: state.value,
      isValid: state.value.length > 6,
    };
  }
  return {
    value: "",
    isValid: false,
  };
};
const Login = ({ onLogin }: Props) => {
  const [formIsValid, setFormIsValid] = useState<boolean>(false);
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: false,
  });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: false,
  });

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("Checking form validity!");
      setFormIsValid(emailState.isValid && passwordState.isValid);
    }, 500);

    return () => {
      console.log("CLEANUP");
      clearTimeout(identifier);
    };
  }, [emailState.isValid, passwordState.isValid]);

  const emailChangeHandler = (event: BaseSyntheticEvent) => {
    dispatchEmail({ type: "USER_INPUT", payload: event.target.value });
    // setFormIsValid()
  };

  const passwordChangeHandler = (event: BaseSyntheticEvent) => {
    dispatchPassword({
      type: "PASSWORD_USER_INPUT",
      payload: event.target.value,
    });
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
    // setEmailIsValid(enteredEmail.includes("@"));
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: "PASSWORD_BLUR" });
  };

  const submitHandler = (event: BaseSyntheticEvent) => {
    event.preventDefault();
    onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={[passwordState.value]}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
