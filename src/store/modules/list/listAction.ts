import axios from 'axios'
import types from '../../types'
import { Ihome } from '../../../interface'
const W = window as any
/**
 * Created by olei on 2017/12/30.
 */
const type = types as any

export const clearListData = () => ({
  type: type.CLEAR_LIST_DATA,
  content: {}
})

export const getListData = (limit: number, offset: number) => ({
  type: type.GET_LIST_ITEMS,
  payload: {
    promise: axios.get(`${W.$config.debug}/clientList?limit=${limit}&offset=${offset}`)
  }
})

export const getSearchData = (key: string) => ({
  type: type.GET_LIST_ITEMS,
  payload: {
    promise: axios.get(`${W.$config.debug}/search?key=${key}`)
  }
})

export const setSearchKey = (key: string) => ({
  type: type.SET_SEARCH_KEY,
  content: key
})