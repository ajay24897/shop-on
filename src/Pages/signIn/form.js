import styled from "styled-components";

export const SignInForm = {
  fields: [
    {
      type: "text",
      title: "Email",
      name: "email",
      isRequired: true,
      validation: {
        required: "Email is mandatory",
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message: "Enter valied Email id",
        },
      },
    },
    {
      type: "password",
      title: "Password",
      name: "password",
      isRequired: true,
      validation: {
        required: "Password is mandatory",
        minLength: {
          value: 5,
          message: "Password should be minimum 5 character long",
        },
        maxLength: {
          value: 10,
          message: "Password should be maximum 10 character long",
        },
      },
    },
    {
      type: "button",
      title: "Submit",
      style: { width: "-webkit-fill-available" },
    },
  ],
};
export const SignUpForm = {
  fields: [
    {
      type: "text",
      title: "Username",
      name: "username",
      isRequired: true,
      validation: {
        required: "Username is mandatory",
      },
    },
    {
      type: "text",
      title: "Email",
      name: "email",
      isRequired: true,
      validation: {
        required: "Email is mandatory",
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message: "Enter valid Email id",
        },
      },
    },
    {
      type: "password",
      title: "Password",
      name: "password",
      isRequired: true,
      validation: {
        required: "Password is mandatory",
        minLength: {
          value: 5,
          message: "Password should be minimum 5 character long",
        },
        maxLength: {
          value: 10,
          message: "Password should be maximum 10 character long",
        },
      },
    },
    {
      type: "button",
      title: "Submit",
      style: { width: "-webkit-fill-available" },
    },
  ],
};

export let Span = styled.span`
  position: absolute;
  border-radius: 20px;
  background-color: white;
  border: 2px solid #f2f2f2;
  height: 40px;
  left: ${(props) => (props.isToggled ? `50%` : `0%`)};
  z-index: -1;
  width: 50%;
  overflow: hidden;
  transition: all 0.5s ease-in;
`;

export let Form1 = styled.div`
  width: 100%;
  margin-right: 20px;
  height: 350px;
  position: absolute;
  left: ${(props) => (props.isToggled ? `-110%` : `0%`)};
  transition: all 0.5s ease-in;
`;
export let Form2 = styled.div`
  position: absolute;
  width: 100%;
  height: 350px;
  left: ${(props) => (props.isToggled ? `0%` : `110%`)};
  transition: all 0.5s ease-in;
`;

export const Cnt1 = styled.div`
  display: ${(props) => (props.isToggled ? `none` : `block`)};
  transition: all 0.5s ease-in;
`;
export const Cnt2 = styled.div`
  display: ${(props) => (props.isToggled ? `block` : `none`)};
  transition: all 0.5s ease-in;
`;
