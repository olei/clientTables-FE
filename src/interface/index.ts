export interface Ihome {
  name?: string
  siteInfo?: string
  vLogin?: boolean | number
  data?: any
}

// home interface
export interface IhomeAction {
  homeAction?: (n: string) => void
  getData?: (uv: string, pv: string) => void
  getListData?: (l: number, o: number) => void
  getVlogin?: () => void
  home?: Ihome
}

export interface IHomeState {
  userValue?: string
  passwordValue?: string,
  redirect?: boolean
  showInput?: string
}

// list interface
export interface IlistAction {
  getListData?: (l: number, o: number) => void
  getSearchData?: (k: string) => void
  list: any
}

export interface IListState {
  redirect: boolean
  data: any
  value: string
  limit: number
  offset: number
}

export interface IaddClient {
  userValue: string
  phone: string
  idCard: string
  query: any
}