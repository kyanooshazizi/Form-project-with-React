
export const Validate = (data,type) => {
   const error={};
   if(type==="formsign"){
    if(!data.username.trim()){
        error.username="لطفا نام کاربری خود را وارد کنید"
    }else if((!/^[a-z\d]{5,10}$/.test(data.username))){
        error.username="نام کاربری نامعتبر است"
    }
    else{
        delete error.username; 
    }
    if(!data.email.trim()){
        error.email="لطفا ایمیل خود را وارد کنید";
    }else if(!(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(data.email))){
error.email="ایمیل نامعتبر است";
    }else{
        delete error.email;
    }

    if(!data.password){
        error.password="لطفا یک پسورد معتبر وارد نمایید";
    }else if(!(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,10}$/.test(data.password))){
        error.password="پسورد باید حداقل 6 حرف و شامل حروف و اعداد باشد";
    }else{
        delete error.password;
    }
    if(!data.passwordcheck){
        error.passwordcheck="پسورد خود را تکرارکنید";
    }else if(data.password!==data.passwordcheck){
     error.passwordcheck="پسورد ها برابر نیستند";
    }else{
        delete error.passwordcheck;
    }
    if(!data.checkform){
    error.checkform=" لطفا تیک مربوط به قوانین را بزنید";
    }else{
        delete error.checkform;
    }
   }
   else{
    if(!data.password || !(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,10}$/.test(data.password))){
        error.password="پسورد نادرست می باشد";
    }else{
        delete error.password;
    }
    if(!data.email.trim()){
        error.email="لطفا ایمیل خود را وارد کنید";
    }else if(!(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(data.email))){
error.email="ایمیل نامعتبر است";
    }else{
        delete error.email;
    }
   }

    
    // console.log((error.checkform))
    return error;
};

