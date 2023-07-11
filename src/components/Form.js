import "../style/form-style.css";
import logo from "../assets/logo.png";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { useNavigate, useLocation } from "react-router";
import swal from 'sweetalert'

function Form() {
  const location = useLocation().search
  const params = location.split("=")
  const navigate = useNavigate();
  const updatePassFormik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: yup.object().shape({
      password: yup
        .string()
        .required("Enter password")
        .min(9, "Password must contain 9 digits at least"),
      confirmPassword: yup
        .string()
        .required("Confirm your password")
        .oneOf(
          [yup.ref("password")],
          "Your confirmation doesn't match your password"
        ),
    }),
    onSubmit: (values) => {
      let data = {
        code: params[1],
        password: values.password,
      };
      axios
        .patch(
          "https://guesscolour.onrender.com/assignpassword/reassign",
          data,
          {
            headers: {
              "Content-Type": "application/json;charset=UTF-8",
              Accept: "application/json",
              "Access-Control-Allow-Origin": "*",
            },
          }
        )
        .then((res) => {
          console.log(res.data);
          navigate("/passwordsent");
        })
        .catch((err) =>{
          console.log(err)
          swal("Password not saved. Try again")
        });
    },
  });
  return (
    <>
      <div className="container">
        <div className="brand-logo">
          <img src={logo} className="logo" alt="logo"></img>
        </div>
        <form
          className="inputs"
          onSubmit={updatePassFormik.handleSubmit}
          encType="multipart/form-data"
        >
          <label htmlFor="pass">Enter new password</label>
          <input
            type="password"
            placeholder="Min 9 charaters long"
            id="pass"
            name="password"
            onChange={updatePassFormik.handleChange}
            onBlur={updatePassFormik.handleBlur}
            value={updatePassFormik.values.password}
          />
          {updatePassFormik.errors.password && (
            <small>{updatePassFormik.errors.password}</small>
          )}
          <label htmlFor="confirm">Confirm new password</label>
          <input
            type="password"
            placeholder="Min 9 charaters long"
            id="confirm"
            name="confirmPassword"
            onChange={updatePassFormik.handleChange}
            onBlur={updatePassFormik.handleBlur}
            value={updatePassFormik.values.confirmPassword}
          />
          {updatePassFormik.errors.confirmPassword && (
            <small>{updatePassFormik.errors.confirmPassword}</small>
          )}
          <button
            type="submit"
            disabled={!updatePassFormik.isValid && updatePassFormik.touched}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Form;
