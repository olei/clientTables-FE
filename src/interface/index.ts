export interface Ihome {
  name?: string
  siteInfo?: string
  vLogin?: boolean
  data?: any
}

export interface IhomeAction {
  homeAction?: (n: string) => void
  getData?: (uv: string, pv: string) => void
  getVlogin?: () => void
  home?: Ihome
}

export interface IHomeState {
  userValue?: string
  passwordValue?: string,
  redirect?: boolean
}