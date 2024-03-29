
const initialState={
    isloding:false,
    singup:false,
    login:false,
    user:null,
    err:null,
}

const userreducer=(state=initialState,action)=>{

    switch(action.type){
        case "SINGUP-REQ":
            return{
                ...state,
                isloding:true,
            }
        case "SINGUP-RES":
            return{
                ...state,
                isloding:false,
                singup:true,
            }
         case "SIGNUP_REJ":
                return {
                  ...state,
                  err:"something wrong",
         };
         case "LOGIN-REQ":  
         return {
           ...state,
           isLoading: true,
             
         };
 
       case "LOGIN-RES":
         return{
           ...state,
           isLoading:false,
           isSignup: true,
           
 
         };
 
       case "LOGIN-REJ":
         return{
           ...state,
           isLoading:false,
           err:"something wrong"
           
         };
 
 
         case "LOGOUT-REQ":
           return{
             ...state,
             isLoading:true
           };
         case "LOGOUT-RES":
             return{
               ...state,
               isLoading:false,
               isSignup:false,
               user:null
             };
         case "LOGOUT-REJ":
               return{
                 ...state,
                 isLoading:false,
                 err:"something went wrong"
               };
 
 
       case "GOGGLE-REQ":
         return{
           ...state,
           isLoading:true,
         };
       case "GOGGLE-RES":
           return{
             ...state,
            isLoading:false,
            user:action.payload,
            isLogin:true,
           };
 
       case "GOGGLE-REJ":
          return{
               ...state,
               isLoading:false,
               err :"server-error",
             };
       
       default:
         return state;
     }
   };

export default userreducer