import { Task } from "../models/Task.tsx";
import { User } from "../models/User.tsx";
import { parseTasksFromObject } from "../utils/TaskUtils.ts";
import { parseRewardsFromObject } from "../utils/RewardUtils.ts";

const API_BASE_URL = 'https://6ldoyn4yl1.execute-api.ap-southeast-2.amazonaws.com/beta/users';

export const tryLoginUser = async (userName:string, password:string)=> {
    try {
        const queryStringParameters = {
            "userName": userName,
            "password": password
        };

        const queryString = new URLSearchParams(queryStringParameters).toString(); 
        const response = await fetch(`${API_BASE_URL}/?${queryString}`);
        const data = await response.json();
        console.log(data);
        if (!response.ok) {
            throw new Error('Failed to get user');
        }
        return data;
    } 
    catch (error) {
        console.error('Error fetching user data:', error);
        throw error;
    } 
};

export const getUser = async(userName:string, password:string) =>{
    const userData = await tryLoginUser(userName, password);
    const userTasks = parseTasksFromObject(userData.Item.tasks);
    const userRewards = parseRewardsFromObject(userData.Item.rewards);
    console.log(userData.Item.dailyRewardCollectedDate);
    const user : User = new User(userData.Item.ID, userData.Item.userName, userTasks, userRewards, userData.Item.dailyCoins, userData.Item.dailyRewardCollectedDate);
    console.log(user.id);
    return user;
}

export const saveUser = async(user:User) => {
    try {
        const requestBody = {
            body:{
                "user": user,
            }
        };
        console.log(JSON.stringify(requestBody));
        const response = await fetch(`${API_BASE_URL}/`, {
            body: JSON.stringify(requestBody),
            method:'POST',
            headers: {'Content-Type': 'application/json'},
        });
        const data = await response.json();
        console.log(data);
       
        if (!response.ok) {
            throw new Error('Failed to save user');
        }
    } 
    catch (error) {
        console.error('Error saving user data:', error);
        throw error;
    } 
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