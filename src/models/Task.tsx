import { FrequencyType } from "../enums/FrequencyType.tsx"

export class Task {
    id: string;
    reward = 0;
    taskName = "";
    frequency = FrequencyType.Daily;
    periods: number = 0;
    completedPeriods:number = 0
    lastCompletedDate?: Date = undefined;
    
    constructor(id:string, reward:number, taskName:string, frequency:FrequencyType, periods:number,  completedPeriods:number, lastCompletedDate?:Date){
        this.id = id;
        this.reward = reward;
        this.taskName = taskName;
        this.frequency = frequency;
        this.periods = periods;
        this.completedPeriods = completedPeriods;
        this.lastCompletedDate = lastCompletedDate;
    }

    readonly isCompleted = function(){
        if(this.lastCompletedDate === undefined || this.lastCompletedDate === null){
            return false;
        }
        const isCompleted = (this.lastCompletedDate.getUTCDate() + 1) > new Date().getUTCDate() ? true : false;
        // console.log('lastcompleteddate:' +this.lastCompletedDate+1);
        // console.log('currentdate:' +new Date());
        // console.log(isCompleted);
        return isCompleted;
    }

    readonly completeTask = function(){
        // this.completePeriods = 0;
        this.lastCompletedDate = new Date();
    }
}