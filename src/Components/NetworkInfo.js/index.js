import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { isOnline } from "../../Redux/actions/commonAction";

function NetworkInfo() {
  const state = useSelector((state) => state.NetworkInfoReducer);
  const dispatch = useDispatch();
  let network = window.navigator.onLine ? true : false;
  //   console.log("Initially " + (window.navigator.onLine ? "on" : "off") + "line");
  dispatch(isOnline(network));
  useEffect(() => {
    if (window.navigator.onLine == "on") {
      dispatch(isOnline(true));
    } else {
      dispatch(isOnline(false));
    }
  }, []);

  useEffect(() => {
    window.addEventListener("offline", function (e) {
      dispatch(isOnline(false));
    });

    window.addEventListener("online", function (e) {
      dispatch(isOnline(true));
    });
  }, []);

  return state ? null : <Div isOnline={state}>You are Offline</Div>;
}

export default NetworkInfo;

const Div = styled.div`
  position: sticky;
  z-index: 9;
  height: ${(props) => (props.isOnline ? `0px` : `40px`)};
  background: red;
  color: #ffff;
  width: 100%;
  letter-spacing: 2px;
  font-weight: 400;
  text-align: center;
  padding: 10px 0px;
  top: ${(props) => (props.isOnline ? 0 : `40px`)};
  transition: all 10s linear;
`;
