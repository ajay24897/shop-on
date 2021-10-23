import { isEmpty } from "lodash";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

function Form({ templateObj, onSubmit, watchInputs, style }) {
  let { register, handleSubmit, errors } = useForm();

  let { fields } = templateObj;
  const onData = (values) => {
    onSubmit(values);
  };

  const renderForm = (fields) => {
    return fields.map((item, index) => {
      let { title, type, name, validation, isRequired, style } = item;

      switch (type) {
        case "text":
          return (
            <div>
              <div>
                <div htmlFor={title}>
                  {title}
                  {isRequired ? <span className="required-icon">*</span> : null}
                </div>
                <input
                  type={type}
                  name={name}
                  className="input-form"
                  ref={register(validation)}
                />
              </div>
              <div className="error-text">
                <h4>{errors[name] && errors[name]["message"]}</h4>
              </div>
            </div>
          );

        case "password":
          return (
            <div>
              <div>
                <div htmlFor={title}>
                  {title}
                  {isRequired ? <span className="required-icon">*</span> : null}
                </div>
                <input
                  type={type}
                  name={name}
                  className="input-form"
                  ref={register(validation)}
                />
              </div>
              <div className="error-text">
                <h4>{errors[name] && errors[name]["message"]}</h4>
              </div>
            </div>
          );
        case "button":
          return (
            <button type={"submit"} style={style} className="button-submit">
              {title}
            </button>
          );

        default:
          return null;
      }
    });
  };
  return <form onSubmit={handleSubmit(onData)}>{renderForm(fields)}</form>;
}
export default Form;
