import React, { useEffect, useState } from 'react';
import './Formvalidate.css';
import {Validate} from "./Validate";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

const Formlogin = (props) => {
    const [data,setData]=useState({username:"",email:"", password:"", passwordcheck:"",checkform:false,});
    const [error,setError]=useState({});
    const [focus,setFocus]=useState({});
    const changeHandler=(event)=>{
        setData({...data,[event.target.name]:event.target.value,})}
    const changeFocuse=(e)=>{
        setFocus({...focus,[e.target.name]:true})    
    }
    useEffect(()=>{
        setError(Validate(data,"formlogin"))
    },[data])
// start toast
const notify = (type,text) => {
    if(type==="success"){
        toast.success(text, {
            position: "top-right",
            autoClose: 2000,
            theme: "colored",
            });
    }else{
        toast.warn(text, {
            position: "top-right",
            autoClose: 3000,
            theme: "colored",
            });
    }
};



const Submithandler=(e)=>{
e.preventDefault();
if( !Object.keys(error).length==0){
   setFocus({
    username:true,
    email:true,
    password:true,
    passwordcheck:true,
   })
   notify("","کاربری با این اطلاعات وجود ندارد💁💁")
}else{
   notify("success","به حساب کاربری خود خوش آمدید")
}
}

const ColorinputHandler=(x,y)=>{
    if(x&&y){
        return "error";
    }else if(!x&&y){
        return "success"
    }
}

    return (
          
        <div className='wrapper'>
      
        <form className="wrapper-form" onSubmit={Submithandler}>
        <h3>سلام</h3>
        <h3>به حساب کاربری خود وارد شوید</h3>
            <div>
            <label>ایمیل</label>    
            <input type="text" name="email" value={data.email} onChange={changeHandler} onFocus={changeFocuse}  className={ColorinputHandler(error.email,focus.email)}/>
            {error.email&&focus.email&&<span>{error.email}</span>}
            </div>
            <div>
            <label>پسورد</label>    
            <input type="password" name="password" value={data.password} onChange={changeHandler} onFocus={changeFocuse}  className={ColorinputHandler(error.password,focus.password)}/>
            {error.password&&focus.password&&<span>{error.password}</span>}
            </div>
          <div className="submitstyle">
          <Link to="/signup">ثبت نام</Link>
          <input type="submit" value={"ورود"} />
          </div>
         </form>  
         <ToastContainer /> 
        </div>  
           
    );
};

export default Formlogin;