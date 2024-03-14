import React, {useContext, useState, Dispatch, SetStateAction} from "react";
import { User } from "../models/User.tsx";
import { FrequencyType } from "../enums/FrequencyType.tsx";
import { Task } from "../models/Task.tsx";
import { getUserById } from "../api/usersApi.ts";

type UserContextType = {
    user: User,
    setUser: Dispatch<SetStateAction<User>>
}


// const task1:Task = new Task(10,"Make the Bed", FrequencyType.Daily, 1);
// const task2:Task = new Task(20,"Go to the gym", FrequencyType.Weekly, 4);


// const tasks: Task[] = [
//     task1,
//     task2
// ]

// const activeUser:User = new User("Hans", tasks,false, []);
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
