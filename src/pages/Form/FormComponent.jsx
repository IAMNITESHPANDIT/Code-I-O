import { Formik, Form, Field } from "formik";
import "./Form.Style.scss";
import * as Yup from "yup";

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
                <div className="err">{errors.Name}</div>
              ) : null}
              <br /> <br />
              <lebel>Email: </lebel>
              <Field name="email" type="email" />
              {errors.email && touched.email ? (
                <div className="err">{errors.email}</div>
              ) : null}
              <br /> <br />
              <lebel for="password" >Password: </lebel>
              <Field name="Password" id="password"  />
              {errors.Password && touched.Password ? (
                <div className="err">{errors.Password}</div>
              ) : null}

                <br /> <br />
                <a href={url}>Forget password</a>
                <br/> <br/>
              <button className="btn" type="submit">Submit</button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default FormComponent;
