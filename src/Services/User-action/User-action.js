
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword,signInWithPopup} from "firebase/auth";
import { auth } from "../../Confing";
import { Provider } from "../../Confing";




export const signupReq = () => {
  return {
    type: "SIGNUP_REQ",
  };
};



export const signupRes = (user) => {
  return {
    type: "SIGNUP_RES",
    payload: user,
  };
};


export const signupRej = (error) => {
  return {
    type: "SIGNUP_REJ",
   
  };
};

export const loginreq =()=>{
  return{
    type:"LOGIN-REQ",
  }
};
export const loginres =()=>{
  return{
    type:"LOGIN-RES",
  }
};
export const loginrej =()=>{
  return{
    type:"LOGIN-REJ",
  }
}

export const gogglereq =()=>{
  return{
    type:"GOGGLEREQ",

  }
}

export const logoutreq=()=>{
  return{
    type:"LOGOUT-REQ",
  }
}
export const logoutres=()=>{
  return{
    type:"LOGOUT-RES",
  }
}
export const logoutrej=()=>{
  return{
    type:"LOGOUT-REJ",
  }
}


export const goggleres =(data)=>{
  return{
    type:"GOGGLERES",
    payload:data,
    
  }
}

export const gogglerej =()=>{
  return{
    type:"GOGGLEREJ",
    
  }
}

export const createfrom=(data)=>{
  return{
    type:"CREATEFROM",
    payload:data,
  }

}

export const addpagefrom = (email, password) => {
  return async (dispatch) => {
    dispatch(signupReq());

    await createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
      const user = userCredential.user;
      console.log("user", user);
      dispatch(signupRes(user));
    }).catch((err) => {
      dispatch(signupRej(err))
      console.log(err);
    })

  }

};

export const loginpage =(email,password)=>{
  return async dispatch =>{
    dispatch(loginreq());
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      
        const user = userCredential.user;
        dispatch(loginres(user));
    })
    .catch((err)=>{
        const errCode = err.code;
        const errMessage = err.message;
    })
}   
}

export const googleprovide =()=>{
  return async dispatch =>{
    dispatch(gogglereq());

    await signInWithPopup (auth ,Provider).then((res)=>{
        console.log("res",res.user);

      dispatch(goggleres(res.user));
    }).catch((err)=>{
      console.log("err",err);
      dispatch(gogglerej());
    })
  }
}

export const logout=()=>{
  return async dispatch=>{
    dispatch(logoutreq());

    await signOut(auth).then(()=>{
      dispatch(loginres());
    })
    .catch((err)=>{
      dispatch(loginrej(err))
    })
  }
}


