
import Student from "../models/studentSchema.js";

const view_student = async(req,res)=>{

    try {
    const student = await Student.findById(req.params.id)
    res.render('student',{student})
    } catch (error) {
       console.log(error.message) 
    }
    
}
const landing_page = (req,res)=>{res.render('login')
}
const home = async(req,res)=>{

    const page = parseInt(req.query.page)|| 1;
    const limit = 20;

    try {

      const totalStudents = await Student.countDocuments();
      const totalPages = Math.ceil(totalStudents/limit);
      const records = await Student.find({}).skip((page-1)*limit).limit(limit).exec();
      res.status(200).render("index",{records,currentPage:page,totalPages})
    
    } catch (error) {
      console.log(error.message)  
    }
}

const student_new_records = async (req,res)=>{
    try {
        res.render('student_new_record')

    } catch (error) {
        console.log(error.message)
    }
}


const new_record = async (req,res)=>{
const {name,form,phoneNumber,address,status}= (req.body);
try {
    const newStudent = new Student({
        name:req.body.name,
        form:req.body.form,
        phoneNumber:req.body.phoneNumber,
        address:req.body.address,
        status:req.body.status
    })
      newStudent.save();
      res.redirect('/home');

} catch (error) {
    console.log('Error in serving data', error)
}

}

const edit_student = async(req,res)=>{
 
    try {
        const record = await Student.findById(req.params.id)
        res.render('update_record',{record})
    } catch (error) {
       console.log(error.message) 
    }
}

const update_student = async(req,res)=>{
  try {
    await Student.findByIdAndUpdate(req.params.id,req.body,{'new':true});
    res.redirect('/home')

  } catch (error) {
    console.log(error.message)
  }
}

const delete_student = async(req,res)=>{
    await Student.findByIdAndDelete(req.params.id);
    res.redirect('/home')
}

const search_student =async(req,res)=>{ 
    try {
    const searchQuery = req.body.search;
    const students = await Student.find({
    name:{$regex:searchQuery,$options:'i'}
    })
    res.render('result',{students,searchQuery})
    } catch (error){
     console.log(error.message)
    }
}

const login_page = async(req,res)=>{
const userName=req.body.name;
const userPassword= req.body.password;

if (!userName && !userPassword) {
res.render('404')
// 
} else(
res.redirect(`/home`)
)


}


const register = async(req,res)=>{

res.redirect('/login')
 
}



export{register,home,student_new_records,new_record,edit_student,update_student,delete_student,search_student,landing_page,login_page,view_student} ;