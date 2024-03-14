import { Task } from "../models/Task.tsx";
import { User } from "../models/User.tsx";
import { parseTasksFromObject } from "../utils/TaskUtils.ts";

const API_BASE_URL = 'https://6ldoyn4yl1.execute-api.ap-southeast-2.amazonaws.com/beta/users';

export const getUserById = async (userId)=> {
    try {
        const response = await fetch(`${API_BASE_URL}`);
        if (!response.ok) {
            throw new Error('Failed to fetch user data');
        }
        const userData = await response.json();
        return userData;
    } 
    catch (error) {
        console.error('Error fetching user data:', error);
        throw error;
    } 
};

export const getUser = async(userId:string) =>{
    const userData = await getUserById(1);
    const userTasks = parseTasksFromObject(userData.Item.tasks);
    const user : User = new User(userData.Item.ID, userData.Item.userName, userTasks);
    console.log(user.id);
    return user;
}

export const saveUserTask = async(userId:string, task:Task) => {
    try {
        const requestBody = {
            body:{
                "userId": userId,
                "task": task
            }
        };
        console.log(JSON.stringify(requestBody));
        const response = await fetch(`${API_BASE_URL}/task/`, {
            body: JSON.stringify(requestBody),
            method:'POST',
            headers: {'Content-Type': 'application/json'},
        });
        const data = await response.json();
        console.log(data);
       
        if (!response.ok) {
            throw new Error('Failed to save user task');
        }
    } 
    catch (error) {
        console.error('Error fetching user data:', error);
        throw error;
    } 
}


export const deleteUserTask = async(userId:string, task:Task) => {
    try {
        const requestBody = {
            body:{
                "userId": userId,
                "task": task
            }
        };
        const response = await fetch(`${API_BASE_URL}/task/`, {
            body: JSON.stringify(requestBody),
            method:'DELETE',
            headers: {'Content-Type': 'application/json'},
        });
        const data = await response.json();
        console.log(data);
       
        if (!response.ok) {
            throw new Error('Failed to delete user task');
        }
    } 
    catch (error) {
        console.error('Error deleting user data:', error);
        throw error;
    } 
}