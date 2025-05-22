import api from "@/lib/axios";
import { isAxiosError } from "axios";
import { teamMemberSchema, teamMembersSchema, type Project, type TeamMember, type TeamMemberForm } from "../types";

type TeamApi = {
    formData: TeamMemberForm,
    projectId: Project['_id'],
    id: TeamMember['_id']
}

export const findUserByEmail = async ({formData, projectId} : Pick<TeamApi, 'projectId' | 'formData'>) => {
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

export const addUserToProject = async ({projectId, id} : Pick<TeamApi, 'projectId' | 'id'>) => {
    try {
        const url = `/projects/${projectId}/team`
        const {data} = await api.post(url, {id})
        return data
    } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
}

export const getProjectTeam = async (projectId : Project['_id']) => {
    try {
        const url = `/projects/${projectId}/team`
        const {data} = await api.get(url)
        const response = teamMembersSchema.safeParse(data)
        if (response.success) {
            return response.data
        }
    } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
}

export const removeUserFromProject = async ({projectId, id} : Pick<TeamApi, 'projectId' | 'id'>) => {
    try {
        const url = `/projects/${projectId}/team/${id}`
        const {data} = await api.delete<string>(url)
        return data
    } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
}