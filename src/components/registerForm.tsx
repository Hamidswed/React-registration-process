import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { RootState } from "../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../redux/slice/user";
import { useNavigate } from "react-router-dom";
import Styles from "./styles.module.css";

const RegisterForm = () => {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  type initialType = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  };

  const initialValues: initialType = {
    firstName: user.personalInfo.firstName,
    lastName: user.personalInfo.lastName,
    email: user.personalInfo.email,
    phone: user.personalInfo.phone,
  };

  const RegisterSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(3, "It should be at least 3 letters!")
      .required("Please Enter your first name!"),
    lastName: Yup.string()
      .min(3, "It should be at least 3 letters!")
      .required("Please Enter your last name!"),
    email: Yup.string()
      .email("Invalid email")
      .required("Please Enter your email"),
    phone: Yup.string().min(10, "It should be at least 10 digit!"),
  });

  const navigate = useNavigate();

  const submitHandler = (values: initialType) => {
    dispatch(userActions.getPersonalInfo(values));
    navigate("/plan");
  };

  return (
    <div className={Styles.form}>
      <Formik
        initialValues={initialValues}
        onSubmit={submitHandler}
        validationSchema={RegisterSchema}
      >
        {({ values, errors, touched, handleChange }) => {
          return (
            <Form>
              <div>
                <Field
                  required
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  onChange={handleChange}
                  value={values.firstName}
                />
                {errors.firstName && touched.firstName && (
                  <p>{errors.firstName}</p>
                )}
              </div>
              <div>
                <Field
                  required
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  onChange={handleChange}
                  value={values.lastName}
                />
                {errors.lastName && touched.lastName && (
                  <p>{errors.lastName}</p>
                )}
              </div>
              <div>
                <Field
                  required
                  name="email"
                  type="email"
                  placeholder="Email"
                  onChange={handleChange}
                  value={values.email}
                />
                {errors.email && touched.email && <p>{errors.email}</p>}
              </div>
              <div>
                <Field
                  required
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  onChange={handleChange}
                  value={values.phone}
                />
                {errors.phone && touched.phone && <p>{errors.phone}</p>}
              </div>
              <button type="submit">Next Step</button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default RegisterForm;
