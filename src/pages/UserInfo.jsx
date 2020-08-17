import React, { Component } from "react";
import axios from "axios";
import StepProgressBar from "../components/StepProgressBar";
import NavBar from "../NavBar";
import { useFormik } from "formik";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';


const validate = values => {
    const errors = {};
    if (!values.name) {
      errors.name = 'Required';
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


  const TaglineTooltip = withStyles((theme) => ({
    tooltip: {
      backgroundColor: '#f5f5f9',
      color: 'rgba(0, 0, 0, 0.87)',
      maxWidth: 220,
      fontSize: theme.typography.pxToRem(12),
      border: '1px solid #dadde9',
    },
  }))(Tooltip);

  const URLTooltip = withStyles((theme) => ({
    tooltip: {
      backgroundColor: '#f5f5f9',
      color: 'rgba(0, 0, 0, 0.87)',
      maxWidth: 220,
      fontSize: theme.typography.pxToRem(12),
      border: '1px solid #dadde9',
    },
  }))(Tooltip);
  
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
          axios.post('/api/profile/create', values)
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
        
        <div class="pls">
        <div class="form-body">
        <div class="form-container">
        <form onSubmit={formik.handleSubmit}>
        <div class="inputs">Please fill out this information</div>
        <div class="inputs full" >
          <input 
            type="text" 
            id="name"
            name="name"
            placeholder=" " 
            onChange={formik.handleChange} 
            onBlur={formik.handleBlur} 
            value={formik.values.name} />
          {formik.errors.name ? <label style={{color: "#F93A7F"}}>Full Name - {formik.errors.name}</label> : <label>Full Name</label>}
        </div>
        <div class="inputs half">
          <input 
              type="text" 
              id="tagline"
              name="tagline"
              placeholder=" " 
              onChange={formik.handleChange} 
              onBlur={formik.handleBlur} 
              value={formik.values.tagline} />
          {formik.errors.tagline ? <label style={{color: "#F93A7F"}}>Main Tagline - {formik.errors.tagline}</label> : <label>Main Tagline</label>}
        </div>
        <div class="inputs half">
          <input 
              type="text" 
              id="tagline_2"
              name="tagline_2"
              placeholder=" " 
              onChange={formik.handleChange} 
              onBlur={formik.handleBlur} 
              value={formik.values.tagline_2} />
          
          {formik.errors.tagline_2 ? <label style={{color: "#F93A7F"}}>Small Tagline (Optional) - {formik.errors.tagline_2}</label> : <label>Small Tagline (Optional)</label>}
          </div>


          <span className="question-pos"></span>
          <TaglineTooltip
        title={
          <React.Fragment>
            <b>{'Main tagline '}</b> is large text that appears on header <br></br><em>{" Ex: "}</em><u>{ "I'm a freelance Web Designer with over 9 years of experience"}</u><br></br><br></br>
            <b>{'Small tagline '}</b> appears underneath with smaller text<br></br><em>{" Ex: "}</em><u>{ "I'm based in New York, and I design websites & apps that help businesses grow"}</u><br></br>
          </React.Fragment>
        }
        placement="right"
      >
      <div className="question">
      <button><FontAwesomeIcon icon={faQuestionCircle}/></button>
      </div>
      
        </TaglineTooltip>
        
          
          
        <div class="inputs full">
          <input 
              type="text" 
              id="photo_url"
              name="photo_url"
              placeholder=" " 
              onChange={formik.handleChange} 
              onBlur={formik.handleBlur} 
              value={formik.values.photo_url} />
          {formik.errors.photo_url ? <label style={{color: "#F93A7F"}}>Photo URL - {formik.errors.photo_url}</label> : <label>Photo URL</label>}
        </div>
        
        <span className="question-pos2"></span>
        <URLTooltip
        title={
          <React.Fragment>
            <b>{'Photo URL '}</b> is a URL that links to a wide photo that will span the top of the page. It's a cover/header photo.
          </React.Fragment>
        }
        placement="right"
      >
      
        <button><FontAwesomeIcon icon={faQuestionCircle} /></button>
      
        </URLTooltip>
        <div class="inputs full">
          <input 
            type="text" 
            id="bio"
            name="bio"
            placeholder=" " 
            onChange={formik.handleChange} 
            onBlur={formik.handleBlur} 
            value={formik.values.bio} />
          {formik.errors.bio? <label style={{color: "#F93A7F"}}>Bio - {formik.errors.bio}</label> : <label>Bio</label>}
        </div>
        <div class="inputs"><button type="submit" class="form-button">Submit</button></div>
        </form>
        </div>
        </div>
        </div>
        </div>
        </div>
        <div className="background-gradient"></div>
    </div>
    );
}

export default UserInfo;