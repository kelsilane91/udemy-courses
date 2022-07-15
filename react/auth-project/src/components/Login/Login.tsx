import React, {
  BaseSyntheticEvent,
  useEffect,
  useReducer,
  useState,
  useContext,
  useRef,
} from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../../context/auth-context";
import Input from "../UI/Input/Input";

type State = {
  value: string;
  isValid: boolean;
};

type Action = { type: "USER_INPUT"; payload: string } | { type: "INPUT_BLUR" };

const emailReducer = (state: State, action: Action) => {
  switch (action.type) {
  }
  if (action.type === "USER_INPUT") {
    return {
      value: action.payload,
      isValid: action?.payload?.includes("@"),
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

const passwordReducer = (state: State, action: Action) => {
  if (action.type === "USER_INPUT") {
    return {
      value: action.payload,
      isValid: action?.payload?.length > 6,
    };
  }

  if (action.type === "INPUT_BLUR") {
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
const Login = () => {
  const [formIsValid, setFormIsValid] = useState<boolean>(false);
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: false,
  });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: false,
  });
  const { onLogin } = useContext(AuthContext);

  const emailRef = useRef<HTMLInputElement | null>(null);
  const passRef = useRef<HTMLInputElement | null>(null);

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
  };

  const passwordChangeHandler = (event: BaseSyntheticEvent) => {
    dispatchPassword({
      type: "USER_INPUT",
      payload: event.target.value,
    });
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: "INPUT_BLUR" });
  };

  const submitHandler = (event: BaseSyntheticEvent) => {
    event.preventDefault();
    if (formIsValid) {
      onLogin(emailState.value, passwordState.value);
    } else if (!emailState.isValid) {
      emailRef.current?.focus();
    } else {
      passRef.current?.focus();
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={emailRef}
          label="E-Mail"
          isValid={emailState.isValid}
          value={emailState.value}
          id="email"
          type="email"
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input
          ref={passRef}
          label="Password"
          isValid={passwordState.isValid}
          value={passwordState.value}
          id="password"
          type="password"
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
