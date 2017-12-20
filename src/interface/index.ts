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
  list: any
}

export interface IListState {
  data: any
  value: string
  limit: number
  offset: number
}