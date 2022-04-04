import React from "react";
import { Grid, Text, Button } from "../elements";
import { getCookie, deleteCookie } from "../shared/Cookie";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import firebase from "firebase/compat/app";
import { history } from "../redux/configureStore";
import { apiKey } from "../shared/firebase";
import Permit from "../shared/Permit";
import NotiBadge from "./NotiBadge";

const Header = (props) => {
  const dispatch = useDispatch();
  const is_login = useSelector((state) => state.user.is_login);
  const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;

  // 세션이 있나 확인합니다
  const is_session = sessionStorage.getItem(_session_key) ? true : false;
  console.log(is_session);

  if (is_login && is_session) {
    return (
      <Permit>
        <React.Fragment>
          <Grid is_flex padding="4px 16px">
            <Grid>
              <Button margin="0px" size="24px" bold
              _onClick={() => {
                history.push("/");
              }}
              >
                THE OFFICE
              </Button>
            </Grid>

            <Grid is_flex>
              <Button text="MyInfo"></Button>
              <NotiBadge _onClick={() => {
              history.push("/noti");
            }}/>
              <Button
                text="Log Out"
                _onClick={() => {
                  dispatch(userActions.logoutFB());
                }}
              ></Button>
            </Grid>
          </Grid>
        </React.Fragment>
      </Permit>
    );
  }
  return (
    <React.Fragment>
      <Grid is_flex padding="4px 16px">
        <Grid>
          <Text margin="0px" size="24px" bold
             _onClick={() => {
              history.push("/");
            }}>
            THE OFFICE
          </Text>
        </Grid>

        <Grid is_flex>
          <Button
            text="Log In"
            _onClick={() => {
              history.push("/login");
            }}
          ></Button>
          <Button
            text="Sign Up"
            _onClick={() => {
              history.push("/signup");
            }}
          ></Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

Header.defaultProps = {};

export default Header;
