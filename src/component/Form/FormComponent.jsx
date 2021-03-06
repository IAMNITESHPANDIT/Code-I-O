import {Formik, Field} from "formik";
import "./Form.Style.scss";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { useFormik } from "formik";

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
  
  const formik = useFormik({
    initialValues: {
      name: "",
      password: "",
      email: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  
  return (
    <div className="contianer">
      <div className="sub_contianer">
        <h1>Signup</h1>
        <Formik
          initialValues={{
            name: "",
            password: "",
            email: "",
          }}
          validationSchema={SignupSchema}
          
        >
          {({ errors, touched }) => (
            <form onSubmit={formik.handleSubmit}>
              <div className="row">
                <div className="col-4">
                  {/** this is for label */}
                  <label style={{margin:'5px'}} htmlFor="name">Name: </label>
                  <br/>
                  <br/>
                  <label htmlFor="email">Email: </label>
                  <br/>
                  <br/>
                  <label style={{margin:'5px'}} htmlFor="password">Password: </label>


                </div>
                <div className="col-8">
                  {/* this is for  input field  */}
                  <Field 
                type="text"
                name="name" 
                id="name" 
                onChange={(e)=>formik.handleChange(e)}
                value={formik.values.name}
              
                />
              {errors.name && touched.name ? (
                <span className="text-danger">{errors.name}</span>
              ) : null}
              <br /> <br />
              <Field
                type="text"
                name="email" 
                id="email" 
                onChange={(e)=>formik.handleChange(e)}
                value={formik.values.email}
              />
              {errors.email && touched.email ? (
                <span className="text-danger">{errors.email}</span>
              ) : null}
              <br /> <br />
              <Field
                id="password"
                type="password"
                onChange={(e)=>formik.handleChange(e)}
                value={formik.values.password}
              />
              {errors.password && touched.password ? (
                <span className="text-danger">{errors.password}</span>
              ) : null}
              <br /> <br /><br />
                </div>
              </div>
              <p>
                Already Have An Account ?<Link to="/formsign"> Click Here</Link>
              </p>
              <button className="btn btn-primary" type="submit">
                Submit
              </button>
            </form>
          )}
        </Formik>
      </div>
      
    </div>
  );
};

export default FormComponent;
