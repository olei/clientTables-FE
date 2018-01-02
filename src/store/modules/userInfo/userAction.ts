import axios from 'axios'
import types from '../../types'
const W = window as any
/**
 * Created by olei on 2017/12/30.
 */
const type = types as any

export const getUserData = (id: number) => ({
  type: type.GET_USER_INFO,
  payload: {
    promise: axios.get(`${W.$config.debug}/getClient/${id}`)
  }
})

export const createUserData = (name: string, idCard: string, phone: string, remarks: string) => ({
  type: type.CREATE_USER_INFO,
  payload: {
    promise: axios.post(`${W.$config.debug}/createClient`, `name=${encodeURIComponent(name)}&idCard=${idCard}&phone=${phone}&remarks=${encodeURIComponent(remarks)}`)
  }
})

export const putUserData = (id: number, name: string, idCard: string, phone: string, remarks: string) => ({
  type: type.PUT_USER_INFO,
  payload: {
    promise: axios.put(`${W.$config.debug}/clients/${id}`, `name=${encodeURIComponent(name)}&idCard=${idCard}&phone=${phone}&remarks=${encodeURIComponent(remarks)}`)
  }
})

export const delUserData = (id: number) => ({
  type: type.DELELT_USER_INFO,
  payload: {
    promise: axios.delete(`${W.$config.debug}/client/${id}`)
  }
})