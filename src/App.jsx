import { useFormik } from 'formik';
import * as yup from "yup";
import './App.css'

function App() {

  const formik = useFormik({
    initialValues : {
      name : "",
      email : "",
      password : "",
      confirmPassword : "",
    },

    // Schema
    validationSchema : yup.object({
      name : yup.string()
        .min(3, "Must be atleast 3 Characters !")
        .required("Name is Required !"),

      email : yup.string()
        .email("Invalid Email Address !")
        .required("Email is Required !"),

      password : yup.string()
        .oneOf(["rishiME@199"], "Inncorrect Password !")
        .required("Password is Required !"),

      confirmPassword : yup.string()
        .oneOf(["rishiME@199"], "Confirm Password is Inncorrect !")
        .required("Confirm Password is Required !"),
    }),

    // Form on Submit
    onSubmit : (values, action) => {
      // console.log(values);
      alert("LogIn Successfull !")
      alert(`Welcome ! ${values.name}`);

      action.resetForm();       // Reset Form
    }
  });

  return (
    <div className='container'>
      <form onSubmit={formik.handleSubmit} className='main'>
        <h1 className='title'>Log IN</h1>

        <div className='form-section'>
          {/* Name  */}
          <section>
            <input 
              type="text"
              name='name'
              placeholder='Enter Name'
              className='input-text'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />

            {formik.touched.name && formik.errors.name ? 
              (
                <p className='form-errors'>{formik.errors.name}</p>
              ) : null
            }
          </section>

          {/* Email  */}
          <section>
            <input 
              type="email"
              name='email'
              placeholder='Enter Email'
              className='input-text'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />

            {formik.touched.email && formik.errors.email ? 
              (
                <p className='form-errors'>{formik.errors.email}</p>
              ) : null
            }
          </section>

          {/* Password  */}
          <section>
            <input 
              type="password"
              name='password'
              placeholder='Enter Password'
              className='input-text'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />

            {formik.touched.password && formik.errors.password ? 
              (
                <p className='form-errors'>{formik.errors.password}</p>
              ) : null
            }
          </section>

          {/* Confirm Password  */}
          <section>
            <input 
              type="password"
              name='confirmPassword'
              placeholder='Confirm Password'
              className='input-text'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmPassword}
            />

            {formik.touched.confirmPassword && formik.errors.confirmPassword ? 
              (
                <p className='form-errors'>{formik.errors.confirmPassword}</p>
              ) : null
            }
          </section>

          {/* Submit Button  */}
          <section>
            <button type='submit' disabled={!(formik.isValid && formik.dirty)}>
              Submit
            </button>
          </section>
        </div>
      </form> 
    </div>
  )
}

export default App
