import React, { useState, useEffect } from "react";

import { SignInForm, SignUpForm, Span, Form2, Form1, Cnt1, Cnt2 } from "./form";
import Form from "../../Components/Widgets";
import { getUserRegister } from "../../Constants/common.constant";
import useFetch from "../../Hooks/useFetch";

function SingIn() {
  const [isToggled, setIsToggled] = useState(false);
  const [res, clearRes, fetchData] = useFetch();

  let handleClick = (data) => {
    setIsToggled(data);
  };

  useEffect(() => {
    console.log("res", res);
  }, [res]);

  const submitSignIn = (values) => {
    console.log("submitSignIn", values);
  };

  const submitSignUp = (signUpData) => {
    fetchData(getUserRegister, "post", {
      registerData: signUpData,
    });
    // .then((res) => {
    //   if (res.data === "User succesfully registered") {
    //     alert("User succesfully registered");
    //   } else {
    //     alert(res.data);
    //   }
    // })
    // .catch((error) => {
    //   alert(error);
    // });
  };

  return (
    <div className="signIn-cnt">
      <div className="signIn-form boxShadow2">
        <div class="toggle-btn-cnt">
          <Span isToggled={isToggled} className="boxShadow2"></Span>
          <h2 class="toggle-btn text-orange" onClick={() => handleClick(false)}>
            Sign In
          </h2>
          <h2 class="toggle-btn text-orange" onClick={() => handleClick(true)}>
            Sign Up
          </h2>
        </div>

        <div class="signIn-form-cnt">
          <Form1 isToggled={isToggled}>
            <Cnt1 isToggled={isToggled}>
              <Form
                templateObj={SignInForm}
                onSubmit={(values) => submitSignIn(values)}
              />
            </Cnt1>
          </Form1>
          <Form2 isToggled={isToggled}>
            <Cnt2 isToggled={isToggled}>
              <Form
                templateObj={SignUpForm}
                onSubmit={(signUpData) => submitSignUp(signUpData)}
              />
              {res && res.error && (
                <p style={{ color: "red", textAlign: "center" }}>
                  {res.message}
                </p>
              )}
            </Cnt2>
          </Form2>
        </div>
      </div>
    </div>
  );
}

export default SingIn;
