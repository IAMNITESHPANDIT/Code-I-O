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

const FormSignComponent = () => {
   const url = '';
  const onsubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="contianer">
      <div className="sub_contianer">
        <h1>Sign-in</h1>
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

              <div className="row">
                <div className="col-4">
                  {/** label Field over Here */}
                  <label style={{margin:'5px'}} htmlFor="email">Email: </label>
                  <br/>
                  <br/>
              <label  htmlFor="password">Password: </label>

                </div>
                <div className="col-8">
                  {/** input Field over Here */}
                  <Field  name="email" type="email" />
              {errors.email && touched.email ? (
                <span className="text-danger">{errors.email}</span>
              ) : null}
              <br /> <br />
              <Field name="Password" id="password" type="password" />
              {errors.Password && touched.Password ? (
                <span className="text-danger">{errors.Password}</span>
              ) : null}
              <br /> <br />
                </div>
              </div>
              
             
             
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

export default FormSignComponent;
