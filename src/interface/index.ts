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


export interface IListState {
  redirect: boolean
  data: any
  value: string
  total: string
  limit: number
  offset: number
}

export interface IuserInfoProps {
  putUserData?: (id: number, name: string, idCard: string, phone: string, remarks: string) => void
  getUserData?: (id: number) => void
  delUserData?: (id: number) => void
  createUserData?: (name: string, idCard: string, phone: string, remarks: string) => void
  user?: any
}

export interface IlistAction {
  getListData?: (l: number, o: number) => void
  getSearchData?: (k: string) => void
  list: any
}

export interface IuserInfoState {
  query: any
}

export interface IaddClient {
  id: number | null
  buttType: string
  userValue: string
  phone: string
  idCard: string
  remarks: string
  ctrlType: string
  goList: boolean
  query: any
}