import React from "react";
import { Text, Input, Grid, Button } from "../elements";
import { getCookie, setCookie, deleteCookie } from "../shared/Cookie";
import { emailCheck } from "../shared/common";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

const Login = (props) => {
  const dispatch = useDispatch();

  const [id, setId] = React.useState("");
  const [pwd, setPwd] = React.useState("");

  const login = () => {

    console.log(id);
    
    if(id === "" || pwd === ""){
      window.alert("Email or password is empty");
      return;
    }

    if(!emailCheck(id)){
      window.alert("It is not an email");
      return;
    }

    dispatch(userActions.loginFB(id, pwd));
  };

  return (
    <React.Fragment>
      <Grid padding="16px">
        <Text size="32px" bold>
          LogIn
        </Text>

        <Grid padding="16px 0px">
          <Input
            label="Email"
            placeholder="Email"
            _onChange={(e) => {
              setId(e.target.value);
            }}
          />
        </Grid>

        <Grid padding="16px 0px">
          <Input
            label="Password"
            placeholder="Password"
            type="password"
            _onChange={(e) => {
              setPwd(e.target.value);
            }}
            value={pwd}
            is_submit
            onSubmit={login}
          />
        </Grid>

        <Button
          text="Log In"
          _onClick={() => {
            console.log("로그인 했어!");
            login();
          }}
        ></Button>
      </Grid>
    </React.Fragment>
  );
};

export default Login;