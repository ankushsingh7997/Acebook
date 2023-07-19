import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  user: {
    "_id": "6486362229cdfba919d75883",
    "username": "ankushsingh33",
    "password": "$2b$07$562pm9FzIXEs.dknpnRShOGDZ.UPMySwR/jZPNYCguL56Y1JmlZh6",
    "email": "ankussingh@gmail.com",
    "profilePicture": "",
    "coverPicture": "",
    "followers": [
        "6486bbefe7ad5d59e543c653",
        "64870745682eb1b55b08be10",
        "64a468787f2284145c05fd7a"
    ],
    "isAdmin": false,
    "createdAt": "2023-06-11T21:01:22.118Z",
    "updatedAt": "2023-07-04T18:59:00.531Z",
    "__v": 0,
    "followings": [
        "64870745682eb1b55b08be10",
        "6486bbefe7ad5d59e543c653",
        "64a468787f2284145c05fd7a"
    ],
    "isDeleted": false,
    "desc": "hii there",
    "city": "jammu",
    "from": "jammu and kashmir",
    "relationship": 1
},
  isFetching: false,
  error: false,
};
export const AuthContex = createContext(INITIAL_STATE);

export const AuthContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  return (
    <AuthContex.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch
      }}
    >
        {children}

    </AuthContex.Provider>
  );
};
