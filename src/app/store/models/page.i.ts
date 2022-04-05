

export interface Page<T>{
  data: T[],
  page: number,
  total: number,
  pageSize: number
}
