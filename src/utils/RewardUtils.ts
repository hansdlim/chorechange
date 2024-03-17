import { Reward } from "../models/Reward.ts";

export function parseRewardFromJSON(json: any): Reward {
    const { id, name, description, price} = json;
    const reward = new Reward(id, name, description, price);
    return reward;
}

export function parseRewardsFromObject(rewardsObject: { [key: string]: any }): { [key: string]: Reward } {
    if(rewardsObject === undefined || rewardsObject === null)
        return {};
    const parsedRewards: { [key: string]: Reward } = {};

    for (const [rewardId, rewardJSON] of Object.entries(rewardsObject)) {
        parsedRewards[rewardId] = parseRewardFromJSON(rewardJSON);
    }

    return parsedRewards;
}