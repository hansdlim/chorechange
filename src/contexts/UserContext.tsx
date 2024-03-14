import React, {useContext, useState, Dispatch, SetStateAction} from "react";
import { User } from "../models/User.tsx";
import { FrequencyType } from "../enums/FrequencyType.tsx";
import { Task } from "../models/Task.tsx";
import { getUserById } from "../api/usersApi.ts";

type UserContextType = {
    user: User,
    setUser: Dispatch<SetStateAction<User>>
}

const activeUser:User = new User('','',{});
        
export const UserContext = React.createContext<UserContextType>({user:activeUser, setUser: () => {}});

export default function UserProvider({children}){
    const [user, setUser] = useState(activeUser);
    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}
