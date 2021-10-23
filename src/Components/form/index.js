import { useForm } from "react-hook-form";
import styled from "styled-components";

export const Color = {
  black: "#000000",
  yellow: "#fee715",
  white: "#ffffff",
  lightBlack: "#0d0d0d",
  greyTransperantBg: " rgba(255, 255, 255, 0.5)",
  darkBlue: "#009dff", // login background gradiant
  grey: "#888888", // input border
  red: "#ff0000", // error color
  blackShadow: `rgba(0, 0, 0, 0.235)`,
};

function Form(props) {
  let { templateObj, onSubmit, watchInputs, style } = props;
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const renderFields = (fields) => {
    console.log("fields", fields);
    return fields.map((field) => {
      let { title, type, name, validation, isRequired, style, id } = field;

      console.log("name", name);

      switch (type) {
        case "text":
          return (
            <div key={id}>
              <div>
                <div htmlFor={name}>
                  {title}
                  {isRequired ? (
                    <span style={{ color: "red", fontSize: 14 }}>*</span>
                  ) : null}
                </div>
                <input
                  type="text"
                  name={name}
                  id={id}
                  {...register(name, {
                    required: `${name} is mandatory`,
                  })}
                  style={{ style }}
                />
              </div>

              <div style={{ color: Color.red, fontSize: 12, height: "12px" }}>
                {errors.name && errors.name.message}
              </div>
            </div>
          );
        case "password":
          return (
            <div key={id}>
              <div>
                <div>
                  {title}
                  {isRequired ? (
                    <span style={{ color: "red", fontSize: 14 }}>*</span>
                  ) : null}
                </div>
                <input
                  type="password"
                  name={name}
                  id={id}
                  {...register(name, {
                    required: `${name} is mandatory`,
                  })}
                  style={{ style }}
                />
              </div>

              <div style={{ color: Color.red, fontSize: 12, height: "12px" }}>
                {errors.name && errors.name.message}
              </div>
            </div>
          );

        case "p-text":
          return <p>{title}</p>;

        case "submit":
          return (
            <button type={"submit"} style={style} key={id}>
              {title}
            </button>
          );
        default:
          return null;
      }
    });
  };
  const onData = (values) => {
    onSubmit(values);
  };
  return (
    <form style={style} onSubmit={handleSubmit(onData)}>
      {renderFields(templateObj.fields)}
    </form>
  );
}
export default Form;

// let fields = [
//   {
//     title: "Username",
//     type: "text",
//     name: "name",
//     validation: {
//       required: "Username is mandatory",
//     },
//     isRequired: true,
//     id: "loginName",
//   },
//   {
//     title: "Password",
//     type: "password",
//     name: "password",
//     validation: {
//       required: "Password is mandatory",
//     },
//     isRequired: true,
//     id: "loginPass",
//   },

//   {
//     title: "",
//     type: "linkText",
//     name: "name",
//     validation: {
//       required: "Username is mandatory",
//     },
//     isRequired: true,
//     id: "loginName",
//   },
//   {
//     type: "submit",
//     title: "Submit",
//     style: { width: "-webkit-fill-available" },
//     id: "loginSubmit",
//   },
// ];
