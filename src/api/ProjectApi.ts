import type { ProjectFormData } from "@/types/index";
import api from "@/lib/axios";

export async function createProject(formaData : ProjectFormData) {
    try {
        const {data} = await api.post('/projects', formaData)
        console.log(data);
        
    } catch (error) {
        
    }
}