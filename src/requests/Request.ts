type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'

interface RequestOptions {
  method: HttpMethod
  body?: unknown
}

export const request = async <T>(
  url: string,
  options: RequestOptions
): Promise<T> => {
  let response: Response

  try {
    response = await fetch(url, {
      method: options.method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: options.body ? JSON.stringify(options.body) : undefined
    })
  } catch (error) {
    throw new Error('There was a problem loading the data.')
  }

  if (response.status === 401) {
    throw new Error('Unauthorized')
  }

  if (response.status >= 400 && response.status < 500) {
    return Promise.reject(await parseError(response))
  }

  if (response.status >= 500) {
    throw new Error('There was a problem loading the data.')
  }

  if (response.status === 204) {
    return undefined as T
  }

  return response.json()
}

const parseError = async (response: Response) => {
  try {
    return await response.json()
  } catch {
    return { message: 'Request failed' }
  }
}

const API_BASE_URL = "https://localhost:7077/api"
export const get = <T>(url: string): Promise<T> =>
  request<T>(API_BASE_URL + url, { method: 'GET' })

export const post = <T, B = unknown>(url: string, body: B): Promise<T> =>
  request<T>(API_BASE_URL + url, { method: 'POST', body })

export const put = <T, B = unknown>(url: string, body: B): Promise<T> =>
  request<T>(API_BASE_URL + url, { method: 'PUT', body })

export const del = <T>(url: string): Promise<T> =>
  request<T>(API_BASE_URL + url, { method: 'DELETE' })
