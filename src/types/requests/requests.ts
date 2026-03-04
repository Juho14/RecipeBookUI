export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'

export interface ApiResponse<T> {
  data: T
  status: number
  error?: string
}