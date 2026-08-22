import mongoose from "mongoose";
const studentSchema = new mongoose.Schema({
    name:{
        type:'String',
        required:true
    },
    form:{
         type:'String',
        required:true
    },
    phoneNumber:{
         type:'String',
        required:true
    },
    address:{
         type:'String',
        required:true
    },
    status:{
        type:String,
        required: true

    }

})

const Student = mongoose.model('Student',studentSchema);

export default Student;