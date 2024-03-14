import { Task } from "../models/Task.tsx";

export function parseTaskFromJSON(json: any): Task {
    const { id, reward, taskName, frequency, periods, completedPeriods, lastCompletedDate } = json;
    const task = new Task(id, reward, taskName, frequency, periods,completedPeriods, new Date(lastCompletedDate));
    return task;
}

export function parseTasksFromObject(taskObject: { [key: string]: any }): { [key: string]: Task } {
    const parsedTasks: { [key: string]: Task } = {};

    for (const [taskId, taskJSON] of Object.entries(taskObject)) {
        parsedTasks[taskId] = parseTaskFromJSON(taskJSON);
    }

    return parsedTasks;
}