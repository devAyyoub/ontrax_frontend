import type { Task, TaskFormData } from "../types";
import api from "@/lib/axios";
import { isAxiosError } from "axios";

type TaskApi = {
    formData: TaskFormData,
    projectId: Task['_id']
}

export const createTask = async ({formData, projectId} : TaskApi) => {
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
