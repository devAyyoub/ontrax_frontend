import type { ProjectFormData } from "@/types/index";
import api from "@/lib/axios";
import { isAxiosError } from "axios";

export async function createProject(formaData : ProjectFormData) {
    try {
        const {data} = await api.post('/projects', formaData)
        return data       
    } catch (error) {
        if(isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}