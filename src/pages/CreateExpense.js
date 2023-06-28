import React from "react";
import Wrapper from "../assets/wrappers/CreateExpense";
import { Formik, Form, Field, ErrorMessage } from "formik";
const initialValues = {
  emp_id: "",
  purpose: "",
  category: "",
  amount: "",
  date: "",
  attachment: "",
};

const validateForm = (values) => {
  const errors = {};

  if (!values.firstName) {
    errors.firstName = "First Name is required";
  }

  if (!values.lastName) {
    errors.lastName = "Last Name is required";
  }

  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 6) {
    errors.password = "Password must be at least 6 characters long";
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = "Confirm Password is required";
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = "Passwords do not match";
  }

  return errors;
};
const CreateExpense = () => {
  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <Wrapper>
      <div className="form-container">
        <Formik
          initialValues={initialValues}
          validate={validateForm}
          onSubmit={handleSubmit}
        >
          <Form className="form">
            <div className="form-group">
              <Field
                type="text"
                id="emp_id"
                name="emp_id"
                placeholder="Employee Id"
                className="form-control"
              />
              <ErrorMessage
                name="emp_id"
                component="div"
                className="error-message"
              />
            </div>

            <div className="form-group">
              <Field
                type="text"
                id="purpose"
                name="purpose"
                placeholder="Purpose"
                className="form-control"
              />
              <ErrorMessage
                name="purpose"
                component="div"
                className="error-message"
              />
            </div>

            <div className="form-group">
              <Field
                type="text"
                id="category"
                name="category"
                placeholder="Category"
                className="form-control"
              />
              <ErrorMessage
                name="category"
                component="div"
                className="error-message"
              />
            </div>

            <div className="form-group">
              <Field
                type="number"
                id="amount"
                name="amount"
                placeholder="Amount"
                className="form-control"
              />
              <ErrorMessage
                name="amount"
                component="div"
                className="error-message"
              />
            </div>

            <div className="form-group">
              <Field
                type="date"
                id="date"
                name="date"
                placeholder="Date (dd-mm-yyyy)"
                className="form-control"
              />
              <ErrorMessage
                name="date"
                component="div"
                className="error-message"
              />
            </div>
            <div className="form-group">
              <Field
                type="file"
                id="date"
                name="file"
                placeholder="File"
                className="form-control"
              />
              <ErrorMessage
                name="date"
                component="div"
                className="error-message"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </Form>
        </Formik>
      </div>
    </Wrapper>
  );
};

export default CreateExpense;
