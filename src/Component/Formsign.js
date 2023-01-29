import React, { useEffect, useState } from 'react';
import './Formvalidate.css';
import {Validate} from "./Validate";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

const Formsign = (props) => {
    const [data,setData]=useState({username:"",email:"", password:"", passwordcheck:"",checkform:false,});
    const [error,setError]=useState({});
    const [focus,setFocus]=useState({});
    const changeHandler=(event)=>{
        if(event.target.type=="checkbox"){
            setData({...data,[event.target.name]:event.target.checked,})
        }else{setData({...data,[event.target.name]:event.target.value,})}
//    console.log(event)
    }
    const changeFocuse=(e)=>{
        setFocus({...focus,[e.target.name]:true})    
    }
    useEffect(()=>{
        setError(Validate(data,"formsign"))
    },[data])
// start toast
const notify = (type,text) => {
    if(type==="success"){
        toast.success(text, {
            position: "top-right",
            autoClose: 3000,
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
   notify("","اطلاعاتتون رو درست وارد نکردید💁💁")
}else{
   notify("success","ثبت نام موفقیت آمیز بود😎😎")
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
        <h3> ! باسلام</h3>
        <h3>برای خودتان یک حساب کاربری بسازید</h3>
            <div> 
            <label>نام کاربری</label>  
            {/* error.username&&focus.username?"error":"success"  */}
            <input 
            className={ColorinputHandler(error.username,focus.username)}
            type="text" 
            name="username" 
            value={data.username} 
            onChange={changeHandler} 
            onFocus={changeFocuse}
            />

            {error.username&&focus.username&&<span>{error.username}</span>}
            </div>
            <div>
            <label>ایمیل</label>    
            <input type="text" name="email" value={data.email} onChange={changeHandler} onFocus={changeFocuse}  className={ColorinputHandler(error.email,focus.email)}/>
            {error.email&&focus.email&&<span>{error.email}</span>}
            </div>
            <div>
            <label>پسورد</label>    
            <input type="text" name="password" value={data.password} onChange={changeHandler} onFocus={changeFocuse}  className={ColorinputHandler(error.password,focus.password)}/>
            {error.password&&focus.password&&<span>{error.password}</span>}
            </div>
             <div>
             <label>تکرار پسورد</label>    
            <input type="text" name="passwordcheck" value={data.passwordcheck} onChange={changeHandler} onFocus={changeFocuse}  className={ColorinputHandler(error.passwordcheck,focus.passwordcheck)}/>
            {error.passwordcheck&&focus.passwordcheck&&<span>{error.passwordcheck}</span>}
             </div>
            <div className="check">
            {error.checkform?<label >تمام قوانین سایت را می پذیرم</label>:<label className="accept"  >تمام قوانین سایت را می پذیرم</label> }   
            <input type="checkbox" name="checkform" value={data.checkform} onChange={changeHandler} onFocus={changeFocuse}/>
           
            </div>
          <div className="submitstyle">
          <Link to="/login" >ورود</Link>
          <input type="submit" value={"ثبت نام"} />
          </div>
         </form>  
         <ToastContainer /> 
        </div>  
          
    );
};

export default Formsign;