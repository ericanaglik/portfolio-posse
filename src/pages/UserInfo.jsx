import React from "react";
import StepProgressBar from "../components/StepProgressBar"
import NavBar from "../NavBar"
import { useFormik } from 'formik';


const validate = values => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = 'Required';
    } else if (values.firstName.length > 15) {
      errors.firstName = 'Must be 15 characters or less';
    }
  
    if (!values.lastName) {
      errors.lastName = 'Required';
    } else if (values.lastName.length > 20) {
      errors.lastName = 'Must be 20 characters or less';
    }
  
    if (!values.professionalTitle) {
      errors.professionalTitle = 'Required';
    } else if (values.professionalTitle.length > 20) {
      errors.professionalTitle = 'Must be 20 characters or less';
    }
  
    return errors;
  };
  
const UserInfo = () => {
    const formik = useFormik({
        initialValues: {
          firstName: '',
          lastName: '',
          professionalTitle: '',
        },
        validate,
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });
    return (
    <div>
        <div className="page" style={{ textAlign: "center" }}>
            
        <div className="nav-container">
            <header className="auth_header_area">
                <NavBar/>
            </header>
        </div>
        
        <div className="container-auth">
            
        <div className="progress-bar">
            <StepProgressBar/>
        </div>
        
        <form onSubmit={formik.handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
            id="firstName"
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
        />
        {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
        <label htmlFor="lastName">Last Name</label>
        <input
            id="lastName"
            name="lastName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
        />
        {formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}
        <label htmlFor="professionalTitle">Professional Title </label>
        <input
            id="professionalTitle"
            name="professionalTitle"
            type="professionalTitle"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.professionalTitle}
        />
        {formik.errors.professionalTitle ? <div>{formik.errors.professionalTitle}</div> : null}
        <button type="submit">Submit</button>
        </form>
        </div>
        </div>
        <div className="background-gradient"></div>
    </div>
    );
}

export default UserInfo;