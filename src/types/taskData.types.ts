export interface TaskData {
    taskId: number;
    isOpenTask: boolean;
    isSelected: boolean;
    isFirstOpen: boolean;
    isCheckTask: boolean;
    checkTypeIncoming: boolean;
    checkOpenTypeKinds: boolean;
    date?: Date;
    isExpired?: boolean;
}

export type TaskList = Map<number, TaskData>;
