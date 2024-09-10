export type PriorityUnion = 'low' | 'normal' | 'high';

export interface TaskData {
    taskId: number;
    isCheckTask: boolean;
    checkTypeIncoming: boolean;
    date?: Date;
    isExpired?: boolean;
    // из этого
    isHighPriority: boolean;
    isMidPriority: boolean;
    isLowPriority: boolean;
    //переделать на это
    //priority: PriorityUnion;
}

export type TaskList = Map<number, TaskData>;
