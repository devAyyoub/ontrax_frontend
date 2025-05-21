import api from "@/lib/axios";
import { isAxiosError } from "axios";
import { teamMemberSchema, type Project, type TeamMemberForm } from "../types";

type TeamApi = {
    formData: TeamMemberForm,
    projectId: Project['_id']
}

export const findUserByEmail = async ({formData, projectId} : TeamApi) => {
    try {
        const url = `/projects/${projectId}/team/find`
        const {data} = await api.post(url, formData)
        const result = teamMemberSchema.safeParse(data)
        if (result.success) {
            console.log(result.data);
            return result.data
        }  

    } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
}