import { FrequencyType } from "../enums/FrequencyType"

export type GoalCheckpoint = {
    checkpointReward:number,
}

export class Goal {
    name:string;
    timeFrame:FrequencyType;
    reward:number;
    checkpoints: GoalCheckpoint[];
    active: boolean

    constructor(goalName:string, goalTimeFrame:FrequencyType, goalReward:number, numOfCheckpoints:number){
        this.name = goalName;
        this.timeFrame = goalTimeFrame;
        this.reward = goalReward;
        this.createCheckpoints(numOfCheckpoints);
    }

    private readonly createCheckpoints = (num:number) => {
        // for(let i = 0; i < num; i++){

        // }
    }
}