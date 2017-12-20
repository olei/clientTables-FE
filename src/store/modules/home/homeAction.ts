import axios from 'axios'
import types from '../../types'
import { Ihome } from '../../../interface'
/**
 * Created by olei on 2017/12/30.
 */
const type = types as any
export const homeAction = (str: string): any => ({
  type: type.GET_SITE_DATA,
  content: str
})

export const getData = (userName: string, password: string) => ({
  type: type.GET_LOGIN_ITEMS,
  payload: {
    promise: axios.post(`http://10.30.30.16:8088/onLogin`, `userName=${userName}&password=${password}`)
  }
})

export const getVlogin = () => ({
  type: type.GET_VLOGIN,
  payload: {
    promise: axios.get(`http://10.30.30.16:8088/vLogin`)
  }
})