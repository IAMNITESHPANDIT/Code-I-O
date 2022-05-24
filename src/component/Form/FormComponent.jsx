import { Formik, Form, Field } from "formik";
import "./Form.Style.scss";
import swal from 'sweetalert';
import * as Yup from "yup";
import {Link} from 'react-router-dom';

const SignupSchema = Yup.object().shape({
  Name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  Password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

const FormComponent = () => {
   const url = '';
  const onsubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="contianer">
      <div className="sub_contianer">
        <h1>Signup</h1>
        <Formik
          initialValues={{
            Name: "",
            Password: "",
            email: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <lebel htmlfor="Name">Name: </lebel>
              <Field name="Name" />
              {errors.Name && touched.Name ? (
                <span className="text-danger">{errors.Name}</span>
              ) : null}
              <br /> <br />
              <lebel>Email: </lebel>
              <Field name="email" type="email" />
              {errors.email && touched.email ? (
                <span className="text-danger">{errors.email}</span>
              ) : null}
              <br /> <br />
              <lebel for="password">Password: </lebel>
              <Field name="Password" id="password" type="password" />
              {errors.Password && touched.Password ? (
                <span className="text-danger">{errors.Password}</span>
              ) : null}
              <br /> <br />
              <Link to="/passwordReset">Forget password</Link>
              <br /> <br />
              <button className="btn btn-primary" type="submit">
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default FormComponent;
