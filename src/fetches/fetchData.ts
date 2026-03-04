import { request } from '../requests/Request'
import type { ApiResponse, HttpMethod } from '../types/requests/requests'

export async function fetchData<T>(
  url: string,
  method: HttpMethod = 'GET',
  body?: unknown
): Promise<T> {
  const res: ApiResponse<T> =
    method === 'GET'
      ? await request<T>(url, { method })
      : await request<T>(url, { method, body })

  if (res.error) throw new Error(res.error)
  return res.data
}
