import axios from "axios"
export const loginCall=async(userCredentials,dispatch)=>{
dispatch({type:'LOGIN_START'})
try{
    const res=await axios.post('http://localhost:4000/api/user/',userCredentials);
    dispatch({type:'LOGIN_SUCCESS',payload:res.data.userData});
    
}
catch(err)
{
    dispatch({type:'LOGIN_FAILURE',payload:err});
}

}

export const registerCall=async(userCredentials)=>{
    
    try{
       
       
        return await axios.post('http://localhost:4000/api/auth',userCredentials).catch((err)=>err)
        
        
        
        
    }
    catch(err)
    {
    //    console.log(err)
    }
    
    }