import React, { Component } from "react";
import axios from "axios";
import StepProgressBar from "../components/StepProgressBar";
import NavBar from "../NavBar";
import { useFormik } from "formik";


const validate = values => {
    const errors = {};
    if (!values.name) {
      errors.firstName = 'Required';
    } else if (values.name.length > 30) {
      errors.name = 'Must be 30 characters or less';
    }
  
    if (!values.tagline) {
      errors.tagline = 'Required';
    } else if (values.tagline.length > 100) {
      errors.tagline = 'Must be 100 characters or less';
    }
  
    if (values.tagline_2.length > 100) {
      errors.tagline_2 = 'Must be 100 characters or less';
    }

    if (!values.photo_url) {
      errors.photo_url = 'Required';
    } 

    if (!values.bio) {
      errors.bio = 'Required';
    } else if (values.bio.length > 300) {
      errors.bio = 'Must be 300 characters or less';
    }
  
    return errors;
  };
  
const UserInfo = () => {
    const formik = useFormik({
        initialValues: {
          name: '',
          tagline: '',
          tagline_2: '',
          photo_url: '',
          bio: '',
        },
        validate,
        onSubmit: (values, actions) => {
          axios.post('/api/test', values)
          .then((result) => console.log(result.data))
          actions.setSubmitting(false)
          actions.resetForm()
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
          <label htmlFor="name">Name</label>
          <input
              id="name"
              name="name"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
          />
          {formik.errors.name ? <div>{formik.errors.name}</div> : null}
          <label htmlFor="tagline">Tagline</label>
          <input
              id="tagline"
              name="tagline"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.tagline}
          />
          {formik.errors.tagline ? <div>{formik.errors.tagline}</div> : null}
          <label htmlFor="tagline_2">Tagline 2 *Optional*</label>
          <input
              id="tagline_2"
              name="tagline_2"
              type="tagline_2"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.tagline_2}
          />
          {formik.errors.tagline_2 ? <div>{formik.errors.tagline_2}</div> : null}
          <label htmlFor="name">Header Photo Url</label>
          <input
              id="photo_url"
              name="photo_url"
              type="photo_url"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.photo_url}
          />
          {formik.errors.photo_url ? <div>{formik.errors.photo_url}</div> : null}
          <label htmlFor="name">Bio</label>
          <input
              id="bio"
              name="bio"
              type="bio"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.bio}
          />
          {formik.errors.bio ? <div>{formik.errors.bio}</div> : null}
          <button type="submit">Submit</button>
        </form>
        </div>
        </div>
        <div className="background-gradient"></div>
    </div>
    );
}

export default UserInfo;