const valid = ({fullname, username, email, password, cf_password, usertype}) => {

    const err = {}

    if(!fullname) {
        err.fullname = "Please add your full name."
    } else if (fullname.length > 25 ){
        err.fullname = "Full name is upto 25 Characters."
    }
    
        
    if(!username) {
        err.username = "Please add your username."
    } else if (username.replace(/ /g, '' ).length > 25 ){
        err.username = "Username is upto 25 characters long."
    }

    if(!email) {
        err.email = "Please add your email."
    } else if (!validateEmail(email) ){
        err.email = "Email format is incorrect"
    }
    
    if(!password) {
        err.password = "Please add your password."
    } else if (password.length < 6  ){
        err.password = "Password must be at least 6 character"
    }

    if(password !== cf_password) {
        err.cf_password = "Confirm password did not match"
    } 
    
    if(!usertype) {
        err.usertype = "Please select your usertype."
    }  

    return {
        errMsg: err,
        errLength: Object.keys(err).length
    }
    
}

function validateEmail(email) {
    // eslint-disable-next-line
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

 
  

  export default valid
