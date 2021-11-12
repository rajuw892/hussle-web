const mongoose = require('mongoose')



const userSchema = new mongoose.Schema({
       fullname: {
           type: String,
           required: true,
           trim: true,
           maxlength: 25
       },
       username: {
        type: String,
        required: true,
        trim: true,
        maxlength: 25,
        unique: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    contactno: {
      type: Number,
    
    },
    password: {
        type: String,
        required: true
         
    },

    avatar : {
        type: String,
        default: 'https://iupac.org/wp-content/uploads/2018/05/default-avatar.png'
    },

    role: {type: String, default: 'user'},
    usertype: {type: String, default: ''},
    headline: {type: String, default: ''},
    gender: {type: String, default: ''},
    mobile: {type: String, default: ''},
    address: {type: String, default: ''},
    story: {
        type: String,
        default: '',
        maxlength: 200
    },
    website: {type: String, default: ''},
    companyname: {type: String, default: ''},
    jobtitle: {type: String, default: ''},
    jobdate: {type: String, default: ''},
    pastcompanyname: {type: String, default: ''},
    pastjobtitle: {type: String, default: ''},
    pastjobdate: {type: String, default: ''},
    school: {type: String, default: ''},
    degree: {type: String, default: ''},
    schoolyear: {type: String, default: ''},
    universityname: {type: String, default: ''},
    universitydegreename: {type: String, default: ''},
    universityyear: {type: String, default: ''},
    skills: {type: String, default: ''},

    followers: [
        {
            type: mongoose.Types.ObjectId,
             ref: 'user'
        }
    ],
    following: [
        {
            type: mongoose.Types.ObjectId,
             ref: 'user'
        }
    ],

    



}, {
    timestamps: true

})



module.exports = mongoose.model('user', userSchema)