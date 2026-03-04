import type { ApiResponse } from "../types/requests/requests"
import { request } from "./Request"

export const get = <T>(url: string): Promise<ApiResponse<T>> =>
  request<T>(url, { method: 'GET' })

export const post = <T, B = unknown>(
  url: string,
  body: B
): Promise<ApiResponse<T>> => request<T>(url, { method: 'POST', body })

export const put = <T, B = unknown>(
  url: string,
  body: B
): Promise<ApiResponse<T>> => request<T>(url, { method: 'PUT', body })

export const del = <T>(url: string): Promise<ApiResponse<T>> =>
  request<T>(url, { method: 'DELETE' })
