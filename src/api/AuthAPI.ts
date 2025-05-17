import api from "@/lib/axios";
import { isAxiosError } from "axios";
import type { ConfirmToken, RequestConfirmationCodeForm, UserRegistrationForm } from "../types";

export async function createAccount(formData: UserRegistrationForm) {
  try {
    const url = '/auth/create-account'
    const {data} = await api.post<string>(url, formData)
    return data
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
}

export async function confirmAccount(token: ConfirmToken) {
  try {
    const url = '/auth/confirm-account'
    const {data} = await api.post<string>(url, token)
    return data
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
}

export async function requestConfirmationCode(email: RequestConfirmationCodeForm) {
  try {
    const url = '/auth/request-code'
    const {data} = await api.post<string>(url, email)
    return data
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
}
