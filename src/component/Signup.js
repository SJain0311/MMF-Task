import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";
import { useNavigate } from "react-router-dom";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address format")
    .required("Email is required"),
  password: Yup.string()
    .min(3, "Password must be 3 characters at minimum")
    .required("Password is required"),
  termsAndConditions: Yup.bool().oneOf(
    [true],
    "You need to accept the terms and conditions"
  ),
  category: Yup.string().required("Select first"),
  gender: Yup.string().required("must be select"),
  name: Yup.string().required("Write name here"),
});

const Signup = () => {
  const navigate = useNavigate();
  const [flag, setFlag] = useState(false);
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <Formik
            initialValues={{
              email: " ",
              password: "",
              termsAndConditions: false,
              gender: "",
              category: "",
              name: "",
            }}
            validationSchema={LoginSchema}
            onSubmit={(values) => {
              console.log(values);
              navigate("/test");
              if (values.legnth) {
              }
              localStorage.setItem("formData", JSON.stringify(values));
              alert("Form is validated! Submitting the form...");
            }}
          >
            {({
              touched,
              errors,
              isSubmitting,
              values,
              handleChange,
              handleBlur,
            }) => (
              <div>
                <div className="row mb-5">
                  <div className="col-lg-12 text-center">
                    <h1 className="mt-5">Login Form</h1>
                  </div>
                </div>
                <Form>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <Field
                      type="text"
                      name="name"
                      placeholder="Enter name"
                      autoComplete="off"
                      className={`mt-2 form-control
                          ${
                            touched.name && (flag ? errors.name : "")
                              ? "is-invalid"
                              : ""
                          }`}
                    />
                    <ErrorMessage
                      component="div"
                      name="email"
                      className="invalid-feedback"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <Field
                      type="email"
                      name="email"
                      placeholder="Enter email"
                      autoComplete="off"
                      className={`mt-2 form-control
                          ${
                            touched.email && (flag ? errors.email : "")
                              ? "is-invalid"
                              : ""
                          }`}
                    />
                    <ErrorMessage
                      component="div"
                      name="email"
                      className="invalid-feedback"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="password" className="mt-3">
                      Password
                    </label>
                    <Field
                      type="password"
                      name="password"
                      placeholder="Enter password"
                      className={`mt-2 form-control
                          ${
                            touched.password && (flag ? errors.password : "")
                              ? "is-invalid"
                              : ""
                          }`}
                    />
                    <ErrorMessage
                      component="div"
                      name="password"
                      className="invalid-feedback"
                    />
                  </div>
                  <div>
                    <div>
                      <label htmlFor="category">Category</label>
                      <select
                        id="category"
                        name="category"
                        className={`mt-2 form-control
                         ${
                           touched.category && errors.category
                             ? "is-invalid"
                             : ""
                         }`}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.category}
                      >
                        <option value="">Select</option>
                        <option value="Food">Food</option>
                        <option value="Entertainment">Entertainment</option>
                        <option value="Academic">Academic</option>
                      </select>
                    </div>
                  </div>
                  <label className="mt-3">Gender</label>
                  <div className="mt-2">
                    <label>
                      Female
                      <Field type="radio" name="gender" value="Female" />
                    </label>
                    <label>
                      Male
                      <Field type="radio" name="gender" value="Male" />
                    </label>
                    {errors.gender && (
                      <p style={{ color: "#dc3545" }}>
                        {flag ? errors.gender : ""}
                      </p>
                    )}
                  </div>

                  <div className="mt-2">
                    <label>
                      Terms and conditions
                      <Field type="checkbox" name="termsAndConditions" />
                    </label>
                    {errors.termsAndConditions && (
                      <p style={{ color: "#dc3545" }}>
                        {flag ? errors.termsAndConditions : ""}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary btn-block mt-4"
                    onClick={() => {
                      setFlag(true);
                    }}
                  >
                    Submit
                  </button>
                </Form>
              </div>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Signup;
