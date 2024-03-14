import { Task } from "./Task"
import { Goal } from "./Goal"
import { FrequencyType } from "../enums/FrequencyType.tsx";
import { Reward } from "./Reward.ts";

export class User {
    id:string = '';
    name:string;
    tasks: {[key:string]:Task};
    token:boolean;
    goals: Goal[];
    rewards: Reward[];
    dailyCoins: number;
    weeklyCoins: number;
    monthlyCoins: number;
    private dailyRewardCollectedDate?: Date = undefined;

    // constructor(name : string, tasks:Task[], token:boolean, goals:Goal[]){
    //     this.name = name;
    //     this.tasks = tasks;
    //     this.token = token;
    //     this.goals = goals;
    //     this.dailyCoins = 0;
    //     this.rewards = [];
    // }

    constructor(id:string, name : string, tasks: {[key:string]:Task}){
        this.name = name;
        this.tasks = tasks;
        this.token = false;
        this.goals = [];
        this.dailyCoins = 0;
        this.id = id;
        this.rewards = [];
    }

    readonly getDailyTasks = () : Task[] => {
        const taskArray: Task[] = Object.values(this.tasks);
        return taskArray.filter(i => i.frequency === FrequencyType.Daily);
    }
    
    readonly getDailyProgressPercentage = () => { 
        const completedTaskCount : number = this.getDailyTasks().filter(t => t.isCompleted()).length;
        const totalTaskCount : number = this.getDailyTasks().length;
    
        if(completedTaskCount === 0 || totalTaskCount === 0)
            return 0;

        const percentage = Math.floor(completedTaskCount/totalTaskCount * 100);
        return percentage.toString() + "%";
    }

    readonly dailyTasksAreComplete = () => {
        const completedTasks = this.getDailyTasks().filter(t => t.isCompleted()).length;
        const allTasks = this.getDailyTasks().length;

        if(completedTasks === 0 || allTasks === 0)
            return false;

        if(completedTasks === allTasks)
            return true;

        return false;
    }

    readonly dailyRewardCollected = function(){
        if(this.dailyRewardCollectedDate === undefined || this.dailyRewardCollectedDate === null){
            return false;
        }
        return this.dailyRewardCollectedDate.getUTCDate() + 1 < new Date().getUTCDate() ? false : true;
    }

    readonly dailyRewardAvailable = function(){
        if(!this.dailyTasksAreComplete()){
            return false;
        }
        return !this.dailyRewardCollected();
    }

    readonly collectDailyReward = function(){
        this.dailyRewardCollectedDate = new Date();
        this.dailyCoins += 1;
    }
}