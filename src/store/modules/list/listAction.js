import axios from 'axios'
import types from '../../types'
const W = window
/**
 * Created by olei on 2017/12/30.
 */
const type = types

export const clearListData = () => ({
  type: type.CLEAR_LIST_DATA,
  content: {}
})

export const getListData = (limit, offset) => ({
  type: type.GET_LIST_ITEMS,
  payload: {
    promise: axios.get(`${W.$config.debug}/clientList?limit=${limit}&offset=${offset}`)
  }
})

export const getSearchData = key => ({
  type: type.GET_LIST_ITEMS,
  payload: {
    promise: axios.get(`${W.$config.debug}/search?key=${key}`)
  }
})

export const setSearchKey = key => ({
  type: type.SET_SEARCH_KEY,
  content: key
})