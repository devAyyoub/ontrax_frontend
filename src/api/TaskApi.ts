import type { Project, Task, TaskFormData } from "../types";
import api from "@/lib/axios";
import { isAxiosError } from "axios";

type TaskApi = {
    formData: TaskFormData,
    projectId: Project['_id'],
    taskId: Task['_id']
}

export const createTask = async ({formData, projectId} : Pick<TaskApi, 'formData' | 'projectId'>) => {
  try {
    const url = `/projects/${projectId}/tasks`
    const { data } = await api.post<string>(url, formData)
    return data
  } catch (error) {
    if(isAxiosError(error) && error.response) {
        return new Error(error.response.data.error)
    }
  }
};

export const getTaskById = async ({projectId, taskId} : Pick<TaskApi, 'projectId' | 'taskId'>) => {
  try {
    const url = `/projects/${projectId}/tasks/${taskId}`
    const { data } = await api.get(url)
    return data
  } catch (error) {
    if(isAxiosError(error) && error.response) {
        return new Error(error.response.data.error)
    }
  }
}
