import type { ApiResponse, HttpMethod } from '../types/requests/requests'

interface RequestOptions {
  method: HttpMethod
  body?: unknown
  headers?: Record<string, string>
}

const API_BASE_URL = 'https://localhost:7077/api'

export const request = async <T>(
  endpoint: string,
  options: RequestOptions
): Promise<ApiResponse<T>> => {
  let response: Response

  try {
    response = await fetch(API_BASE_URL + endpoint, {
      method: options.method,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers
      },
      body: options.body ? JSON.stringify(options.body) : undefined
    })
  } catch (error) {
    return Promise.reject({
      data: undefined,
      status: 0,
      error: 'Network error'
    } as ApiResponse<T>)
  }

  if (response.status === 401) {
    return Promise.reject({
      data: undefined,
      status: 401,
      error: 'Unauthorized'
    } as ApiResponse<T>)
  }

  if (response.status >= 400 && response.status < 500) {
    const err = await parseError(response)
    return Promise.reject({
      data: undefined,
      status: response.status,
      error: err.message
    } as ApiResponse<T>)
  }

  if (response.status >= 500) {
    return Promise.reject({
      data: undefined,
      status: response.status,
      error: 'Server error'
    } as ApiResponse<T>)
  }

  if (response.status === 204) {
    return { data: undefined as unknown as T, status: 204 } as ApiResponse<T>
  }

  const data = await response.json()
  return { data, status: response.status } as ApiResponse<T>
}

const parseError = async (response: Response) => {
  try {
    return await response.json()
  } catch {
    return { message: 'Request failed' }
  }
}
