import express from "express";

import { register,login_page,landing_page,home,student_new_records,new_record,edit_student,update_student,delete_student,search_student,view_student} from "../controllers/home.js";

const route = express.Router();

route.get('/register',register)
route.get('/',landing_page)
route.get('/home',home)
route.get('/new_record',student_new_records);
route.post('/new_record',new_record);
route.get('/edit/:id',edit_student);
route.post('/update_student/:id',update_student);
route.post('/delete/:id',delete_student);
route.post('/search',search_student);
route.post('/login',login_page)
route.get('/view/:id',view_student)


export default route;