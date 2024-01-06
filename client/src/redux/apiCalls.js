

//login function 적을 공간

import { publicRequest } from "../requestMethods";
import { loginFailure, loginStart, loginSuccess } from "./userRedux"

export const login = async (dispatch, user) => {
    dispatch(loginStart());
    
    try{
        const res = await publicRequest.post("/auth/login");
        dispatch(loginSuccess(res.data));
    }catch{
        dispatch(loginFailure());

    }

}